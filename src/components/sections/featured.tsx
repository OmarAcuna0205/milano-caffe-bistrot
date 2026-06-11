"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { dictionaries } from "@/locales/dictionaries"
import { featuredItems } from "@/data/featured"
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function Featured() {

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
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }} />

            </div>

            <div className="flex items-center justify-between">

                <div className="overflow-hidden">
                    <div key={language} className="flex items-center justify-between overflow-hidden gap-2 md:gap-4">

                        <button onClick={() => setActiveCard((activeCard - 1 + items.length) % items.length)} className="ml-2 md:ml-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><CaretLeftIcon size={50} color="espresso" /></button>

                        {ordered.slice(0, 3).map((item, i) => (
                            <motion.div className={`flex flex-col w-100 py-4 ${i === 0 ? "" : "hidden md:flex"}`} key={item.id}
                                layout
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    layout: { duration: 0.75, ease: "easeInOut" },
                                    default: { duration: 0.5, delay: 0.25, ease: "easeInOut" }
                                }}>
                                <img src={item.image} alt={item.name} draggable={false} className="w-full h-80 object-cover rounded-2xl pointer-events-none border-4 border-gold" />
                                <motion.h2 key={item.id} className="text-espresso text-center text-3xl mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.75, ease: "easeInOut" }}>
                                    {item.name}
                                </motion.h2>
                            </motion.div>
                        ))}

                        <button onClick={() => setActiveCard((activeCard + 1) % items.length)} className="mr-2 md:mr-4 hover:-translate-y-0.5 duration-200 cursor-pointer"><CaretRightIcon size={50} color="espresso" /></button>

                    </div>
                </div>

            </div>

        </div>
    )
}