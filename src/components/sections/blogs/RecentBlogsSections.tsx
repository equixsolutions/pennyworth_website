"use client";

import BlogCard from "@/components/common/BlogCard";
import { client } from "@/sanity/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/queries";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BlogSkeleton } from "@/components/layout/BlogSkeleton";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await client.fetch(RECENT_BLOGS_QUERY);
    setBlogs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (loading || cardRefs.current.length === 0) return;

    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, [loading]);

  return (
    <section className="bg-primary/10 py-10 px-5 md:px-10">
      <h2 className="md:heading-md-semibold heading-xs text-primary mb-2">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-16">
        {(loading ? Array.from({ length: 3 }) : blogs).map((blog, i) => (
          <div
            key={loading ? i : blog._id}
            ref={(el: any) => (cardRefs.current[i] = el)}
          >
            {loading ? <BlogSkeleton /> : <BlogCard blog={blog} />}
          </div>
        ))}
      </div>
    </section>
  );
}
