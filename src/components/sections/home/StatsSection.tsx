import { values } from "@/constance/home";

function StatsSection() {
  return (
    <div className="flex items-center justify-center md:my-24 my-10">
      <div className="w-full">
        <div className="mb-4 md:px-10 px-5">
          <h2 className="md:text-body-lg text-body-sm text-primary px-18">
            Experience. Trust. Global Reach.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t-2 border-muted-foreground/50">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="
                flex flex-col
                items-start justify-start
                py-6 md:px-10 px-6
                border-r-2 border-b-2 border-muted-foreground/50
                lg:last:border-r-0
                [&:nth-child(2n)]:border-r-2
                lg:[&:nth-child(2n)]:border-r-2
                text-left"
            >
              <h3 className="heading-xs md:heading-lg font-light text-primary mb-2">
                {value.heading}
              </h3>
              <p className="md:text-body-md text-body-sm text-primary/70">
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
