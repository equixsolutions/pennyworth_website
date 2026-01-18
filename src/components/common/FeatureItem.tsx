import { LucideIcon } from "lucide-react";
import Points from "./Points";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <Points />
      </div>
      <div className="space-y-1 flex flex-col gap-2">
        <h2 className="md:text-body-md-bold text-body-xs-bold ">{title}</h2>
        <p className="md:text-body-md text-body-xs text-primary/70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
