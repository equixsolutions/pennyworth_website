"use client";

import { AccordionItem } from "@/types/products";
import { useState } from "react";

function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b border-muted-foreground">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-body-md-bold text-primary">
                {item.title}
              </span>
              <span className="text-lg">{isOpen ? "↑" : "↓"}</span>
            </button>

            {isOpen && (
              <p className="pb-4 md:text-body-md text-body-xs text-primary/80 leading-relaxed">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
