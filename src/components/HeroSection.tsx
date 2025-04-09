'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl" 
      className={clsx(
        'relative min-h-[80vh] flex items-center justify-center overflow-hidden',
        'bg-gradient-to-br from-primary/90 to-primary/70',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant-background.jpg" 
          alt="מסעדה גמא - תמונת רקע"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJNgPNBBb9DAAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto">
          {/* Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Restaurant Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="w-32 h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <h2 className="text-primary text-2xl font-bold">מסעדה גמא</h2>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
            >
              מסעדה מוביל בישראל
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 text-center mb-8"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            {/* CTA Button - Neumorphic Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="relative px-8 py-4 rounded-xl text-lg font-bold text-primary bg-white/90 transition-all duration-300"
                style={{
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;