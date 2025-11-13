// components/ui/layout.tsx
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

/**
 * Stack - vertical spacing container
 * Usage: <Stack className="custom-class">...</Stack>
 */
export function Stack({ children, className, ...props }: LayoutProps) {
    return (
        <div className={cn("flex flex-col gap-4", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * VStack - vertical stack (same as Stack but explicit name)
 */
export function VStack({ children, className, ...props }: LayoutProps) {
    return (
        <div className={cn("flex flex-col gap-4", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * HStack - horizontal stack
 */
export function HStack({ children, className, ...props }: LayoutProps) {
    return (
        <div className={cn("flex flex-row items-center gap-4", className)} {...props}>
            {children}
        </div>
    );
}

/**
 * Center - centers children horizontally and vertically
 */
export function Center({ children, className, ...props }: LayoutProps) {
    return (
        <div
            className={cn("flex items-center justify-center", className)}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * ScrollArea - optional smooth scroll container
 */
export function ScrollArea({ children, className, ...props }: LayoutProps) {
    return (
        <div
            className={cn(
                "overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
