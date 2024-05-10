import next from "next";
import PostsData from "../Components/PostsData";
import Link from "next/link";

type postObj = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function Posts() {
  const postsData = await (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 120,
      },
    })
  ).json();

  const allPosts = postsData.map((post: postObj) => (
    <Link key={post.id} href={`Posts/${post.id}`}>
      <PostsData key={post.id} title={post.title} desc={post.body} />
    </Link>
  ));

  return (
    <div
      className="container mx-auto flex flex-col gap-3 cursor-pointer"
      title="click to see more detail"
    >
      {allPosts}
    </div>
  );
}

export default Posts;
