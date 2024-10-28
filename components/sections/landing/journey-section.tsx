'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Step } from "@/components/shared/steps";

const ProjectJourney = () => {
  const [activeView, setActiveView] = React.useState<"project" | "investor">(
    "project"
  );

  const steps = [
    {
      number: 1,
      title: "Registro Proyecto",
      description: "Paso inicial para crear campaña de impacto social",
      active: true,
    },
    {
      number: 2,
      title: "Pre Lanzamiento",
      description: "Vista previa y validación del proyecto en blockchain",
      active: false,
    },
    {
      number: 3,
      title: "Registro Fideicomiso",
      description:
        "Proceso de registro y validación del proyecto para seguridad de impulsadores",
      active: false,
    },
    {
      number: 4,
      title: "Lanzamiento",
      description: "Despliegue de smart contracts y activación de la campaña",
      active: false,
    },
    {
      number: 5,
      title: "Recibir Fondos",
      description:
        "Transferencia de fondos mediante smart contracts al alcanzar la meta",
      active: false,
    },
  ];

  return (
    <section className="w-full bg-purple-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
          Proyectos con el Apoyo de la Comunidad Web3
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Desde la creación hasta el lanzamiento, sigue un proceso transparente y seguro respaldado por blockchain, donde cada etapa es verificada para garantizar el éxito de tu campaña social.
          </p>

          {/* Toggle Buttons */}
          <div className="mt-8 mb-16 flex justify-center">
            <div className="inline-flex rounded-full p-1 bg-white shadow-sm">
              <Button
                variant={activeView === "project" ? "default" : "ghost"}
                className="rounded-full px-4 sm:px-8"
                onClick={() => setActiveView("project")}
              >
                Ruta Proyecto
              </Button>
              <Button
                variant={activeView === "investor" ? "default" : "ghost"}
                className="rounded-full px-4 sm:px-8"
                onClick={() => setActiveView("investor")}
              >
                Ruta Impulsador
              </Button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {steps.map((step, index) => (
            <Step
              key={`step-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;
