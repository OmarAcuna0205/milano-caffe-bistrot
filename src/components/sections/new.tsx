"use client"

import { useState } from "react"
import { easeInOut, motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { dictionaries } from "@/locales/dictionaries"
import { featuredItems } from "@/data/featured"
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@phosphor-icons/react";

export default function New() {

    const { language } = useLanguage()
    const t = dictionaries[language].featured
    const items = featuredItems[language]
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div id="novedades" className="w-full min-h-screen py-10 scroll-mt-17">

            <div className="text-center mb-5">

                <motion.h2 className="font-display text-5xl md:text-8xl text-cream leading-none"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}>
                    {t.title}
                </motion.h2>

                <motion.div className="h-px w-60 bg-gold mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: easeInOut, delay: 0.25 }} />

            </div>

            <div className="flex items-center justify-between">

                <button className="px-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><ArrowCircleLeftIcon size={40} color="gold" /></button>

                <div className="overflow-hidden">
                    <div className="flex items-center justify-between overflow-hidden">
                        {items.map(item => (
                            <motion.div className="w-100 h-100 py-5 px-5" key={item.id}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}>
                                <img src={item.image} alt={item.name} className="w-full object-cover h-full rounded-2xl" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <button className="px-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><ArrowCircleRightIcon size={40} color="gold" /></button>

            </div>

        </div>
    )
}