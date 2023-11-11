import React from "react";
import { twMerge } from "tailwind-merge";
import icons from "../assets/icons";
import { useNavigate } from "react-router-dom";
import route from "../routes/route";

export default function MobileLogo({ className }: { className?: string }) {
  const navigation = useNavigate();
  return (
    <div
      onClick={() => navigation(route.home)}
      className={twMerge("relative flex", className)}
    >
      <img
        src={icons.navbar.startsportLogo}
        alt="Startsport logo"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "9999px" }}
      />
    </div>
  );
}
