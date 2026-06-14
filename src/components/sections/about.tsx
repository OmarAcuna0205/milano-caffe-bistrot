"use client"

import { dictionaries } from "@/locales/dictionaries"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "motion/react"

export default function About() {

    const { language } = useLanguage()
    const t = dictionaries[language].about

    return (
        <div id="sobre-nosotros" className="w-full py-10 scroll-mt-17 bg-cream">

            <div className="text-center mb-5">

                <motion.h2 className="font-display text-5xl md:text-8xl text-espresso leading-none"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}>
                    {t.title}
                </motion.h2>

                <motion.div className="h-px w-40 bg-gold mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }} />

            </div>

            <div className="flex flex-col md:flex-row items-center px-10 gap-8">

                <img src="/images/about.png" className="w-100 h-100" />

                <div className="w-full text-espresso text-2xl md:text-4xl leading-loose tracking-wider">

                    <p>
                        {t.description.map((segment, i) => (
                            <span className={`${segment.highlight ? "text-gold font-display text-5xl" : "font-light"}`} key={i}>{segment.text}</span>
                        ))}
                    </p>
                </div>


            </div>

        </div>

    )
} 