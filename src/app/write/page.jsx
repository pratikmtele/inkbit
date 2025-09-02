"use client";

import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { CgImage } from "react-icons/cg";
import { MdOndemandVideo } from "react-icons/md";
import { LuCodeXml } from "react-icons/lu";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const Font = Quill.import("formats/font");

export default function WritePost() {
  const [isOpen, setIsOpen] = useState(false);

  const editorRef = useRef(null);

  Font.whitelist = [
      "sans",
      "serif",
      "monospace",
      "roboto",
      "times-new-roman",
    ];
    Quill.register(Font, true);

    const modules = {
      toolbar: [
        [{ font: Font.whitelist }], // font dropdown
        [{ size: [] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
    };

  useEffect(() => {
    if (editorRef.current) {
      new Quill(editorRef.current, {
        theme: "bubble",
        placeholder: "Tell your story...",
        modules: modules
      });
    }
  }, []);

  return (
    <div className="section-container py-10">
      <Button label={"Publish"} className={"float-right"} />
      <input
        className="outline-none text-3xl mt-5 font-semibold placeholder:text-[#A6A6A6] w-2/3"
        placeholder="Title"
      />
      <div className="flex gap-5 mt-3">
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
          className={`flex gap-2 ${isOpen ? "w-fit" : "w-0 overflow-hidden"}`}
        >
          <div
            title="Add an image"
            className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"
          >
            <CgImage className="text-lg" />
          </div>
          <div
            title="Add a video"
            className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"
          >
            <MdOndemandVideo className="text-lg" />
          </div>
          <div
            title="Add code"
            className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"
          >
            <LuCodeXml className="text-lg" />
          </div>
        </div>
        <div className="flex-1">
          <div ref={editorRef} className=""></div>
        </div>
      </div>
    </div>
  );
}
