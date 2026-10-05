import { Compass, CheckCircle2 } from "lucide-react";

export function PsychomotSection() {
  const motifs = [
    {
      domain: "Motricité & Coordination",
      title: "Difficultés motrices & maladresse (ex: TDC / Dyspraxie)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Graphisme & Apprentissages",
      title: "Écriture et graphisme (ex: Dysgraphie, lenteur, douleur)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Attention & Impulsivité",
      title: "Attention, agitation motrice (ex: TDA/H, canalisation)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Émotions & Corps",
      title: "Anxiété corporelle, gestion du stress et inhibition",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Repérage & Organisation",
      title: "Organisation spatio-temporelle et repères",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Tonus & Posture",
      title: "Troubles du tonus, crispations et tics moteurs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Petite Enfance",
      title: "Retard dans les acquisitions psychomotrices du jeune enfant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
    {
      domain: "Adultes & Aînés",
      title: "Troubles de l'équilibre et autonomie corporelle",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [1 ou 2 phrases explicatives en attente de Keliann]",
    },
  ];

  return (
    <section id="psychomotricite" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
          <Compass className="w-3.5 h-3.5" />
          <span>La Psychomotricité</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
          Qu&apos;est-ce que la Psychomotricité ?
        </h2>
        <p className="text-base text-[#58625E] leading-relaxed">
          La psychomotricité est une profession paramédicale réglementée qui s&apos;intéresse aux liens
          entre le corps, les émotions et les fonctions cognitives. Elle s&apos;exerce exclusivement sur prescription médicale.
        </p>
      </div>

      {/* Sous-bloc : Pour qui ? */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#232B28] text-center">
          Pour qui ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-600 bg-sage-50 px-2.5 py-1 rounded-md inline-block">
              Enfants
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Bébés & Enfants</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Retard moteur, troubles des apprentissages (DYS), difficultés graphiques ou attentionnelles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-dark bg-teal-soft/60 px-2.5 py-1 rounded-md inline-block">
              Adolescents
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adolescents & Jeunes Adultes</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mal-être corporel, anxiété, perte de repères, organisation et confiance en soi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#58625E] bg-[#EFECE6] px-2.5 py-1 rounded-md inline-block">
              Adultes & Seniors
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adultes & Seniors</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gestion du stress, rééducation neurologique, équilibre et maintien de l&apos;autonomie.
            </p>
          </div>
        </div>
      </div>

      {/* Sous-bloc : 8 Motifs de consultation */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-[#232B28]">
            Dans quelles situations consulter ? (8 Motifs de consultation)
          </h3>
          <p className="text-sm text-[#58625E]">
            Situations fréquentes justifiant la réalisation d&apos;un bilan psychomoteur en cabinet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motifs.map((motif, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E8E4DC] hover:border-sage-400 hover:shadow-2xs transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-sage-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-dark shrink-0" />
                    <span>Motif {i + 1}</span>
                  </span>
                  <span className="text-[10px] text-[#58625E]/70 font-medium">
                    {motif.domain}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-[#232B28] leading-snug">
                  {motif.title}
                </h4>
                <p className="text-xs text-[#58625E] leading-relaxed">
                  {motif.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
