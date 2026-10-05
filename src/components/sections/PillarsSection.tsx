import { Activity, PenTool, Heart, Smile } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      icon: <Activity className="w-5 h-5 text-sage-600" />,
      title: "Motricité globale & fine",
      description: "Coordination, tonus, équilibre et précision gestuelle.",
    },
    {
      icon: <PenTool className="w-5 h-5 text-sage-600" />,
      title: "Graphisme & Apprentissages",
      description: "Aisance de l'écriture, posture et repérage spatial.",
    },
    {
      icon: <Heart className="w-5 h-5 text-sage-600" />,
      title: "Régulation émotionnelle",
      description: "Apaisement des tensions, gestion du stress et de l'anxiété.",
    },
    {
      icon: <Smile className="w-5 h-5 text-sage-600" />,
      title: "Confiance en soi",
      description: "Affirmation corporelle, autonomie et plaisir du mouvement.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-[#E8E4DC] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center space-y-3"
          >
            <div className="p-3 rounded-full bg-sage-50">{pillar.icon}</div>
            <h2 className="text-base font-semibold text-[#232B28]">{pillar.title}</h2>
            <p className="text-xs sm:text-sm text-[#58625E] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
