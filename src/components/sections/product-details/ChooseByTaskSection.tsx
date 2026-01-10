import Image from "next/image";

function ChooseByTaskSection() {
  const tableData = [
    { task: "Light assembly", glove: "Cotton knit or PU-coated" },
    { task: "Heavy lifting", glove: "Leather palm reinforced" },
    { task: "Sharp objects", glove: "Cut-resistant (Level 4–5)" },
    { task: "Welding", glove: "Heat-resistant leather, long cuff" },
    { task: "Chemical handling", glove: "Nitrile or neoprene" },
    { task: "High heat", glove: "Aramid or aluminized" },
    { task: "Precision work", glove: "Thin PU or nitrile coated" },
    { task: "General construction", glove: "Split leather" },
    { task: "Oil/grease work", glove: "Nitrile-coated" },
  ];

  const images = [
    {
      src: "/assets/images/design/choose_by_1.png",
      alt: "Measuring work with gloves",
      span: "col-span-1",
    },
    {
      src: "/assets/images/design/choose_by_3.png",
      alt: "Cutting work gloves",
      span: "col-span-1",
    },
    {
      src: "/assets/images/design/choose_by_3.png",
      alt: "Industrial glove usage",
      span: "col-span-2",
    },
  ];

  return (
    <section className="bg-black px-5 md:px-10 py-10 text-secondary">
      <div>
        <div className="mb-10">
          <h3 className="text-m-sm  md:text-m-md font-light text-secondary px-18 mb-2">
            Choose by Task
          </h3>
          <hr className="border-secondary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border border-secondary/30 md:col-span-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-secondary/30 bg-secondary/10">
                  <th className="text-left font-medium px-6 py-4">Task</th>
                  <th className="text-left font-medium px-6 py-4">
                    Recommended Glove
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="bg-secondary/10">
                    <td className="px-6 py-3 text-secondary/80">{row.task}</td>
                    <td className="px-6 py-3 text-secondary/80">{row.glove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {images.map((img, i) => (
              <div key={i} className={`relative md:aspect-auto aspect-[4/3]  overflow-hidden ${img.span}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseByTaskSection;
