"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-40 space-y-12">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        Support
      </h1>

      {/* FAQ Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="q1">
            <AccordionTrigger>How do I reset my password?</AccordionTrigger>
            <AccordionContent>
              Click "Forgot Password" on login and follow the instructions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How can I contact support?</AccordionTrigger>
            <AccordionContent>
              Use the Contact page to send us a message directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Ticket / Search */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Search / Submit Ticket
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input placeholder="Search help topics..." className="flex-1" />
          <Button variant="default">Search</Button>
        </div>
      </section>
    </div>
  );
}
