"use client";

import Link from "next/link";
import { footerConfig } from "@/config/footer";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  const { brand, navigationLinks, legalLinks, contactLinks, socialLinks } = footerConfig;

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-lg mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-1">
          {brand.logo ? (
            <Link href="/" className="inline-block">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          ) : (
            <h2 className="font-bold text-xl md:text-2xl text-gray-800 dark:text-gray-100">
              <Link href="/">{brand.name}</Link>
            </h2>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2 list-none p-0 m-0">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-violet-500 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Legal
          </h3>
          <div className="flex flex-col space-y-2 list-none p-0 m-0">
            {legalLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-violet-500 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Contact
          </h3>
          <div className="flex flex-col space-y-2 list-none p-0 m-0">
            {contactLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-violet-500 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-3">
            {socialLinks?.x && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer">
                      <SiX size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">X (Twitter)</TooltipContent>
              </Tooltip>
            )}
            {socialLinks?.linkedin && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">LinkedIn</TooltipContent>
              </Tooltip>
            )}
            {socialLinks?.github && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">GitHub</TooltipContent>
              </Tooltip>
            )}
            {socialLinks?.facebook && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebookF size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Facebook</TooltipContent>
              </Tooltip>
            )}
            {socialLinks?.youtube && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">YouTube</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <Link href="/" className="hover:text-violet-500 transition-colors">
          {brand.name}
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
