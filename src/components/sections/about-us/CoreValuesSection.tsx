import PennyWort from "@/assets/svg/penny_wort.svg";

export default function CoreValuesSection() {
  return (
    <section className="relative bg-primary text-secondary py-16 md:py-28 px-5 md:px-10 overflow-hidden">
      <div className="absolute left-[0px] top-1/2 -translate-y-1/2  pointer-events-none z-0">
        <PennyWort className="w-[420px] h-auto" />
      </div>

      <div className="mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
          <div className="flex items-center">
            <h2 className="md:md:heading-xs heading-caption text-secondary mb-2">
              Our Core Values
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <Value
                title="Integrity"
                desc="We do what’s right, even when no one is watching"
              />
              <Value
                title="Excellence"
                desc="Good enough is never good enough"
              />
              <Value
                title="Innovation"
                desc="Continuous improvement in products and processes"
              />
            </div>

            <hr className="border-white/30 my-8 md:block hidden" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <Value title="Safety" desc="Protection is our primary purpose" />
              <Value title="Partnership" desc="Your success is our success" />
              <Value
                title="Sustainability"
                desc="Responsibility to planet and people"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="md:text-body-md-bold text-body-sm-bold uppercase mb-2">{title}</h3>
      <p className="text-sm text-secondary/70 leading-relaxed md:text-body-md text-body-sm max-w-xs">{desc}</p>
    </div>
  );
}
