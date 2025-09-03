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
  const editorContainerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    let quill;

    (async () => {
      const Quill = (await import("quill")).default;
      await import("quill/dist/quill.bubble.css");

      const Font = Quill.import("formats/font");
      Font.whitelist = ["sans", "serif", "monospace", "roboto", "times-new-roman", "inter"];
      Quill.register(Font, true);

      const modules = {
        toolbar: [
          [{ font: Font.whitelist }], // font dropdown
          [{ size: [] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
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

  return (
    <div className="section-container py-10">
      <Button label={"Publish"} className={"float-right"} />
      <input
        className="outline-none text-3xl mt-5 font-semibold placeholder:text-[#A6A6A6] w-2/3"
        placeholder="Title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />
      <div className="flex mt-3">
        <div
          className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <GoPlus
            className={`text-2xl transition-transform ease-in-out duration-500 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`flex gap-2 ${isOpen ? "w-fit pl-5" : "w-0 overflow-hidden"}`}
        >
          <div
            title="Add an image"
            className="border border-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
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
