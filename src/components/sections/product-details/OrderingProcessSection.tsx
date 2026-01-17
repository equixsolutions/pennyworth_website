import {
  leadTimes,
  steps,
  volumeDiscounts,
} from "@/constance/products/corporateTshirts";

function OrderingProcessSection() {
  return (
    <section className="text-secondary px-5 md:px-10 py-10">
      <div>
        <div className="mb-10">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Ordering Process
          </h2>
          <hr className="border-muted-foreground/40" />
        </div>
        <div className="relative top-20 md:mb-56 mb-40">
          <div
            className="
            absolute left-1/2 top-0 bottom-0 w-px bg-muted-foreground/40
            md:left-[7%] md:right-0 md:top-1/2 md:bottom-auto md:h-px md:w-[86%]"
          />
          <div className="grid grid-cols-1 md:grid-cols-7 gap-y-16 md:gap-y-0">
            {steps.map((step, index) => {
              const isTop = index % 2 === 0;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center md:block"
                >
                  <div className="">
                    <span className="-10 w-10 h-10 rounded-full bg-primary text-secondary text-xs flex items-center justify-center mx-auto">
                      {step.id}
                    </span>
                    <div
                      className={`
            absolute  -translate-y-1/2 w-[160px] text-xs
              ${
                isLeft
                  ? "right-[60%] text-right"
                  : "left-[75%] bottom-[30%] text-left"
              }
              md:static md:mt-0 md:text-center md:w-[180px]
              md:absolute md:left-1/2 md:-translate-x-1/2
              ${
                isTop
                  ? "md:-translate-y-20 top-1/2"
                  : "md:translate-y-20 md:bottom-[0%] relative"
              }
            `}
                    >
                      <p className="md:text-body-md text-body-xs text-primary/80 leading-snug">{step.title}</p>
                      {step.subtitle && (
                        <p className="text-[10px] text-muted-foreground">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative top-[50%] grid grid-cols-1 md:grid-cols-2 bg-primary text-secondary">
          <div className="p-8 border-b md:border-b-0 md:border-r border-muted/20">
            <h4 className="md:text-body-md-bold text-body-xs-bold mb-4">Volume Discounts</h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-secondary/80 list-disc list-inside">
              {volumeDiscounts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-8">
            <h4 className="md:text-body-md-bold text-body-xs-bold mb-4">Lead Times</h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-secondary/80 list-disc list-inside">
              {leadTimes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderingProcessSection;
