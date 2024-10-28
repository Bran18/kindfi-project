'use client'

import { BenefitItem } from "@/components/shared/benefits-items";
import { CTAForm } from "@/components/shared/cta-form";
import { Testimonial } from "@/components/shared/testimonial-card";
import { Rocket, Shield, TrendingUp, Users } from "lucide-react";

const CommunitySection = () => {
    const benefits = [
      {
        icon: <Users className="w-5 h-5" />,
        text: "Comunidad Web3 de Impacto Social"
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Atracción de Colaboradores Crypto"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        text: "Verificación en Blockchain"
      },
      {
        icon: <Rocket className="w-5 h-5" />,
        text: "Potenciando el exparcimiento de Web3"
      }
    ];
  
    const testimonialData = {
      quote: "Los comunidad Web3, se convierte en embajador de tu causa social, llevando tu impacto más allá de lo que los métodos tradicionales de Web2 pueden ofrecer. Web3 conecta y potencia a las personas en todo el mundo. Con la tecnología blockchain, creamos una red transparente, global y segura de apoyo y verificación, superando los límites de las plataformas tradicionales.",
      author: "KindFi",
      role: "Impacto Social Descentralizado",
      imageUrl: "/placeholder-image.jpg" // Replace with actual image
    };
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
            Más que Simplemente una DeFi. Únete a una Comunidad Web3 de Impacto
            </h2>
            <p className="text-gray-600">
            En KindFi, no solo es apoyar causas, cada proyecto crea una comunidad sólida que impulsa su éxito. 
            Conectas con embajadores y formas parte de una red imparable de colaboradores comprometidos con lograr un impacto social verdadero.


            </p>
          </div>
  
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Benefits List */}
            <div className="container space-y-2">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index} 
                  {...benefit} 
                  isActive={index === 0}
                />
              ))}
            </div>
  
            {/* Testimonial */}
            <Testimonial {...testimonialData} />
          </div>
  
          {/* CTA Form */}
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          <CTAForm onSubmit={(data: any) => console.log(data)} />
        </div>
      </section>
    );
  };
  
  export default CommunitySection;
  