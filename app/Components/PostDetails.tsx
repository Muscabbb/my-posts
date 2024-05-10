import PostsData from "./PostsData";

async function getPost(id: string) {
  await new Promise((resovle) => {
    setTimeout(() => {
      resovle(2);
    }, 2000);
  });

  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 240,
      },
    })
  ).json();
  return data;
}

async function PostDetails({ id }: { id: string }) {
  const { title, body } = await getPost(id);

  return (
    <>
      <PostsData title={title} desc={body} />
    </>
  );
}

export default PostDetails;
