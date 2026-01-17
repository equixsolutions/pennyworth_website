import { blogCategories } from "@/constance/blogs";

function StatsSection() {
  return (
    <div className="bg-secondary flex items-center justify-center my-10">
      <div className="w-full">
        <div className="mb-4 md:px-10 px-5">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Blog Categories.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-muted-foreground">
          {blogCategories.map((value) => (
            <div
              key={value.id}
              className="
                flex flex-col
                items-start justify-start
                py-6 md:px-10 px-6
                border-r border-b md:border-b-0 border-muted-foreground
                lg:last:border-r-0
                [&:nth-child(2n)]:border-r-1
                lg:[&:nth-child(2n)]:border-r-1
                text-left w-full"
            >
              <h3 className="md:text-body-md-bold text-body-sm-bold text-primary mb-2">
                {value.heading}
              </h3>
              <p className="text-muted-foreground md:text-body-md text-body-xs">
                {value.subHeading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
