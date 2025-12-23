function StatsSection() {
  const values = [
    { id: 0, heading: "ISO 9001", subHeading: "2015 Certified" },
    { id: 1, heading: "10+ Years", subHeading: "Experience" },
    { id: 2, heading: "100+", subHeading: "Corporate Clients" },
    { id: 3, heading: "Worldwide", subHeading: "Shipping" },
    { id: 4, heading: "500", subHeading: "Pieces Min. Order" },
  ];

  return (
    <div className="bg-white flex items-center justify-center my-24">
      <div className="w-full">
        <div className="mb-4">
          <h2 className="text-lg font-light text-gray-700 px-18">
            Experience. Trust. Global Reach.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t border-gray-300">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="
            flex flex-col items-center justify-center
            py-10 px-6 text-center

            border-b border-gray-300
            border-r border-gray-300

            lg:border-b-0
            lg:last:border-r-0

            [&:nth-child(2n)]:border-r-0
            lg:[&:nth-child(2n)]:border-r
          "
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                {value.heading}
              </h3>
              <p className="text-sm text-gray-600 font-light">
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
