import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="space-y-1">
        <h4 className="text-body-bold-md">{title}</h4>
        <p className="text-muted-foreground text-m-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
