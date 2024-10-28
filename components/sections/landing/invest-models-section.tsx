'use client'

import { InvestmentModelCard } from "@/components/shared/investment-model-card";
import { SectionCaption } from "@/components/shared/section-caption";
import { Shield, Users, Wallet } from 'lucide-react';

export const InvestmentModelsSection = () => {
  const models = [
    {
      title: "Fideicomiso Seguro",
      description: "Los fondos se mantienen en un fideicomiso verificado hasta alcanzar la meta del proyecto, garantizando la seguridad de tu colaboración",
      variant: "a" as const,
      icon: <Shield className="w-6 h-6 mb-4 text-emerald-600" />,
      benefits: [
        "Smart contracts auditados",
        "Custodia segura de fondos",
        "Transparencia blockchain"
      ]
    },
    {
      title: "Impacto Social",
      description: "Una vez que el proyecto alcanza su meta, los fondos se liberan directamente a la causa social, todo respaldado por contratos inteligentes",
      variant: "b" as const,
      icon: <Users className="w-6 h-6 mb-4 text-blue-600" />,
      benefits: [
        "Reportes de impacto",
        "Seguimiento en tiempo real",
        "Comunidad comprometida"
      ]
    },
    {
      title: "Impulsado por Web3",
      description: "Conecta tu wallet y participa de forma segura, transparente y eficiente. Cada transacción está registrada en blockchain",
      variant: "c" as const,
      icon: <Wallet className="w-6 h-6 mb-4 text-purple-600" />,
      benefits: [
        "Transacciones instantáneas",
        "Registro inmutable",
        "Certificados NFT"
      ]
    }
  ];

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionCaption
          title="Seguro, Transparente y Potenciado en Web3"
          subtitle="En KindFi, garantizamos que cada donación o colaboración esté respaldada por la seguridad y transparencia del Fideicomiso en sistema Web3, 
          con contratos inteligentes que aseguran que los fondos lleguen a su destino para generar impacto real"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <InvestmentModelCard
              key={`model-${model.variant}`}
              {...model}
              onLearnMore={() => console.log(`Learn more about model ${model.variant}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
