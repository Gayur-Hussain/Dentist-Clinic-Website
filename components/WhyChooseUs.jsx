"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "person_celebrate",
    title: "Expert Doctors",
    description:
      "Globally recognized specialists with decades of combined experience.",
  },
  {
    icon: "biotech",
    title: "Modern Equipment",
    description: "Equipped with the latest laser and 3D imaging technologies.",
  },
  {
    icon: "volunteer_activism",
    title: "Pain-Free Protocol",
    description: "Proprietary sedation techniques for a completely relaxed visit.",
  },
  {
    icon: "payments",
    title: "Transparent Pricing",
    description:
      "No hidden costs. Clear treatment plans and easy financing options.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section-gap bg-surface-container">
      <div className="max-w-container-max mx-auto px-margin-page">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Excellence Defined
            </span>
            <h2 className="font-h2 text-h2 text-on-background mt-4 leading-tight">
              Why Lumina Stands Apart
            </h2>
            <p className="mt-6 text-on-surface-variant font-body-lg text-body-lg">
              We've redefined the dental experience by prioritizing patient
              comfort and utilizing the world's most advanced clinical
              technologies.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  {feature.icon}
                </span>
                <h4 className="font-h3 text-h3 mb-2">{feature.title}</h4>
                <p className="text-on-surface-variant">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
