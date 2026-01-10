import FeatureCard from "@/components/common/FeatureCard";

export const careAndMaintenance = [
  {
    title: "Washing Instructions",
    points: [
      "Industrial launder at 60°C maximum",
      "Use mild, non-chlorine detergent",
      "Avoid fabric softeners (compromises FR properties)",
      "Tumble dry low or line dry",
      "Iron on medium setting if needed",
    ],
  },
  {
    title: "FR/IFR Garment Care",
    points: [
      "Inspect regularly for damage, contamination, or wear",
      "Retire garments showing holes, tears, or excessive wear",
      "Do not use bleach or oxidizing agents",
      "Avoid petroleum-based stain removers",
      "Store in clean, dry environments away from contaminants",
    ],
  },
  {
    title: "Expected Lifespan",
    points: [
      "Standard Coveralls: 50–100 washes",
      "FR Coveralls: 50–75 washes (with proper care)",
      "IFR Coveralls: 100–200 washes (flame resistance never degrades)",
    ],
  },
];

function CarAndMaintenanceSection() {
  return (
    <section className="relative bg-primary py-16 md:py-18 px-5 md:px-10">
      <div className=" mx-auto">
        <div className="mb-12">
          <h2 className="text-secondary text-lg md:text-xl font-medium mb-2">
            What Sets Pennywort Apart
          </h2>
          <hr className="border-secondary/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {careAndMaintenance.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarAndMaintenanceSection;
