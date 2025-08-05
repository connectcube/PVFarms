import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Empowering Rural Communities Through Sustainable Farming",
  subtitle = "Our beetroot outgrower program provides economic opportunities to rural farmers while offering sustainable alternatives to charcoal production.",
  ctaText = "Join Our Program",
  onCtaClick = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative h-[700px] w-full bg-background">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-2xl font-bold text-white">PV</span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
          {subtitle}
        </p>

        {/* CTA Button */}
        <Button
          onClick={onCtaClick}
          size="lg"
          className="bg-primary text-lg font-semibold hover:bg-primary/90"
        >
          {ctaText}
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
