import CommunitySection from "@/components/sections/landing/community-section";
import CreatorSection from "@/components/sections/landing/creator-section";
import Hero from "@/components/sections/landing/hero-section";
import { InvestmentModelsSection } from "@/components/sections/landing/invest-models-section";
import NewInvestorGuide from "@/components/sections/landing/investor-guide-section";
import ProjectJourney from "@/components/sections/landing/journey-section";
import { WhyInvestSection } from "@/components/sections/landing/participate-section";
import {ProjectsShowcase} from '@/components/sections/landing/projects-component';
import LatamWeb3Platform from "@/components/sections/landing/showcast-section";

const projects = [
  {
    image: "/project-1.jpg",
    category: "Educación Digital",
    title: "Taller Niño Sano",
    description: "Espacios para Niños en Zonas Urbano Marginales",
    currentAmount: 22800,
    targetAmount: 25000,
    investors: 18,
    minInvestment: 5,
    percentageComplete: 90,
    tags: ["ONG", "AMAZON SMILE", "SUBZERO"]
  },
  {
    image: "/project-2.jpg",
    category: "Protección Ambiental",
    title: "Reforestación del Amazonas",
    description: "Reforesta áreas afectadas por la deforestación en la selva amazónica.",
    currentAmount: 54000,
    targetAmount: 60000,
    investors: 35,
    minInvestment: 10,
    percentageComplete: 90,
    tags: ["MEDIO AMBIENTE", "ECOLÓGICO", "SOSTENIBLE"]
  },
  {
    image: "/project-3.jpg",
    category: "Bienestar Animal",
    title: "Refugio de Animales Abandonados",
    description: "Brinda cuidados y albergue a animales sin hogar en comunidades rurales.",
    currentAmount: 15500,
    targetAmount: 20000,
    investors: 22,
    minInvestment: 8,
    percentageComplete: 77,
    tags: ["ANIMALES", "CUIDADO", "COMUNIDAD"]
  },
  {
    image: "/project-4.jpg",
    category: "Cultura y Arte",
    title: "Rescate de Artesanía Indígena",
    description: "Promueve la preservación de técnicas artesanales indígenas en Costa Rica.",
    currentAmount: 34000,
    targetAmount: 50000,
    investors: 29,
    minInvestment: 15,
    percentageComplete: 68,
    tags: ["CULTURA", "ARTE INDÍGENA", "TRADICIONES"]
  },
];

export default function HomeDashboard() {
  return <>
  <Hero />
  <ProjectJourney />
  <ProjectsShowcase
      title="Explora Proyectos que Generan Impacto Social,Ambiental, Animal, Artístico y Cultural"
      subtitle="Participa en proyectos que promueven la igualdad, la preservación cultural, y el bienestar animal. Con Web3, no solo ayudas a financiar estas iniciativas, también obtienes recompensas en forma de NFTs y acceso a eventos exclusivos por tu colaboración"
      projects={projects}
    />
      <WhyInvestSection />
      <InvestmentModelsSection />
      <NewInvestorGuide />
      <LatamWeb3Platform />
      <CommunitySection />
      <CreatorSection />
      </>
}
