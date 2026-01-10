function ParallaxSection() {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/images/design/parallax-bg.png"
          alt="Parallax background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary/20" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-secondary/20 text-2xl md:text-7xl font-light tracking-wide">
          Parallax effect
        </h2>
      </div>
    </section>
  );
}

export default ParallaxSection;
