import Link from "next/link";
import PostsPage from "./types";
import Image from "next/image";

export default async function PostPage({ params }) {
    const { slug } = await params;

    if (slug === "featured-posts" || slug === "most-popular-posts") {
        return (
            <PostsPage slug={slug} />
        )
    }

    return (
        <div>
            <div className="py-10 section-container">
                <h6 className="font-semibold text-md">
                    <Link href={"#"} className="hover:text-primary">Home</Link>&nbsp;/&nbsp;
                    <Link href={"#"} className="hover:text-primary">Category</Link>&nbsp;/&nbsp;
                    <span className="text-primary">Easiest way for  React State Management</span>
                </h6>
            </div>
            <div className="py-10 section-container">
                <div>
                    <h1 className="text-dark dark:text-light leading-snug">Easiest way for  React State Management</h1>
                    <div className="flex gap-3 items-center mt-2">
                        <div className="relative w-10 h-10 overflow-hidden bg-light dark:bg-dark p-2 rounded-full">
                            <Image src="/avatar.png" fill alt="Avatar" />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <h5 className="font-semibold">Pratik Tele</h5>
                            <li className="text-dark-gray">14 Aug, 2025</li>
                        </div>
                    </div>
                    <div className="relative mt-5 rounded-lg overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                        <Image src="/post_image.png" fill alt="post image" className="object-cover" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-2"></div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    )
}