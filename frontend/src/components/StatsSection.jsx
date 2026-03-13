import React, { useEffect, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const StatItem = ({ targetValue, label, suffix = "", decimals = 0 }) => {
  const count = useMotionValue(0);
  // This transforms the raw number into a formatted string (e.g., 12.1)
  const rounded = useTransform(count, (latest) => 
    latest.toFixed(decimals)
  );

  useEffect(() => {
    // Animate from 0 to target over 2 seconds
    const controls = animate(count, targetValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [targetValue, count]);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 border-gray-200 last:border-none md:border-r">
      <div className="text-5xl font-bold text-gray-900 flex items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-gray-400 font-medium uppercase tracking-wide text-sm">
        {label}
      </p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatItem targetValue={12.1} label="Purchased order" suffix="k+" decimals={1} />
        <StatItem targetValue={160} label="Happy customers" suffix="+" />
        <StatItem targetValue={4.9} label="Review rate" suffix="+" decimals={1} />
      </div>
    </section>
  );
}