"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // When mounted on client, now we can show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a href="https://t.me/dx0000" target="_blank" rel="noopener noreferrer">
    <Image alt="telegram" src="https://static.vecteezy.com/system/resources/previews/023/986/562/non_2x/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png"
     className="   text-white-100 w-8 h-8 opacity-45 duration-300 hover:opacity-90" />
  </a>

  );
}
/**
 *     <button
      className=" flex rounded-full justify-center items-center h-10 w-10 bg-[#5c626d] dark:bg-transparent dark:hover:bg-[#111936] hover:text-accent-foreground"
      // onClick={() =>
      //   theme === "dark" ? setTheme("light") : setTheme("dark")
      // }
    > 
      {/* {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem]  text-white-100  w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}   
    //   <a href="https://t.me/dx0000" target="_blank" rel="noopener noreferrer">
    //     <img src="https://static.vecteezy.com/system/resources/previews/023/986/562/non_2x/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png"
    //      className="h-[1.2rem]  text-white-100  w-[1.2rem] rotate-0 scale-100 transition-all" />
    //   </a>
    // </button>
 */
