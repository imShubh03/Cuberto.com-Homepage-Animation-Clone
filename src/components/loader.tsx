"use client"

import { motion } from "framer-motion"

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                }}
            >
                <motion.div
                    className="text-4xl font-bold mb-4"
                    animate={{
                        scale: [1, 1.1, 1],
                        transition: {
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                            ease: "easeInOut",
                        },
                    }}
                >
                    CUBERTO
                </motion.div>
                <motion.div className="h-1 w-48 bg-black overflow-hidden">
                    <motion.div
                        className="h-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{
                            width: "100%",
                            transition: { duration: 1.8, ease: "easeInOut" },
                        }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

