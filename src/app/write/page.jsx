"use client"

import Button from "@/components/Button"
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CgImage } from "react-icons/cg";
import { MdOndemandVideo } from "react-icons/md";
import { LuCodeXml } from "react-icons/lu";

export default function WritePost(){
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="section-container py-10">
            <Button label={"Publish"} className={"float-right"}/>
           <input className="outline-none text-3xl mt-5 font-semibold placeholder:text-[#A6A6A6] w-2/3" placeholder="Title"/>
           <div className="flex gap-5 mt-3">
            <div className="border border-dark w-8 h-8 flex justify-center items-center rounded-full" onClick={()=> setIsOpen((prev)=> !prev)}>
                <GoPlus className={`text-2xl transition-transform ease-in-out duration-500 ${isOpen ? "rotate-0" : "rotate-180"}`}/>
            </div>
            <div className={`flex gap-2 ${isOpen ? "w-fit" : "w-0 overflow-hidden"}`}>
                <div title="Add a image" className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"><CgImage className="text-lg"/></div>
                <div title="Add a image" className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"><MdOndemandVideo className="text-lg"/></div>
                <div title="Add a image" className="border border-dark w-8 h-8 flex justify-center items-center rounded-full"><LuCodeXml className="text-lg"/></div>
            </div>
           </div>
        </div>
    )
}