import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative bg-[#592922] py-20 text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Готовим вместе — просто и вкусно
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto"
        >
          Делитесь рецептами, находите идеи, вдохновляйтесь
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/list"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition"
          >
            Посмотреть рецепты
          </Link>
          <Link
            to="/form"
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg border border-white/40 transition backdrop-blur-sm"
          >
            Добавить рецепт
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#4b1f19] py-2">
        <div className="flex whitespace-nowrap animate-marquee text-white text-lg font-semibold">
          <span className="mx-4">
            новые рецепты каждую неделю!
          </span>
          <span className="mx-4">
            делитесь своими кулинарными шедеврами!
          </span>
          <span className="mx-4">
            простые блюда для всей семьи!
          </span>
          <span className="mx-4">
            найди вдохновение для следующего ужина!
          </span>

          
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
