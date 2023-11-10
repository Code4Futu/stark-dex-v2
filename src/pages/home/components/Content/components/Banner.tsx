import { twMerge } from "tailwind-merge";
import icons from "../../../../../assets/icons";

export function OfficalBanner({ className }: { className?: string }) {
  return (
    <div className="flex justify-center">
      <img
        src={icons.homepage.bannerHomepageMobile}
        alt="banner"
        className={twMerge("h-auto max-w-[412px]", className)}
      />
    </div>
  );
}

export function AboutUsBanner({ className }: { className?: string }) {
  return (
    <img
      src={icons.homepage.aboutHomepageBanner}
      alt="banner"
      className={twMerge("h-auto", className)}
    />
  );
}

export function EcosystemBanner({ className }: { className?: string }) {
  return (
    <img
      src={icons.ECOSYSTEM_MOBILE}
      alt="banner"
      className={twMerge("h-auto", className)}
    />
  );
}

export function EcosystemBannerMd({ className }: { className?: string }) {
  return (
    <img
      src={icons.ECOSYSTEM_MD}
      alt="banner"
      className={twMerge("h-auto", className)}
    />
  );
}

export function EcosystemBannerDesktop({ className }: { className?: string }) {
  return (
    <img
      src={icons.ECOSYSTEM_DESKTOP}
      alt="banner"
      className={twMerge("h-auto", className)}
    />
  );
}
