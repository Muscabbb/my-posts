import PostDetails from "@/app/Components/PostDetails";
import PostsData from "@/app/Components/PostsData";
import Link from "next/link";
import React, { Suspense } from "react";

import Loading from "./loading";

async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const loadingJsx = <Loading />;
  return (
    <>
      <Link href={"./"}>Go Back To Posts</Link>
      <Suspense fallback={loadingJsx}>
        <PostDetails id={params.id} />
      </Suspense>
    </>
  );
}

export default page;
