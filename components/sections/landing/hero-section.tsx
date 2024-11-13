"use client";

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
import { motion } from "framer-motion";

const Hero = () => {
  const categories = [
    {
      icon: <Rocket className="w-4 h-4" />,
      label: "Proyecto de alfabetización",
    },
    { icon: <Sprout className="w-4 h-4" />, label: "Proyecto Ambiental" },
    { icon: <Heart className="w-4 h-4" />, label: "Refugio Animales" },
    {
      icon: <NewspaperIcon className="w-4 h-4" />,
      label: "Noticiero Independiente",
    },
    { icon: <Coins className="w-4 h-4" />, label: "Educación" },
  ];

  const secondaryCategories = [
    { icon: <Syringe className="w-4 h-4" />, label: "Salud Infantil" },
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
    {
      value: "$720M",
      label: "Generados para Causas Sociales",
      highlight: true,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      color: "white",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const secondaryBadgeVariants = {
    ...badgeVariants,
    hover: {
      scale: 1.05,
      color: "white",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative z-0 min-h-[80vh] bg-gradient-to-b from-purple-50 to-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl font-medium text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            KindFi impulsando el mundo
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apoya Causas Sociales Usando Web3
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cada colaboración cuenta. Dona en cripto y obtén NFTs exclusivos...
          </motion.p>
          {/* CTA Buttons */}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Colabora con Crypto
            </Button>
            <Button size="lg" variant="outline">
              Explora Causas
            </Button>
          </motion.div>

          {/* Primary Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {categories.map((category, index) => (
              <motion.div
                key={`primary-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                variants={badgeVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 cursor-pointer relative z-10 transition-colors duration-200"
                >
                  <motion.span
                    className="mr-2"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  {category.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {secondaryCategories.map((category, index) => (
              <motion.div
                key={`secondary-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                variants={secondaryBadgeVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer relative z-10 transition-colors duration-200"
                >
                  <motion.span
                    className="mr-2"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  {category.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          {/* Stats */}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div
                  className={`text-4xl font-bold mb-2 ${stat.highlight ? "text-purple-600" : "text-gray-900"}`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
