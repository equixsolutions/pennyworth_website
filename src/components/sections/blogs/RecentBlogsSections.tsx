import BlogCard from "@/components/common/BlogCard";
import { client } from "@/sanity/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/queries";

export default async function RecentBlogs() {
  const blogs = await client.fetch(RECENT_BLOGS_QUERY);

  if (!blogs?.length) return null;

  return (
    <section className="bg-primary/10 py-10 px-5 md:px-10">
      <h2 className="md:heading-md-semibold heading-xs text-primary mb-2">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-16">
        {blogs.map((blog: any) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}


