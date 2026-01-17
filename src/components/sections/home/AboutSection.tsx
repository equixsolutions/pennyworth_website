import { Button } from "@/components/ui/button";
import FeatureItem from "@/components/common/FeatureItem";
import ImageGrid from "@/components/common/ImageGrid";
import { features } from "@/constance/home";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section>
      <div className="mx-auto sm:px-0 px-5">
        <div className="sm:px-10 mb-8">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Who We Are
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:px-10 md:gap-12 mb-10">
          <p className="md:text-body-md text-body-xs text-primary/70 !leading-tight ">
            Pennywort is India's leading contract manufacturer of premium
            workwear and safety apparel. Based in Kerala, we specialize in
            flame-resistant clothing (FRC), inherently flame-resistant (IFR)
            garments, and custom uniforms for industries that demand
            uncompromising quality and safety.
          </p>
          <p className="md:text-body-md text-body-xs !leading-tight text-primary/70">
            With ISO 9001:2015 certification and over one decades of
            manufacturing expertise,{" "}
            <strong>
              we serve construction, oil & gas, healthcare, hospitality, and
              corporate sectors across the globe
            </strong>
            . Our commitment goes beyond clothing— we engineer confidence, one
            garment at a time.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="sm:px-10">
            <h3 className="md:text-body-lg-bold text-body-md-bold !leading-tight  mb-8">
              Why Leading Companies Choose Pennywort
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <Button
              variant="outline"
              className="md:text-body-md text-body-xs mt-10 border-primary rounded-sm px-6 py-5 group gap-0"
            >
              Learn Our Story
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
          <div className="h-[500px] md:h-[500px] lg:h-auto">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
