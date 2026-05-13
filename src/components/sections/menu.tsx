"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/locales/dictionaries";
import { menuCategories as menuES, formatPrice } from "@/data/menu";
import { menuCategories as menuEN } from "@/data/menu-en";
import { menuGroupsES, menuGroupsEN } from "@/data/menuGroups";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
    const { language } = useLanguage();
    const t = dictionaries[language].menu;

    const allCategories = language === "ES" ? menuES : menuEN;
    const groups = language === "ES" ? menuGroupsES : menuGroupsEN;

    const [activeGroupId, setActiveGroupId] = useState(groups[0].id);
    const [activeCategoryName, setActiveCategoryName] = useState(
        groups[0].categoryNames[0]
    );

    useEffect(() => {
        setActiveGroupId(groups[0].id);
        setActiveCategoryName(groups[0].categoryNames[0]);
    }, [language]);

    const activeGroup = groups.find((g) => g.id === activeGroupId) ?? groups[0];

    const subCategories = activeGroup.categoryNames
        .map((name) => allCategories.find((c) => c.name === name))
        .filter(Boolean);

    const currentCategory =
        allCategories.find((c) => c.name === activeCategoryName) ??
        subCategories[0]!;

    const handleGroupChange = (groupId: string) => {
        const group = groups.find((g) => g.id === groupId)!;
        setActiveGroupId(groupId);
        setActiveCategoryName(group.categoryNames[0]);
    };

    return (
        <section id="menu" className="w-full min-h-screen bg-cream py-24 scroll-mt-17">

            <div className="text-center mb-12 px-6">

                <h2 className="font-display text-6xl md:text-8xl text-espresso leading-none mb-3">
                    {t.title}
                </h2>

                <p className="uppercase text-wood text-xl md:text-2xl mb-6">
                    {t.subtitle}
                </p>

                <div className="h-px w-60 bg-gold mx-auto" />

            </div>

            <div className="flex justify-center gap-2 px-2 md:px-4 mb-8 flex-wrap">

                {groups.map((group) => (
                    <button key={group.id} onClick={() => handleGroupChange(group.id)} className={`px-4 md:px-6 py-2 text-sm uppercase transition-all duration-300 border 
                        ${activeGroupId === group.id ? "bg-espresso text-cream border-espresso" : "bg-transparent text-espresso border-espresso"}`}>
                        {group.label}
                    </button>
                ))}

            </div>

            <AnimatePresence mode="wait">
                <motion.div key={activeGroupId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}>

                    <div className="overflow-x-auto mb-4">

                        <div className="flex py-4 px-6 md:px-12 min-w-max md:min-w-0 md:justify-center">
                            {subCategories.map((cat) => {
                                if (!cat) return null;
                                return (

                                    <button key={cat.name} onClick={() => setActiveCategoryName(cat.name)} className={`relative px-4 py-2 text-sm uppercase transition-colors duration-300
                                        ${activeCategoryName === cat.name
                                            ? "text-espresso"
                                            : "text-espresso/75 hover:text-espresso"}`}>
                                        {cat.name}

                                        {activeCategoryName === cat.name && (

                                            <motion.span layoutId="sub-tab-indicator" className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                    </div>

                    <div className="h-px bg-wood/20 mx-6 md:mx-12 mb-10" />

                    <AnimatePresence mode="wait">

                        <motion.div key={currentCategory?.name} className="px-4 md:px-12 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}>

                            {currentCategory?.description && (
                                <p className="text-center text-wood/60 italic text-sm mb-8 max-w-xl mx-auto">
                                    {currentCategory.description}
                                </p>
                            )}
                            {currentCategory?.note && (
                                <p className="text-center text-gold uppercase tracking-widest text-xs mb-10">
                                    {currentCategory.note}
                                </p>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

                                {currentCategory?.items.map((item, i) => (
                                    <motion.div key={item.name} className="flex flex-col"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25, delay: i * 0.04 }}>

                                        <div className="flex justify-between items-baseline gap-3">

                                            <h4 className="uppercase text-espresso tracking-wider text-sm font-semibold shrink-0">
                                                {item.name}
                                            </h4>

                                            <div className="grow border-b border-dotted border-espresso/15 relative -top-1" />

                                            <div className="text-gold text-sm whitespace-nowrap shrink-0 font-semibold">
                                                {item.priceBottle ? (
                                                    <span>
                                                        {item.price != null && `${formatPrice(item.price)} / `}
                                                        ${item.priceBottle}
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {item.price !== undefined ? formatPrice(item.price) : ""}
                                                    </span>
                                                )}
                                            </div>

                                        </div>

                                        {item.description && (
                                            <p className="text-wood text-xs mt-1.5 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}

                                        {item.available && (
                                            <span className="text-wood/40 text-xs italic mt-1">
                                                {item.available}
                                            </span>
                                        )}

                                        {item.extras && item.extras.length > 0 && (

                                            <div className="mt-2 space-y-0.5">
                                                {item.extras.map((extra) => (

                                                    <div key={extra.label} className="flex justify-between text-xs text-gold/60">
                                                        <span>+ {extra.label}</span>
                                                        <span>+${extra.price}</span>
                                                    </div>

                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>

                    </AnimatePresence>

                </motion.div>

            </AnimatePresence>

        </section>
    );
}