function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-secondary border border-primary p-8 md:p-10 shadow-[6px_6px_0px_rgba(0,0,0,0.15)]">
      <span className="absolute -top-4 left-6 bg-secondary px-4 py-2 text-sm font-medium border border-primary md:text-body-lg text-body-sm">
        {title}
      </span>
      {children}
    </div>
  );
}

export default InfoCard;
