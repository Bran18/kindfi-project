import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ShieldCheck } from "lucide-react";
import { PlatformFeatureCard } from "@/components/shared/feauture-card";

const LatamWeb3Platform = () => {
  const features = [
    {
      title: "Transparencia Garantizada por Web3",
      description: "Cada colaboración es visible en la blockchain, con acceso a reportes en tiempo real para que siempre sepas cómo y dónde están siendo utilizados los fondos",
      content: (
        <div className="text-left p-4 bg-white rounded-lg mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="w-5 h-5 text-blue-600" />
            <span className="block">
              <span className="font-semibold">$720K+ USD</span>{" "}
              <span className="text-green-600">en colaboraciones</span> verificadas
              en la blockchain
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Verificación Comunitaria y Descentralizada",
      description:
        "Los proyectos son revisados y auditados. Con el poder de la descentralización, garantizamos la mayor confiabilidad y transparencia.",
      content: (
        <div className="relative h-32 w-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Transparencia y Seguridad</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Impacto Social Medible",
      description: "Seguimiento transparente del impacto de cada proyecto",
      checkList: [
        "Métricas de impacto en tiempo real",
        "DEFI para impacto social",
        "Gobernanza transparente",
        "Respaldo en blockchain",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
          La Plataforma Web3 que Está Transformando el Impacto Social en Latinoamérica
          </h2>
          <p className="text-gray-600">
          Conecta tu wallet y participa en proyectos sociales verificados. Utilizamos la tecnología blockchain para asegurar transparencia total y trazabilidad, 
          garantizando que cada colaboración impacte el futuro de nuestra sociedad
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <PlatformFeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom Info */}
        <Card className="bg-blue-50/50 max-w-4xl mx-auto">
          <CardContent className="p-6 text-center text-gray-600">
          En KindFi, cada proyecto es una oportunidad de crear un impacto social medible utilizando la tecnología Web3. 
          Los contratos inteligentes garantizan que cada objetivo se cumpla, mientras que la trazabilidad en blockchain asegura que cada colaboración sea transparente y verificable. 
          Juntos, estamos construyendo el puente entre el mundo crypto y el impacto social real en Latinoamérica.
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Proyectos Verificados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">0%</div>
            <div className="text-sm text-gray-600">Comisión Inicial</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Seguimiento Blockchain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatamWeb3Platform;
