export async function getBlogData(id) {
  const res = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();
  return data;
}

const Blog = async ({ params }) => {
  const { id } = params;
  const blog = await getBlogData(id);
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
                {blog.title}
              </p>
              <div className=" m-2 justify-center flex">
                <img src={blog?.image} className="border-2"/>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Content
                </h2>
                {blog.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
