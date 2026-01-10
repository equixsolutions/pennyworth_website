import Image from "next/image";

function TestingQualitySection() {
  const testAndQuality = [
    "Vertical flame spread test (ISO 15025)",
    "Heat transmission indexing",
    "Tensile strength testing",
    "Tear resistance evaluation",
    "Colorfastness to washing (ISO 105)",
    "Dimensional stability after laundering",
    "Seam strength analysis",
    "Anti-static property verification (where applicable)",
  ];
  return (
    <section className="md:pl-10 pt-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="px-5">
          <h3 className="text-base font-medium text-primary mb-6">
            Testing & Quality Assurance
          </h3>

          <p className="text-sm text-muted-foreground mb-8">
            Every Pennywort coverall undergoes rigorous testing:
          </p>

          <ul className="space-y-4 mb-8">
            {testAndQuality.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-primary">✔</span>
                <span className="text-sm text-primary">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
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
