import Link from "next/link";

export default function SocialIcons({ Icon, slug }) {
  return (
    <Link href={slug}>
      <div className="p-2 bg-dark dark:bg-light rounded-full border border-transparent hover:bg-light hover:dark:bg-dark hover:border-dark hover:dark:border-light group transition-all duration-300 ease-in-out">
        <Icon className="text-light dark:text-dark text-lg group-hover:text-dark group-hover:dark:text-light" />
      </div>
    </Link>
  );
}
