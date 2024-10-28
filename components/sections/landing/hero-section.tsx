import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Sprout,
  Heart,
  NewspaperIcon,
  Coins,
  Syringe,
  UtensilsCrossed,
  Baby,
} from "lucide-react";

const Hero = () => {
  const categories = [
    { icon: <Rocket className="w-4 h-4" />, label: "Proyecto de alfabetización" },
    { icon: <Sprout className="w-4 h-4" />, label: "Proyecto Ambiental" },
    { icon: <Heart className="w-4 h-4" />, label: "Refugio Animales" },
    {
      icon: <NewspaperIcon className="w-4 h-4" />,
      label: "Noticiero Independiente",
    },
    { icon: <Coins className="w-4 h-4" />, label: "Educación" },
  ];

  const secondaryCategories = [
    { icon: <Syringe className="w-4 h-4" />, label: "Industria de Salud" },
    {
      icon: <UtensilsCrossed className="w-4 h-4" />,
      label: "Campaña Alimentación",
    },
    {
      icon: <Baby className="w-4 h-4" />,
      label: "Campaña de Bienestar Infantil",
    },
    { icon: <Sprout className="w-4 h-4" />, label: "Agricultores" },
  ];

  const stats = [
    { value: "250", label: "Conexiones Realizadas" },
    { value: "3,325", label: "Proyectos Respaldados" },
    { value: "$720M", label: "Generados para Causas Sociales", highlight: true },
  ];

  return (
    <section className="relative z-0 min-h-[80vh] bg-gradient-to-b from-purple-50 to-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
          KindFi impulsando el mundo
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Apoya Causas Sociales Usando Web3
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          Cada colaboración cuenta. Dona en cripto y obtén NFTs exclusivos, participa en eventos comunitarios, y gana recompensas por apoyar proyectos que cambian el mundo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
            Colabora con Crypto
            </Button>
            <Button size="lg" variant="outline">
              Explora Causas
            </Button>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category, index) => (
              <Badge
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                variant="secondary"
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {secondaryCategories.map((category, index) => (
              <Badge
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-gray-50"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="text-center">
                <div
                  className={`text-4xl font-bold mb-2 ${
                    stat.highlight ? "text-purple-600" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
