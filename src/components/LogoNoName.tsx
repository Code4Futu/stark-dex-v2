import React from "react";
import { twMerge } from "tailwind-merge";
import icons from "../assets/icons";
import { useNavigate } from "react-router-dom";
import route from "../routes/route";

export default function LogoNoName({ className }: { className?: string }) {
  const navigation = useNavigate();
  return (
    <div
      onClick={() => navigation(route.home)}
      className={twMerge("relative flex", className)}
    >
      <img
        src={icons.v2.logo_noname}
        alt="Startsport logo"
        style={{ maxWidth: "48px", height: "auto" }}
      />
    </div>
  );
}
