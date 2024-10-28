import React from 'react';
import { StepCard } from '@/components/shared/steps-card';


interface NewInvestorGuideProps {
  className?: string;
}

const NewInvestorGuide = ({ className = '' }: NewInvestorGuideProps) => {
  const steps = [
    {
      stepNumber: 1,
      title: "Explora los proyectos activos",
      description: "Aprovecha la gran variedad de proyectos por categoría y revisa aquellos que cuentan con campañas activas. Cada proyecto es único y te brinda toda la información necesaria para participar.",
      imageSrc: "/images/explore-projects.svg", // Replace with your actual image path
      imageAlt: "Explore active projects illustration"
    },
    {
      stepNumber: 2,
      title: "Explora los detalles del proyecto",
      description: "Examina los detalles del proyecto que te interese. Accede a datos clave, como el número de colaboradores, el objetivo del proyecto, y su progreso. Toda la información está disponible para que tomes una decisión informada.",
      imageSrc: "/images/project-details.svg", // Replace with your actual image path
      imageAlt: "Review project details illustration"
    },
    {
      stepNumber: 3,
      title: "Colabora en lo que te apasione",
      description: "Sigue tu intuición y conocimiento para elegir los proyectos que más te inspiren. Establece una cantidad para colaborar o donar de acuerdo a tus preferencias y presupuesto disponible",
      imageSrc: "/images/invest-donate.svg", // Replace with your actual image path
      imageAlt: "Invest or donate illustration"
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">¿Nuevo en KindFi? ¡Empieza a Colaborar en Proyectos Verificados!</h2>
        <p className="text-gray-600">
        En 3 simples pasos podrás comenzar a colaborar y apoyar proyectos sociales de manera segura y transparente
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <StepCard
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            {...step}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default NewInvestorGuide;