"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import MagneticButton from "./magnetic-button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        closed: { opacity: 0, x: -50 },
        open: { opacity: 1, x: 0 },
    }

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold hoverable">
                        cuberto
                    </Link>
                    <MagneticButton className="z-50" onClick={() => setIsOpen(!isOpen)}>
                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                            <div className="w-8 h-6 flex flex-col justify-between">
                                <motion.span
                                    className="w-full h-0.5 bg-white"
                                    animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white"
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white"
                                    animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                    </MagneticButton>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white z-40 flex items-center"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                                <div className="space-y-8">
                                    {["Services", "Projects", "About", "Contact"].map((item) => (
                                        <motion.div key={item} variants={itemVariants}>
                                            <Link
                                                href={`#${item.toLowerCase()}`}
                                                className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors duration-300 hoverable block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div variants={itemVariants} className="space-y-8 text-gray-600">
                                    <div>
                                        <h3 className="text-lg font-medium mb-4">Contact</h3>
                                        <p className="text-3xl font-bold hover:text-black transition-colors duration-300">
                                            hello@cuberto.com
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                                        <div className="space-y-2">
                                            {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social) => (
                                                <Link
                                                    key={social}
                                                    href="#"
                                                    className="block text-xl hover:text-black transition-colors duration-300"
                                                >
                                                    {social}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

