type PostProps = {
  title: string;
  desc: string;
};

function PostsData({ title, desc }: PostProps) {
  return (
    <div className=" flex flex-col gap-3 text-white bg-slate-700 rounded-md p-3">
      <h1 className=" font-bold">{title}</h1>
      <p className=" leading-3 text-justify truncate w-11">{desc}</p>
    </div>
  );
}

export default PostsData;
