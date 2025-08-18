import Button from "@/components/Button";
import CategoryTags from "@/components/CategoryTags";
import PostCard from "@/components/PostCard";
import PostFeed from "@/components/PostFeed";

export default function Posts() {

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
    {
      id: 4,
      imageUrl: "/post_three.png",
      category: "Lifestyle",
      title: "151 Lifestyle Blog Post Ideas That Will Delight Your Readers",
      description:
        "A diverse range of lifestyle blog post ideas can engage readers. These include personal stories, practical advice, and thought-provoking discussions on topics like wellness, relationships, and personal development.",
      date: "10 Aug 2025",
      slug: "/",
    },
    {
      id: 5,
      imageUrl: "/post_three.png",
      category: "Lifestyle",
      title: "151 Lifestyle Blog Post Ideas That Will Delight Your Readers",
      description:
        "A diverse range of lifestyle blog post ideas can engage readers. These include personal stories, practical advice, and thought-provoking discussions on topics like wellness, relationships, and personal development.",
      date: "10 Aug 2025",
      slug: "/",
    },
    {
      id: 6,
      imageUrl: "/post_three.png",
      category: "Lifestyle",
      title: "151 Lifestyle Blog Post Ideas That Will Delight Your Readers",
      description:
        "A diverse range of lifestyle blog post ideas can engage readers. These include personal stories, practical advice, and thought-provoking discussions on topics like wellness, relationships, and personal development.",
      date: "10 Aug 2025",
      slug: "/",
    },
  ];

  const latestPosts = [
    {
      id: 100,
      title: "Easiest way for React State Management",
      imageUrl: "/post_one.png",
      date: "17 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 101,
      title: "Mastering JavaScript in 2025 — What’s New & What’s Next",
      imageUrl: "/post_two.png",
      date: "14 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 102,
      title: "Why Technology Is A Necessity",
      imageUrl: "/post_three.png",
      date: "10 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 103,
      title: "Easiest way for React State Management",
      imageUrl: "/post_one.png",
      date: "17 Aug, 2025",
      postUrl: "#"
    },
    {
      id: 104,
      title: "Mastering JavaScript in 2025 — What’s New & What’s Next",
      imageUrl: "/post_two.png",
      date: "14 Aug, 2025",
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
    <div>
      <div className="w-full section-container py-10 bg-light dark:bg-dark text-center uppercase font-bold tracking-wide">
        <h2 className="text-dark dark:text-light">All Posts</h2>
      </div>
      <div className="section-container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white dark:bg-black">
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              variant="vertical"
              imageUrl={post.imageUrl}
              category={post.category}
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
            />
          ))}
          </div>
          <div className="flex justify-center pt-7">
          <Button label="Load More" className="w-fit"/>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <h3 className="text-dark dark:text-light leading-5">Latest Posts</h3>
            {
              latestPosts.map((latestPost) => (
                <PostFeed
                  key={latestPost.key}
                  title={latestPost.title}
                  imageUrl={latestPost.imageUrl}
                  className={"border-b border-b-gray dark:border-b-dark-gray py-5 flex flex-row gap-2 items-center"}
                  date={latestPost.date}
                  postUrl={latestPost.postUrl} />
              ))
            }
          </div>
          <div>
            <h3 className="text-dark dark:text-light mt-5">Categories</h3>
            <div className="flex flex-row flex-wrap gap-1 mt-3">
              {
                categoryTags.map((categoryTag) => (
                  <CategoryTags 
                  key={categoryTag.id} 
                  label={categoryTag.label} 
                  className={categoryTag.className} 
                  slug={categoryTag.slug} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}