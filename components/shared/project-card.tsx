import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";

export interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  investors: number;
  minInvestment: number;
  percentageComplete: number;
  tags: string[];
}

export const ProjectCard = ({
  image,
  category,
  title,
  description,
  currentAmount,
  targetAmount,
  investors,
  minInvestment,
  percentageComplete,
  tags,
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {/* Image Container - Fixed height */}
      <div className="relative w-full h-48 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover" 
        />
        <Badge 
          className="absolute left-4 top-4" 
          variant="secondary"
        >
          {category}
        </Badge>
      </div>

      {/* Content Container - Flex grows to fill space */}
      <div className="flex flex-col flex-1">
        <CardHeader className="flex-shrink-0">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>${currentAmount.toLocaleString()}</span>
                <span className="text-gray-600">
                  {percentageComplete}% of ${targetAmount.toLocaleString()}
                </span>
              </div>
              <Progress value={percentageComplete} />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold">${currentAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-600">Meta</p>
              </div>
              <div>
                <p className="font-semibold">{investors}</p>
                <p className="text-xs text-gray-600">Inversores</p>
              </div>
              <div>
                <p className="font-semibold">${minInvestment}</p>
                <p className="text-xs text-gray-600">Min. Inversión</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-shrink-0 flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Badge
              key={`tag-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
index}`}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};
