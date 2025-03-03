"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    }

    return (
        <footer id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-black text-white" ref={ref}>
            <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Let&apos;s create something amazing together</h2>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="px-8 py-6 bg-white text-black rounded-full text-lg font-medium hoverable h-auto">
                                Get in touch
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <p className="text-gray-400 mb-2">Email</p>
                            <Link href="mailto:hello@cuberto.com" className="text-xl hover:text-accent transition-colors duration-300 hoverable">
                                hello@cuberto.com
                            </Link>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-2">Phone</p>
                            <Link href="tel:+11234567890" className="text-xl hover:text-accent transition-colors duration-300 hoverable">
                                +1 (123) 456-7890
                            </Link>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-2">Follow us</p>
                            <div className="flex space-x-6">
                                {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social) => (
                                    <Link key={social} href="#" className="hover:text-accent transition-colors duration-300 hoverable">
                                        {social}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Cuberto. All rights reserved.</p>
                    <div className="flex space-x-8">
                        {["Privacy Policy", "Terms of Service"].map((item) => (
                            <Link key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hoverable">
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}
