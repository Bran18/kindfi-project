import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export const StepCard = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: StepCardProps) => {
  return (
    <div
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center mb-12`}
    >
      {/* Image Card */}
      <div className="w-full md:w-1/2">
        <Card className="bg-blue-50 border-none">
          <CardContent className="p-8 flex justify-center items-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-48 h-48 object-contain"
            />
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="text-sm text-gray-500 mb-2">Paso {stepNumber}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};