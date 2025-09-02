import React from "react";
import Button from "@/components/Button";
import FeaturedPost from "../../../public/featured_post.png";
import Image from "next/image";
import Badge from "@/components/Badge";
import Slider from "@/components/Slider";
import PostCard from "@/components/PostCard";
import PostFeed from "@/components/PostFeed";
import CategoryTags from "@/components/CategoryTags";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function App() {
  const posts = [
    {
      id: 1,
      imageUrl: "/post_one.png",
      category: "Coding",
      title: "Easiest way for React State Management",
      description:
        "State management is a fundamental concept in React development, crucial for building dynamic and interactive user interfaces. The UI accurately reflects the current state of the application.",
      date: "27 Aug, 2025",
      slug: "/",
    },
    {
      id: 2,
      imageUrl: "/post_two.png",
      category: "Technology",
      title: "Why Technology Is A Necessity",
      description:
        "Technology is crucial because it enhances efficiency, improves communication, provides access to information, and drives innovation across various sectors.",
      date: "14 Aug 2025",
      slug: "/",
    },
    {
      id: 3,
      imageUrl: "/post_three.png",
      category: "Lifestyle",
      title: "151 Lifestyle Blog Post Ideas That Will Delight Your Readers",
      description:
        "A diverse range of lifestyle blog post ideas can engage readers. These include personal stories, practical advice, and thought-provoking discussions on topics like wellness, relationships, and personal development.",
      date: "10 Aug 2025",
      slug: "/",
    },
  ];

  const postFeeds = [
    {
      id: 1,
      title: "Easiest way for React State Management",
      category: "Coding",
      author: "Pratik Tele",
      date: "17 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 2,
      title: "Mastering JavaScript in 2025 — What’s New & What’s Next",
      category: "Web Development",
      author: "Pratik Tele",
      date: "14 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 3,
      title: "Why Technology Is A Necessity",
      category: "Technology",
      author: "Pratik Tele",
      date: "10 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 4,
      title: "151 Lifestyle Blog Post Ideas That Will Delight Your Readers",
      category: "Lifestyle",
      author: "Pratik Tele",
      date: "8 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 5,
      title: "Every React Concept Explained in 5 Minutes",
      category: "Web development",
      author: "Pratik Tele",
      date: "10 Aug, 2025",
      postUrl: "#"
    },
  ];

  const categoryTags = [
    { id: 1, label: "Coding", className: "bg-primary/30 dark:bg-primary/70", slug: "#" },
    { id: 2, label: "Technology", className: "bg-secondary/30 dark:bg-secondary/70", slug: "#" },
    { id: 3, label: "Lifestyle", className: "bg-orange/30 dark:bg-orange/70", slug: "#" },
    { id: 4, label: "Travel", className: "bg-pink/30 dark:bg-pink/70", slug: "#" },
    { id: 5, label: "Web Development", className: "bg-indigo/30 dark:bg-indigo/70", slug: "#" },
    { id: 6, label: "Fashion", className: "bg-indigo/30 dark:bg-indigo/70", slug: "#" },
    { id: 7, label: "Culture", className: "bg-pink/30 dark:bg-pink/70", slug: "#" },
    { id: 8, label: "Food", className: "bg-primary/30 dark:bg-primary/70", slug: "#" },
    { id: 9, label: "Style", className: "bg-secondary/30 dark:bg-secondary/70", slug: "#" },
    { id: 10, label: "Food", className: "bg-orange/30 dark:bg-orange/70", slug: "#" },
    { id: 11, label: "Games", className: "bg-primary/30 dark:bg-primary/70", slug: "#" },
    { id: 12, label: "Finance", className: "bg-secondary/30 dark:bg-secondary/70", slug: "#" },
    { id: 13, label: "Politics", className: "bg-indigo/30 dark:bg-indigo/70", slug: "#" },
  ];

  return (
    <main className="bg-white dark:bg-black">
      {/* hero section */}
      <div className="section-container py-10 flex flex-col w-full gap-4 items-center bg-light dark:bg-dark">
        <TypewriterEffect />
        <p className="text-md text-dark-gray dark:text-gray font-light text-center">
          Read and write amazing stories from people around the world.
        </p>
        <Button label="Write a Story" className="mt-3" />
      </div>

      {/* Featured Post */}
      <div className="section-container py-10 flex flex-col items-center md:flex-row gap-7 md:gap-10">
        <Image
          src={FeaturedPost}
          alt="title"
          className=" drop-shadow-lg flex-1 md:w-80 rounded-lg"
        />
        <div className="flex-1 flex flex-col gap-2 justify-center text-dark dark:text-light">
          <Badge
            label="Featured Post"
            className="text-sm font-semibold uppercase"
          />
          <h2 className="line-clamp-2">
            Mastering JavaScript in 2025 — What’s New & What’s Next
          </h2>
          <p className="md:pr-10 line-clamp-4 md:mb-5 dark:text-gray">
            Explore JavaScript in depth — from variables and functions to
            closures and async/await. A perfect guide for beginners and those
            looking to sharpen their skills.
          </p>
          <Button label="Read More" className="w-fit" />
        </div>
      </div>

      {/*Explore by Category section */}
      <div className="section-container pt-0 pb-10 md:py-10 w-full">
        <h2 className="text-dark dark:text-light">Choose Your Interest</h2>
        <p className="text-dark dark:text-gray mt-1font-light">
          Find stories you love, from coding tips to creative writing
        </p>
        <div className="mt-6 w-full">
          <Slider />
        </div>
      </div>

      {/* posts section */}
      <div className="section-container pt-0 pb-10 md:py-10 flex flex-col md:flex-row gap-5">
        {/* Recent posts */}
        <div className="flex-2 flex flex-col gap-3">
          <h2 className="text-dark dark:text-light mb-4 leading-6">
            Recent Posts
          </h2>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              variant="horizontal"
              imageUrl={post.imageUrl}
              category={post.category}
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
            />
          ))}
          <Button label="View More" className="w-fit m-auto mt-3" />
        </div>
        {/* side section */}
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="mb-1 text-dark dark:text-light">Most Popular</h3>
            {postFeeds.map((feed) => (
              <PostFeed
                key={feed.id}
                title={feed.title}
                category={feed.category}
                author={feed.author}
                date={feed.date}
                className={"mt-3 md:mt-5"}
              />
            ))}
          </div>
          {/* Categories */}
          <div className="mt-5">
            <h3 className="text-dark dark:text-light mb-3">Categories</h3>
            <div className="flex flex-row flex-wrap gap-1">
              {
                categoryTags.map((categoryTag) => (
                  <CategoryTags key={categoryTag.id} label={categoryTag.label} className={categoryTag.className} slug={categoryTag.slug} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
