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
    const ordered = items.map((item, i) => items[(activeCard + i) % items.length])


    return (
        <div id="destacados" className="w-full py-10 scroll-mt-17 bg-cream">

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
                    transition={{ duration: 1, ease: easeInOut, delay: 0.25 }} />

            </div>

            <div className="flex items-center justify-between">

                <div className="overflow-hidden">
                    <div className="flex items-center justify-between overflow-hidden gap-4">

                        <button onClick={() => setActiveCard((activeCard - 1 + 6) % 6)} className="ml-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><ArrowCircleLeftIcon size={50} color="espresso" /></button>

                        {ordered.slice(0, 3).map((item, i) => (
                            <motion.div className={`w-100 h-100 py-4 ${i === 0 ? "" : "hidden md:block"}`} key={item.id}
                                layout
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    layout: { duration: 0.75, ease: easeInOut },
                                    default: { duration: 0.5, delay: 0.25, ease: easeInOut }
                                }}>
                                <img src={item.image} alt={item.name} draggable={false} className="w-full object-cover h-full rounded-2xl pointer-events-none border-4 border-gold" />
                            </motion.div>
                        ))}

                        <button onClick={() => setActiveCard((activeCard + 1) % 6)} className="mr-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><ArrowCircleRightIcon size={50} color="espresso" /></button>

                    </div>
                </div>

            </div>

        </div>
    )
}