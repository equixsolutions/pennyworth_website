import Image from "next/image";
import { Button } from "../ui/button";
import ArrowRight from "@/assets/svg/Arrow_right.svg";

function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 mt-4 justify-between">
        <div>
          <h3 className="text-sm font-medium text-primary mb-2 leading-snug">
            {blog.title}
          </h3>

          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            {blog.description}
          </p>
        </div>

        <Button
          variant="heroPrimary"
          size="lg"
          className="group w-[150px] text-m-sm  p-2 text-primary border border-primary md:px-6 md:py-3"
        >
          Read More
          <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

export default BlogCard;
