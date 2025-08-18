import Link from "next/link";

export default function CategoryTags({ label, slug, className }) {
    const href = slug || "#";
    return (
        <Link href={href} className={`w-fit px-2.5 py-2 rounded-lg relative overflow-hidden transition-all duration-300 group ${className}`}>
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
            <h6 className="text-sm text-dark dark:text-light font-semibold relative z-10">{label}</h6>
        </Link>
    )
}