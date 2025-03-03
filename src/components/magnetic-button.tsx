"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = buttonRef.current!.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        const moveX = (clientX - centerX) * 0.2
        const moveY = (clientY - centerY) * 0.2
        setPosition({ x: moveX, y: moveY })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.button
            ref={buttonRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.button>
    )
}

