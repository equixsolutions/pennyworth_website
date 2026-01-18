import BlogCard from "@/components/common/BlogCard";

function RecentBlogs() {
  const blogs = [
    {
      id: 1,
      image: "/assets/images/design/blog_1.png",
      title: "Why Flame-Resistant Clothing Saves Lives on Worksites",
      description:
        "Understand the importance of FR and IFR uniforms in protecting workers across oil, gas, and construction industries.",
    },
    {
      id: 2,
      image: "/assets/images/design/blog_2.png",
      title: "The Future of Workwear: Top 5 Trends for 2025",
      description:
        "From eco-friendly fabrics to smart uniforms, explore what’s next in industrial and corporate uniforms.",
    },
    {
      id: 3,
      image: "/assets/images/design/blog_34.png",
      title: "How Custom Uniforms Build Brand Identity",
      description:
        "Discover why more companies are investing in uniforms as a branding strategy.",
    },
    {
      id: 4,
      image: "/assets/images/design/blog_1.png",
      title:
        "Sustainability in Workwear: Beyond Fashion, Towards Responsibility",
      description:
        "A look at Pennywort’s eco-conscious manufacturing practices and the global move towards sustainable clothing.",
    },
    {
      id: 5,
      image: "/assets/images/design/blog_2.png",
      title:
        "Case Study: How Pennywort Helped a Healthcare Facility Standardize Uniforms Across 500+ Staff",
      description:
        "Real-world story on delivering comfort, hygiene, and brand identity through scrubs.",
    },
  ];
  return (
    <section className="bg-primary/10 py-10 px-5 md:px-10">
      <h2 className="md:heading-md-semibold heading-xs text-primary mb-2">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-16">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default RecentBlogs;
