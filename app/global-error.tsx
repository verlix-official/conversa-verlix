'use client'

import './globals.css'
import { Button } from '@/components/ui/button'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en">
            <body className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-center px-6">
                <h1 className="text-5xl font-bold mb-4 text-red-600">Something went wrong</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {error.message || 'An unexpected error occurred.'}
                </p>
                <Button
                    onClick={() => reset()}
                    className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                    Try Again
                </Button>
            </body>
        </html>
    )
}
