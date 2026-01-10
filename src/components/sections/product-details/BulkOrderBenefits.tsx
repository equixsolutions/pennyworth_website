function BulkOrderBenefits() {
  const volumeDiscounts = {
    title: "Volume Discounts",
    items: [
      "500 pieces: Standard pricing",
      "501–1,000 pieces: 5% discount",
      "1,001–5,000 pieces: 10% discount",
      "5,000+ pieces: Custom negotiated pricing",
    ],
  };

  const valueAddedServices = {
    title: "Value-Added Services",
    items: [
      "Sample on time (production quality, not for personal use)",
      "Dedicated account manager for orders 1,000+ pieces",
      "On-site measurement services for large teams (India only)",
      "Inventory management solutions for repeat orders",
      "Flexible payment terms for established corporate clients",
    ],
  };

  const leadTimes = {
    title: "Lead Times",
    items: [
      {
        label: "Standard Production",
        value: "65 days from order confirmation and payment",
      },
      {
        label: "Rush Orders",
        value: "30-day delivery available (10% premium, subject to capacity)",
      },
      {
        label: "Repeat Orders",
        value: "30–35 days (for existing clients with approved designs)",
      },
    ],
  };

  return (
    <section className="bg-white px-5 md:px-10 py-10">
      <div>
        <div className="mb-10">
          <h3 className="text-m-sm mb-2  md:text-m-md font-light text-primary px-18">
            Bulk Order Benefits
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div>
            <h4 className="text-sm font-medium text-primary mb-4">
              {volumeDiscounts.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {volumeDiscounts.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-4">
              {valueAddedServices.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {valueAddedServices.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-primary mb-4">
            {leadTimes.title}
          </h4>

          <div className="space-y-3 text-sm text-muted-foreground">
            {leadTimes.items.map((item) => (
              <p key={item.label}>
                <span className="font-medium text-primary">{item.label}:</span>{" "}
                {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrderBenefits;
