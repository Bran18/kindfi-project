'use client'

import { FeatureItem } from "@/components/shared/feature-item";
import { SocialButton } from "@/components/shared/social-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Facebook, Globe, Mail } from "lucide-react";

const CreatorSection = () => {
  const features = [
    {
      title: "Interfaz Web3 Intuitiva",
      description:
        "Simplificamos la interacción con blockchain tanto para creadores como para impulsadores, brindando una experiencia fluida y accesible con wallets digitales y contratos inteligentes.",
    },
    {
      title: "Diversificación de Impacto",
      description:
        "Ofrecemos múltiples formas de colaboración a través de diferentes Web3 Wallets maximizando el impacto social y expandiendo las oportunidades de cambio.",
    },
    {
      title: "Transparencia Blockchain",
      description:
        "Cada proyecto es trazable en tiempo real, mostrando resultados de impacto directo en la blockchain, para que todos los involucrados confíen en que su apoyo llega al lugar correcto.",
    },
    {
      title: "Verificación Descentralizada con Fideicomiso Seguro",
      description:
        "A través de un fideicomiso seguro y validación descentralizada, aseguramos que los fondos de cada proyecto estén protegidos en todo momento.",
    },
  ];

  const socialButtons = [
    {
      icon: <Mail className="w-5 h-5" />,
      provider: "Correo",
      onClick: () => console.log("Email login"),
    },
    {
      icon: <Globe className="w-5 h-5" />,
      provider: "Google",
      onClick: () => console.log("Google login"),
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      provider: "Facebook",
      onClick: () => console.log("Facebook login"),
    },
    {
      icon: <Apple className="w-5 h-5" />,
      provider: "Apple",
      onClick: () => console.log("Apple login"),
    },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2">
        Creado por Developers en Web3, para Impulsar el Cambio Social
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Somos la primera plataforma blockchain enfocada en unir a causas sociales y colaboradores del mundo cripto, 
        diseñada para maximizar el impacto social en toda Latinoamérica y más allá. Con KindFi, 
        estás construyendo el futuro de la colaboración social.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div>
            {features.map((feature, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <FeatureItem key={index} {...feature} />
            ))}
          </div>

          {/* Image and CTA */}
          <div className="space-y-8">
            {/* Placeholder for founder image */}
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-md mx-auto">
              {/* <img
                src="/api/placeholder/400/300"
                alt="Platform founder"
                className="w-full h-auto rounded"
              /> */}
            </div>

            {/* CTA Section */}
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  ¿Listo para impulsar proyectos?
                </h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                Demuestra el poder de Web3. Sé la Revolución de impulsores de cambio social.
                </p>
                {socialButtons.map((button, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <SocialButton key={index} {...button} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
