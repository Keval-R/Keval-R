import Link from "next/link";

export async function getData() {
  const res = await fetch("https://jsonplaceholder.org/posts", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();
  return data;
}

const Server = async () => {
  const posts = await getData();

  if (!posts) {
    return (
      <div className="flex justify-center align-middle items-center h-screen text-black bg-white">
        <h2>No data found</h2>
      </div>
    );
  }
  return (
    <div className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Server side API call
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt="img"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={`/server/blog/${post?.id}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    <time dateTime={post.publishedAt} className="text-gray-500">
                      {post.publishedAt}
                    </time>
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/server/blog/${post?.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.content}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.thumbnail}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={`/server/blog/${post?.id}`}>
                        <span className="absolute inset-0" />
                        {post.slug}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.category}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Server;
