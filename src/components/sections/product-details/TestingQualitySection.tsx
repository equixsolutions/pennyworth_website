import { testAndQuality } from "@/constance/products";
import Image from "next/image";

function TestingQualitySection() {
  return (
    <section className="md:pl-10 py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="px-5">
          <h3 className="md:text-body-md-bold text-body-xs-bold text-primary mb-6">
            Testing & Quality Assurance
          </h3>

          <p className="md:text-body-md text-body-xs text-primary/80 mb-8">
            Every Pennywort coverall undergoes rigorous testing:
          </p>

          <ul className="space-y-4 mb-8">
            {testAndQuality.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-primary">✔</span>
                <span className="md:text-body-md text-body-xs text-primary/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="md:text-body-md text-body-xs text-primary/80">
            Test Reports: Available upon request for compliance documentation
          </p>
        </div>

        <div className="relative w-full h-[420px] md:h-[520px]">
          <Image
            src="/assets/images/design/T&Q.png"
            alt="Quality Testing"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default TestingQualitySection;
