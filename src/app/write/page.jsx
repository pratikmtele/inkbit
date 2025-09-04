"use client";

import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { CgImage } from "react-icons/cg";
import { MdOndemandVideo } from "react-icons/md";
import { LuCodeXml } from "react-icons/lu";

export default function WritePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [imageFile, setImageFile] = useState("");
  const editorContainerRef = useRef(null);
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) return;
    let quill;

    (async () => {
      const Quill = (await import("quill")).default;
      await import("quill/dist/quill.bubble.css");

      window.Quill = Quill;

      const { default: ImageResize } = await import("@mgreminger/quill-image-resize-module");
      Quill.register("modules/imageResize", ImageResize);

      const Font = Quill.import("formats/font");
      Font.whitelist = ["sans", "serif", "monospace", "Inter"];
      Quill.register(Font, true);

      const modules = {
        toolbar: [
          [{ font: Font.whitelist }],
          [{ size: [] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
        imageResize: {
            parchment: Quill.import("parchment"),
          },
      };

      if (editorContainerRef.current && !quillRef.current) {
        quill = new Quill(editorContainerRef.current, {
          theme: "bubble",
          placeholder: "Tell your story...",
          modules,
        });

        quill.root.innerHTML = value;

        quill.on("text-change", () => {
          setValue(quill.root.innerHTML);
        });

        quillRef.current = quill;
      }
    })();

    return () => {
      quill = null;
    };
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      const quill = quillRef.current;
      if (!quill) return;

      const range = quill.getSelection(true) || { index: quill.getLength() };
      quill.insertEmbed(range.index, "image", base64Image);
      quill.setSelection(range.index + 1);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
    setIsOpen(false);
  };

  return (
    <div className="section-container py-10">
      <Button label={"Publish"} className={"float-right"} />
      <input
        className="outline-none text-3xl mt-5 font-semibold placeholder:text-[#A6A6A6] w-2/3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex mt-3">
        <div
          className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <GoPlus
            className={`text-2xl transition-transform ease-in-out duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`flex gap-2 ${
            isOpen ? "w-fit pl-5" : "w-0 overflow-hidden"
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            name="imageFile"
            hidden
            onChange={handleFileChange}
          />
          <div
            htmlFor="imageFile"
            title="Add an image"
            className="border border-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
            onClick={handleImageClick}
          >
            <CgImage className="text-lg text-primary" />
          </div>
          <div
            title="Add a video"
            className="border border-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
          >
            <MdOndemandVideo className="text-lg text-primary" />
          </div>
          <div
            title="Add code"
            className="border border-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
          >
            <LuCodeXml className="text-lg text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div ref={editorContainerRef} />
        </div>
      </div>
    </div>
  );
}
