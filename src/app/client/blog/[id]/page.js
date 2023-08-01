"use client";

import { useEffect, useState } from "react";

const Blog = ({ params }) => {
  const { id } = params;
  const [blogData, setBlogData] = useState(null);
  const [showLoader, setLoaderFlag] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      const res = await fetch(`https://jsonplaceholder.org/posts/1`, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      });
      const blog = await res.json();
      setBlogData(blog);
      setLoaderFlag(false);
    };
    getBlogData();
  }, []);

  if (showLoader) {
    return (
      <div
        role="status"
        className="flex bg-white h-screen align-middle justify-center items-center"
      >
        <svg
          aria-hidden="true"
          class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="overflow-hidden bg-white  py-2">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto  lg:mx-0">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Title
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {blogData?.title}
              </p>
              <div className=" m-2 justify-center flex">
                <img src={blogData?.image} className="border-2" />
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Content
                </h2>
                {blogData?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
