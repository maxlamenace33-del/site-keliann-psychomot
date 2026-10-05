import { AlertCircle, Info, Sparkles } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface AlertBannerProps {
  banner: SiteSettings["alertBanner"];
}

export function AlertBanner({ banner }: AlertBannerProps) {
  if (!banner.enabled || !banner.message) {
    return null;
  }

  const icons = {
    info: <Info className="w-4 h-4 shrink-0 text-sage-700" />,
    warning: <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />,
    holiday: <Sparkles className="w-4 h-4 shrink-0 text-sage-700" />,
  };

  const variantStyles = {
    info: "bg-sage-100 text-sage-900 border-sage-200",
    warning: "bg-amber-50 text-amber-950 border-amber-200",
    holiday: "bg-sage-50 text-sage-800 border-sage-200",
  };

  return (
    <aside
      aria-label="Information importante du cabinet"
      className={`border-b text-xs sm:text-sm py-2 px-4 transition-all ${variantStyles[banner.variant] || variantStyles.info}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center font-medium">
        {icons[banner.variant] || icons.info}
        <span>{banner.message}</span>
      </div>
    </aside>
  );
}
