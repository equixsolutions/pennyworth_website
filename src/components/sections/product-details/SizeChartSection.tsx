const rows = [
  { size: "XS", chest: "34–36", length: 26, shoulder: 16 },
  { size: "S", chest: "36–38", length: 27, shoulder: 17 },
  { size: "M", chest: "38–40", length: 28, shoulder: 18 },
  { size: "L", chest: "40–42", length: 29, shoulder: 19 },
  { size: "XL", chest: "42–44", length: 30, shoulder: 20 },
  { size: "2XL", chest: "44–46", length: 31, shoulder: 21 },
  { size: "3XL", chest: "46–48", length: 32, shoulder: 22 },
  { size: "4XL", chest: "48–50", length: 33, shoulder: 23 },
  { size: "5XL", chest: "50–52", length: 34, shoulder: 24 },
];

const columns = [
  { key: "size", label: "Size" },
  { key: "chest", label: "Chest (inches)" },
  { key: "length", label: "Length (inches)" },
  { key: "shoulder", label: "Shoulder (inches)" },
];

function SizeChartSection() {
  return (
    <section className="bg-secondary px-5 md:px-10 py-10">
      <div>
        <div className="mb-6">
          <h3 className="md:text-body-md text-body-xs text-primary/80  mb-3">Size Chart</h3>
        </div>

        <div className="overflow-x-auto border border-primary/20">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-primary/20 bg-primary/5">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="md:text-body-md-bold text-body-xs-bold px-4 py-3 border-r last:border-r-0 border-muted-foreground/40"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-primary/5" : "bg-primary/10"}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-3 border-r last:border-r-0 border-muted-foreground/40 md:text-body-md text-body-xs"
                    >
                      {row[col.key as keyof typeof row]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Custom Sizing Available: For bulk orders, we can adjust dimensions to
          fit your team perfectly.
        </p>
      </div>
    </section>
  );
}

export default SizeChartSection;
