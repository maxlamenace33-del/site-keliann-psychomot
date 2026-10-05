import React from "react";
import { Camera, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspectRatio: "4/5" | "16/10" | "4/3" | "16/9" | "1/1";
  label: string;
  subLabel?: string;
  badge?: string;
  icon?: LucideIcon;
  className?: string;
  overlayContent?: React.ReactNode;
}

const ratioClasses = {
  "4/5": "aspect-[4/5]",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function ImagePlaceholder({
  aspectRatio,
  label,
  subLabel,
  badge = "Emplacement Photo V1",
  icon: Icon = Camera,
  className,
  overlayContent,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} - ${subLabel || "Image en attente des photographies finales"}`}
      className={cn(
        "relative w-full rounded-2xl border border-[#E8E4DC] bg-gradient-to-br from-sage-50/80 via-[#FDFBF7] to-teal-soft/20 flex flex-col justify-between p-6 overflow-hidden shadow-sm transition-all duration-200 group hover:border-sage-400",
        ratioClasses[aspectRatio],
        className
      )}
    >
      {/* Motif décoratif de fond doux */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
        <Icon className="w-36 h-36 text-sage-800 stroke-[1]" />
      </div>

      {/* En-tête : Badge */}
      <div className="relative z-10 flex justify-between items-start">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-sage-800 bg-white/90 backdrop-blur-sm border border-[#E8E4DC] px-2.5 py-1 rounded-full shadow-2xs">
          {badge}
        </span>
      </div>

      {/* Centre : Icône et Libellés */}
      <div className="relative z-10 text-center space-y-2 py-4">
        <div className="inline-flex p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E4DC] text-sage-700 shadow-2xs group-hover:bg-sage-600 group-hover:text-white transition-colors duration-200">
          <Icon className="w-6 h-6" />
        </div>
        <p className="font-semibold text-sm sm:text-base text-[#232B28] px-2">
          {label}
        </p>
        {subLabel && (
          <p className="text-xs text-[#58625E] max-w-xs mx-auto px-2">
            {subLabel}
          </p>
        )}
      </div>

      {/* Pied : Contenu incrusté optionnel (ex. carte praticien) */}
      {overlayContent ? (
        <div className="relative z-10">{overlayContent}</div>
      ) : (
        <div className="relative z-10 flex justify-center">
          <span className="text-[10px] text-[#58625E]/70 font-mono">
            Ratio {aspectRatio}
          </span>
        </div>
      )}
    </div>
  );
}
