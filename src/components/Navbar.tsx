import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { X } from "lucide-react";

const navItems = ["Home", "Work", "Experience", "Contact"];
const hrefs = ["#home", "#projects", "#experience", "#contact"];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top bar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:p-8"
            >
                {/* Logo */}
                <a href="#home" className="text-sm font-bold tracking-wider">
                    ●
                </a>

                {/* Nav items - desktop */}
                <div className="hidden lg:flex items-center gap-12">
                    {navItems.map((item, i) => (
                        <a
                            key={item}
                            href={hrefs[i]}
                            className="text-xs uppercase tracking-[0.2em] text-[#71717a] hover:text-white line-animated transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Menu button - mobile */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden text-xs uppercase tracking-widest text-white"
                >
                    Menu
                </button>
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col p-8"
                    >
                        {/* Close button */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 flex items-center justify-center"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Nav links */}
                        <div className="flex-1 flex flex-col justify-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={hrefs[i]}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-4xl font-bold text-white hover:text-[#a855f7] transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom */}
                        <div className="text-sm text-[#71717a]">
                            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white">
                                {portfolioData.personal.email}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Side dots - desktop only */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
            >
                {[1, 2, 3, 4].map((num) => (
                    <a
                        key={num}
                        href={hrefs[num - 1]}
                        className="w-2 h-2 rounded-full bg-white/20 hover:bg-[#a855f7] transition-colors"
                    />
                ))}
            </motion.div>
        </>
    );
}
