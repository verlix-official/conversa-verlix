// Import global styles and fonts
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center min-h-screen">
                <div className="text-center px-6 py-12 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 max-w-md w-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <span className="text-yellow-500 text-6xl">⚠️</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl font-bold mb-3 text-gray-800 dark:text-white">
                        404
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-300">
                        Page Not Found
                    </h2>

                    {/* Message */}
                    <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        Oops! The page you’re looking for doesn’t exist or may have been moved.
                    </p>

                    {/* Button */}
                    <a
                        href="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                    >
                        Go Back Home
                    </a>
                </div>
            </body>
        </html>
    )
}
