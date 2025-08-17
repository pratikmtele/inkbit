"use client";

import Image from "next/image";
import Link from "next/link";

export default function Category({ label, imageUrl, slug }) {
  return (
    <Link href={slug}>
      <div className="relative rounded-lg h-[100px] w-[250px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={label}
          fill
          className="object-cover brightness-50 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h4 className="text-md absolute left-4 bottom-2 text-white underline underline-offset-4 w-fit">
          {label}
        </h4>
      </div>
    </Link>
  );
}
