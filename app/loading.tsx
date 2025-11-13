// app/loading.tsx
'use client'

import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-background to-muted">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="p-4 rounded-full border-4 border-primary border-t-transparent"
            >
                <Loader2 className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.p
                className="mt-6 text-muted-foreground text-sm tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
                Loading your experience...
            </motion.p>
        </div>
    )
}
