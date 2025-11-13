"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-40">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </TooltipTrigger>
            <TooltipContent>
              Please enter your full name
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </TooltipTrigger>
            <TooltipContent>
              We will respond to this email
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />
        </div>

        <Button type="submit" variant="default">
          Send Message
        </Button>
      </form>
    </div>
  );
}
