import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";

export default function PostFeed({ title, postUrl, imageUrl, category, author, date, className }) {
  const href = postUrl || "#";
  return (
    <div className={` group ${className}`}>
      {imageUrl && (
        <div className="relative w-[140px] h-[100px] overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={imageUrl}
            fill
            alt={title}
            className="object-cover object-center rounded-lg group-hover:scale-105 transition-transform ease-in-out duration-300"
            sizes="140px"
          />
        </div>
      )}
      <div className="w-full">
        {category && <Badge label={category} className="text-xs font-semibold uppercase" />}
        <Link href={href}>
          <h5 className="text-md text-dark dark:text-light font-semibold leading-tight mt-2 mb-1">{title}</h5>
        </Link>
        <p className="text-sm">
          {author && <span className="text-dark dark:text-light">{author}&nbsp;-&nbsp;</span>}
          <span className="text-dark-gray">{date}</span>
        </p>
      </div>
    </div>
  );
}