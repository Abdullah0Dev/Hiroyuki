"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // When mounted on client, now we can show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button className=" flex rounded-full justify-center items-center h-10 w-10 duration-300 bg-[#5c626d] dark:bg-transparent dark:hover:bg-[#111936] hover:text-accent-foreground">
      <a href="https://t.me/dx0000" target="_blank" rel="noopener noreferrer">
        <FaLocationArrow className="   text-white-100 w-5 h-5 opacity-45  hover:opacity-90" />
      </a>
    </button>
  );
} 
