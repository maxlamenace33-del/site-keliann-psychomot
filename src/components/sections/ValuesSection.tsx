import { Sparkles, HeartHandshake, Compass } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      num: "01",
      icon: <Sparkles className="w-5 h-5 text-sage-600" />,
      title: "Individualité",
      desc: "Chaque personne est différente. Je tiens à proposer un accompagnement adapté à ses besoins, à ses capacités et à son fonctionnement.",
    },
    {
      num: "02",
      icon: <HeartHandshake className="w-5 h-5 text-sage-600" />,
      title: "Bienveillance",
      desc: "Je souhaite offrir un cadre rassurant, basé sur l'écoute et la confiance, dans lequel chacun peut se sentir à l'aise et avancer sereinement.",
    },
    {
      num: "03",
      icon: <Compass className="w-5 h-5 text-sage-600" />,
      title: "Respect du rythme",
      desc: "Chacun évolue à sa manière et à son rythme. L'important est de construire un accompagnement qui ait du sens pour la personne, sans brûler les étapes.",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B28]">
            Mes Valeurs Clés
          </h2>
          <p className="text-sm text-[#58625E]">
            Les principes éthiques et thérapeutiques qui guident ma pratique au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold text-xs">
                    {v.num}
                  </span>
                  <span className="p-2 rounded-xl bg-sage-50/50">{v.icon}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#232B28]">{v.title}</h3>
                <p className="text-sm text-[#58625E] leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="max-w-3xl mx-auto text-center pt-6 space-y-2">
          <blockquote className="italic text-lg sm:text-xl text-[#232B28] font-medium">
            « Accompagner, ce n&apos;est pas montrer le chemin, c&apos;est aider chacun à trouver le sien. »
          </blockquote>
          <p className="text-xs text-sage-700 font-medium">
            — Kéliann L&apos;Azou, Psychomotricien D.E.
          </p>
        </div>
      </div>
    </section>
  );
}
