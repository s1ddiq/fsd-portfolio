"use client";
import { sidebarLinks, socialLinks } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true); // Show at the top
      } else {
        setIsVisible(false); // Hide when scrolling down
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-blue-1 relative h-screen transition-all  hidden md:flex flex-col border-r-[1px] border-blue-3 ${
          open ? "w-64" : ""
        }`}
      >
        <div className="p-4 flex justify-center flex-col">
          {/* Toggle button */}

          {/* Sidebar links */}
          <nav className="mt-4 space-y-4 w-full code">
            {sidebarLinks.map((link) => (
              <Link href={link.url} key={link.title}>
                <div
                  key={link.title}
                  className="cursor-pointer flex items-center gap-2 py-2 text-blue-2"
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={20}
                    height={20}
                  />
                  {open && <p>{link.title}</p>}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/*Seperator */}
        <div className="h-px w-full bg-blue-3 absolute top-64"></div>
        {/*TODO: hide text on desktop/larger screens */}
        <>
          <div className="p-4 code text-blue-2 mt-12">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <Image
                  src="/icons/expand.svg"
                  alt="contact"
                  width={12}
                  height={12}
                  className={cn("", open ? "block" : "hidden")}
                />
                <p>{open ? "socials" : ""}</p>
              </div>

              <div className={cn("flex gap-4", open ? "flex-row" : "flex-col")}>
                {socialLinks.map((social) => (
                  <div key={social.name}>
                    <Link href={social.url || "#"}>
                      <Image
                        src={social.icon}
                        width={24}
                        height={24}
                        alt="social"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>

        {/*Seperator aligned at the bottom. */}
        <div className="h-px w-full bg-blue-3 absolute bottom-24"></div>

        <div className="h-px w-full bg-blue-3 absolute bottom-12"></div>

        <Image
          src="/images/3d-cube.png"
          width={32}
          height={32}
          alt="cube"
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
        />
      </aside>

      {/* Sheet for mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className={`md:hidden fixed z-50 p-2  w-full bg-blue-1 border-b border-blue-2 ${
            isVisible
              ? "transform -translate-y-full"
              : "transform translate-y-0"
          } scrolling-hidden`}
        >
          <div className="sticky top-2 flex justify-end">
            <Menu size={48} className="text-white rounded-xl p-2" />
          </div>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-blue-1 border-r-[1px] border-blue-3"
        >
          <DialogTitle>{}</DialogTitle>
          <nav className="space-y-12 code text-2xl">
            {sidebarLinks.map((link) => (
              <div key={link.title} className=" text-blue-2">
                <Link
                  href={link.url}
                  className="flex gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={20}
                    height={20}
                  />
                  <p>{link.title}</p>
                </Link>
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
    </div>
  );
};

export default Sidebar;
