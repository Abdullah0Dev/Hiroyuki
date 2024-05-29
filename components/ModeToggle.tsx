"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
    <button
      className=" flex rounded-full justify-center items-center h-10 w-10 bg-[#5c626d] dark:bg-transparent dark:hover:bg-[#111936] hover:text-accent-foreground"
       onClick={() =>
         theme === "dark" ? setTheme("light") : setTheme("dark")
       }
    > 
       {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem]  text-white-100  w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}   
      </button>
  );
}

