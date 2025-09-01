import Link from "next/link";
import PostsPage from "./types";
import Image from "next/image";
import PostFeed from "@/components/PostFeed";
import CategoryTags from "@/components/CategoryTags";
import Comment from "@/components/Comment";

export default async function PostPage({ params }) {
  const { slug } = await params;

  if (slug === "featured-posts" || slug === "most-popular-posts") {
    return <PostsPage slug={slug} />;
  }

  const mostPopularPosts = [
    {
      id: 100,
      title: "Easiest way for React State Management",
      category: "Coding",
      imageUrl: "/post_one.png",
      author: "Pratik Tele",
      date: "17 Aug, 2025",
      postUrl: "#",
    },
    {
      id: 101,
      title: "Mastering JavaScript in 2025 — What’s New & What’s Next",
      category: "Web Development",
      imageUrl: "/post_two.png",
      author: "Pratik Tele",
      date: "14 Aug, 2025",
      postUrl: "#",
    },
    {
      id: 102,
      title: "Why Technology Is A Necessity",
      category: "Technology",
      imageUrl: "/post_three.png",
      author: "Pratik Tele",
      date: "10 Aug, 2025",
      postUrl: "#",
    },
    {
      id: 103,
      title: "Easiest way for React State Management",
      category: "Coding",
      imageUrl: "/post_one.png",
      author: "Pratik Tele",
      date: "17 Aug, 2025",
      postUrl: "#",
    },
    {
      id: 104,
      title: "Mastering JavaScript in 2025 — What’s New & What’s Next",
      category: "Web Development",
      imageUrl: "/post_two.png",
      author: "Pratik Tele",
      date: "14 Aug, 2025",
      postUrl: "#",
    },
  ];

  const categoryTags = [
    {
      id: 1,
      label: "Coding",
      className: "bg-primary/30 dark:bg-primary/70",
      slug: "#",
    },
    {
      id: 2,
      label: "Technology",
      className: "bg-secondary/30 dark:bg-secondary/70",
      slug: "#",
    },
    {
      id: 3,
      label: "Lifestyle",
      className: "bg-orange/30 dark:bg-orange/70",
      slug: "#",
    },
    {
      id: 4,
      label: "Travel",
      className: "bg-pink/30 dark:bg-pink/70",
      slug: "#",
    },
    {
      id: 5,
      label: "Web Development",
      className: "bg-indigo/30 dark:bg-indigo/70",
      slug: "#",
    },
    {
      id: 6,
      label: "Fashion",
      className: "bg-indigo/30 dark:bg-indigo/70",
      slug: "#",
    },
    {
      id: 7,
      label: "Culture",
      className: "bg-pink/30 dark:bg-pink/70",
      slug: "#",
    },
    {
      id: 8,
      label: "Food",
      className: "bg-primary/30 dark:bg-primary/70",
      slug: "#",
    },
    {
      id: 9,
      label: "Style",
      className: "bg-secondary/30 dark:bg-secondary/70",
      slug: "#",
    },
    {
      id: 10,
      label: "Food",
      className: "bg-orange/30 dark:bg-orange/70",
      slug: "#",
    },
    {
      id: 11,
      label: "Games",
      className: "bg-primary/30 dark:bg-primary/70",
      slug: "#",
    },
    {
      id: 12,
      label: "Finance",
      className: "bg-secondary/30 dark:bg-secondary/70",
      slug: "#",
    },
    {
      id: 13,
      label: "Politics",
      className: "bg-indigo/30 dark:bg-indigo/70",
      slug: "#",
    },
  ];

  const comments = [
    {
      id: 1,
      avatar: "/avatar.png",
      author: "Pratik Tele",
      date: "27 Aug, 2025",
      comment: "Thank you for sharing this valuable information. It was well-written and easy to understand."
    },
    {
      id: 2,
      avatar: "/avatar.png",
      author: "Pratik Tele",
      date: "27 Aug, 2025",
      comment: "Thank you for sharing this valuable information. It was well-written and easy to understand."
    },
    {
      id: 3,
      avatar: "/avatar.png",
      author: "Pratik Tele",
      date: "27 Aug, 2025",
      comment: "Thank you for sharing this valuable information. It was well-written and easy to understand."
    },
  ]

  return (
    <div className="bg-white dark:bg-black">
      <div className="py-10 section-container">
        <h6 className="font-semibold text-md">
          <Link href={"#"} className="text-dark dark:text-light hover:text-primary">
            Home
          </Link>
          &nbsp;<span className="text-dark dark:text-light">/</span>&nbsp;
          <Link href={"#"} className="text-dark dark:text-light hover:text-primary">
            Category
          </Link>
          &nbsp;<span className="text-dark dark:text-light">/</span>&nbsp;
          <span className="text-primary">
            Easiest way for React State Management
          </span>
        </h6>
      </div>
      <div className="py-10 section-container">
        <div>
          <h1 className="text-dark dark:text-light leading-snug">
            Easiest way for React State Management
          </h1>
          <div className="flex gap-3 items-center mt-2">
            <div className="relative w-10 h-10 overflow-hidden bg-light dark:bg-dark p-2 rounded-full">
              <Image src="/avatar.png" fill alt="Avatar" />
            </div>
            <div className="flex gap-4 text-sm">
              <h5 className="font-semibold text-dark dark:text-light">Pratik Tele</h5>
              <li className="text-dark-gray dark:text-gray">14 Aug, 2025</li>
            </div>
          </div>
          <div className="relative mt-5 rounded-lg overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-5">
            <Image
              src="/post_image.png"
              fill
              alt="post image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 text-dark dark:text-light">
          <div className="flex-2 w-full">
            <p>
              State management is an important aspect while developing react
              applications. Managing the ‘state’ i.e. the data that changes over
              time and affects what is displayed in the user interface is
              necessary today as the applications get complex with the new
              advancements and years passing by. It includes things like user
              inputs, responses from APIs, and the current status of different
              UI components. Effective state management ensures that the UI is
              updated consistently and correctly whenever the state changes
              thereby improving the application's reliability and user
              experience.
            </p>
            <h3 className="my-3">
              State management in react is can be majorly divided into two
              parts.
            </h3>
            <ul className=" list-disc list-outside ml-4.5">
              <li>
                <strong>Local state management:</strong> Managing state that is
                specific to a particular component. It involves handling data or
                UI elements that only need to affect a single component, making
                it a straightforward and efficient approach. React’s own
                useState and useReducer hooks are sufficient to perform this.
              </li>
              <li>
                <strong>Global state management:</strong> Managing state that
                needs to be shared across multiple components within an
                application. Unlike local state, which is confined to a single
                component, global state is accessible and modifiable by many
                components, regardless of their nesting level.
              </li>
            </ul>
            <p className="mt-3">
              While local state management in react can be done easily using
              useState and useReducer hooks, global state management requires
              dedicated and specific tools which are know as libraries to ensure
              a consistency and correctness in state management of react
              applications which are more complex.
            </p>
            <Image
              src="/post_image.png"
              width={400}
              height={200}
              alt="post image"
              className="mt-5 object-cover rounded-lg"
            />
            <p className="py-5 bg-light rounded-lg dark:bg-dark px-5 border-l-4 mt-4 border-primary text-dark-gray dark:text-gray italic">
              Use the useState Hook to Manage Complex State Trees Efficiently.
            </p>

            {/* Comments section */}
            <div className="w-full mt-10 pt-5 border-t border-gray dark:border-dark">
              <h4 className="text-xl font-bold text-dark dark:text-light mb-6">
                Comments
              </h4>
              {
                comments.map((comment)=>(
                  <Comment avatar={comment.avatar} author={comment.author} date={comment.date} comment={comment.comment}/>
                ))
              }
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <h3 className="text-dark dark:text-light leading-tight">
                Most Popular
              </h3>
              {mostPopularPosts.map((post) => (
                <PostFeed
                  key={post.id}
                  title={post.title}
                  postUrl={post.postUrl}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                />
              ))}
            </div>
            <div className="mt-5">
              <h3 className="text-dark dark:text-light mt-5">Categories</h3>
              <div className="flex flex-row flex-wrap gap-1 mt-3">
                {categoryTags.map((categoryTag) => (
                  <CategoryTags
                    key={categoryTag.id}
                    label={categoryTag.label}
                    className={categoryTag.className}
                    slug={categoryTag.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
