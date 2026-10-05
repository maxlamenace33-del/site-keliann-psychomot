import { Sparkles, HeartHandshake, Compass } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      num: "01",
      icon: <Sparkles className="w-5 h-5 text-sage-600" />,
      title: "Valeur 1 (ex: Écoute & Bienveillance)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [Phrase explicative en attente]",
    },
    {
      num: "02",
      icon: <HeartHandshake className="w-5 h-5 text-sage-600" />,
      title: "Valeur 2 (ex: Approche Holistique)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. [Phrase explicative en attente]",
    },
    {
      num: "03",
      icon: <Compass className="w-5 h-5 text-sage-600" />,
      title: "Valeur 3 (ex: Co-construction & Réseau)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse. [Phrase explicative en attente]",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B28]">
            Mes 3 Valeurs Clés
          </h2>
          <p className="text-sm text-[#58625E]">
            Les principes éthiques et thérapeutiques qui guident ma pratique en cabinet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold text-xs">
                  {v.num}
                </span>
                <span className="p-2 rounded-xl bg-sage-50/50">{v.icon}</span>
              </div>
              <h3 className="font-semibold text-base text-[#232B28]">{v.title}</h3>
              <p className="text-xs sm:text-sm text-[#58625E] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Citation ou phrase d'accroche */}
        <div className="max-w-3xl mx-auto text-center pt-6 space-y-2">
          <blockquote className="italic text-base sm:text-lg text-[#232B28] font-light">
            « Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. »
          </blockquote>
          <p className="text-xs text-sage-700 font-medium">
            — [Citation inspirante ou phrase d&apos;accroche résumant la vision de Keliann L&apos;Azou]
          </p>
        </div>
      </div>
    </section>
  );
}
