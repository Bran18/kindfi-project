import { ArrowUpRight, RefreshCw, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCaption } from "@/components/shared/section-caption";
import { FeatureCard } from "@/components/shared/feature-card";

export const WhyInvestSection = () => {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <ArrowUpRight className="w-8 h-8 text-green-600" />
        </div>
      ),
      title: "Colabora y Recibe Recompensas",
      description:
        "Cada colaboración te acerca a un cambio real y a recompensas únicas, como NFTs de edición limitada, acceso a eventos exclusivos, y más. Colaborar nunca ha sido tan gratificante.",
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-blue-600" />
        </div>
      ),
      title: "Construye un Mundo Mejor",
      description:
        "Apoya una variedad de iniciativas sociales que cubren desde el bienestar animal hasta la preservación cultural. Diversifica tus contribuciones y sé un impulsor del cambio global.",
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
          <Megaphone className="w-8 h-8 text-purple-600" />
        </div>
      ),
      title: "Sé la Revolución",
      description:
        "Levanta la bandera y demuestra que Web3 es mejor que los métodos tradicionales. Impulsando causas por medio de la tecnología descentralizada para un cambio verdadero.",
    },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto">
        <SectionCaption
          title="Únete a la Revolución Kindfi. Web3 Colaborando y Transformando el Mundo"
          subtitle="La Comunidad Web3 tiene el poder de devolver. Apoya causas que importan, colabora con proyectos sociales, y sé parte de una revolución que utiliza la tecnología Web3 para mejorar el mundo. Juntos, podemos crear un impacto positivo y duradero"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
          En KindFi, eres parte del movimiento que está demostrando que Web3 es el futuro del impacto social. 
          Desde salvar el planeta hasta empoderar comunidades, cada participación marca la diferencia. 
          Es tiempo de usar el poder descentralizado para crear un cambio real, lejos de las limitaciones de los sistemas tradicionales.
          </p>
          <Button variant="default" className="bg-blue-900">
            Descubre cómo colaborar en KindFi
          </Button>
        </div>
      </div>
    </section>
  );
};
