import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  variant = "horizontal", // "horizontal" | "vertical"
  imageUrl,
  category,
  title,
  description,
  author,
  date,
  slug,
}) {
  return (
    <>
      {variant === "horizontal" ? (
        <div className="flex md:min-h-[280px] flex-col md:flex-row border border-gray dark:border-transparent rounded-lg md:flex-1 overflow-hidden shadow-md group">
          <div className="relative w-full h-full  md:w-[270px] md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={180}
              className="object-cover object-center w-full h-full block md:hidden group-hover:scale-105 transition-transform ease-in-out duration-300"
            />
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center hidden md:block group-hover:scale-105 transition-transform ease-in-out duration-300"
            />
          </div>
          <div className="p-4 md:flex-2 flex flex-col gap-2 justify-between">
            <p className="text-md font-semibold text-secondary">{category}</p>
            <h2 className="!text-xl font-semibold md:text-xl leading-right line-clamp-2 text-dark dark:text-light">
              {title}
            </h2>
            <p className="text-sm text-dark dark:text-gray line-clamp-3">
              {description}
            </p>
            <Link
              href={slug}
              className="text-sm w-fit text-dark dark:text-light font-medium border-b-[1.6px] hover:border-primary hover:text-primary transition-colors ease-in-out duration-200"
            >
              Read More
            </Link>

            <p className="text-sm text-dark-gray text-right">{date}</p>
          </div>
        </div>
      ) : (
        <div className="max-w-[400px] h-full border border-gray dark:border-dark rounded-lg overflow-hidden shadow-md dark:shadow">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform ease-in-out duration-300"
            />
          </div>

          <div className="p-4">
            <h2 className="!text-lg font-bold line-clamp-2 text-dark dark:text-light">
              {title}
            </h2>
            <p className="text-sm text-dark dark:text-gray line-clamp-3 mt-1">
              {description}
            </p>

            <div className="flex justify-between items-center mt-3 text-xs text-dark-gray">
              <span>{author ? `By ${author}` : ""}</span>
              <span>{date}</span>
            </div>

            <Link
              href={slug}
              className="text-sm w-fit text-dark dark:text-light font-medium border-b-[1.6px] hover:border-primary hover:text-primary transition-colors ease-in-out duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
