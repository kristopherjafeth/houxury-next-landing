"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  collapsible?: boolean;
}>({ activeItem: null, setActiveItem: () => {} });

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}

const Accordion = ({ children, collapsible, className }: AccordionProps) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem, collapsible }}>
      <div className={cn("divide-y divide-border", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <div className={cn("border-b border-border/50", className)} data-value={value}>
      {children}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { activeItem, setActiveItem, collapsible } = React.useContext(AccordionContext);
  // Find the closest item to get the value
  const [value, setValue] = React.useState<string>("");
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const parent = ref.current?.closest("[data-value]");
    if (parent) {
      setValue(parent.getAttribute("data-value") || "");
    }
  }, []);

  const isOpen = activeItem === value;

  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary",
        className
      )}
      onClick={() => {
        if (isOpen && collapsible) {
          setActiveItem(null);
        } else {
          setActiveItem(value);
        }
      }}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

const AccordionContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { activeItem } = React.useContext(AccordionContext);
  const [value, setValue] = React.useState<string>("");
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const parent = ref.current?.closest("[data-value]");
    if (parent) {
      setValue(parent.getAttribute("data-value") || "");
    }
  }, []);

  const isOpen = activeItem === value;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 pb-4" : "max-h-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
