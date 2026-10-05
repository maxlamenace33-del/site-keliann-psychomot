import { Compass, CheckCircle2 } from "lucide-react";

export function PsychomotSection() {
  const motifs = [
    {
      title: "Troubles de la coordination (TDC / Dyspraxie)",
      desc: "Difficultés d'habillage, maladresse motrice récurrente, chutes fréquentes, dysharmonie des gestes.",
    },
    {
      title: "Difficultés d'écriture (Dysgraphie)",
      desc: "Lenteur, douleur à la tenue du crayon, écriture illisible ou fatigue précoce lors du travail scolaire.",
    },
    {
      title: "TDA/H & Impulsivité",
      desc: "Agitation motrice permanente, difficultés de canalisation de l'énergie et d'inhibition des gestes.",
    },
    {
      title: "Organisation spatio-temporelle",
      desc: "Difficultés à se situer dans l'espace, à gérer le temps, inversions de repères droite/gauche.",
    },
    {
      title: "Régulation tonico-émotionnelle",
      desc: "Hypertonie, tics, bégaiement moteur, crispations posturales liées à l'anxiété ou au perfectionnisme.",
    },
    {
      title: "Schéma corporel & Estime de soi",
      desc: "Mauvaise perception de son propre corps, complexe d'image corporelle, inhibition ou timidité motrice.",
    },
    {
      title: "Retard de développement psychomoteur",
      desc: "Retard des acquisitions posturales (retournement, position assise, 4 pattes, marche autonome).",
    },
    {
      title: "Perte d'autonomie chez l'adulte & senior",
      desc: "Troubles de l'équilibre, prévention des chutes, réappropriation corporelle post-AVC ou traumatisme.",
    },
  ];

  return (
    <section id="psychomotricite" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
          <Compass className="w-3.5 h-3.5" />
          <span>Comprendre la discipline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
          Qu&apos;est-ce que la Psychomotricité ?
        </h2>
        <p className="text-base text-[#58625E] leading-relaxed">
          La psychomotricité est une profession de santé paramédicale qui s&apos;intéresse aux liens
          indissociables entre les fonctions motrices, sensorielles, affectives et intellectuelles.
        </p>
      </div>

      {/* Sous-bloc : Pour qui ? */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#232B28] text-center">
          À qui s&apos;adresse le cabinet ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-600 bg-sage-50 px-2.5 py-1 rounded-md inline-block">
              Enfants
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Bébés & Enfants d&apos;âge scolaire</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Retards d&apos;acquisitions, troubles DYS (dyspraxie, dysgraphie), TDA/H, maladresse,
              agitation ou difficultés dans les apprentissages scolaires.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-dark bg-teal-soft/60 px-2.5 py-1 rounded-md inline-block">
              Adolescents
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adolescents & Jeunes Adultes</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Mal-être corporel, gestion de l&apos;anxiété et du stress, perte de repères, organisation
              spatio-temporelle pour les études ou les examens.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#58625E] bg-[#EFECE6] px-2.5 py-1 rounded-md inline-block">
              Adultes & Seniors
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adultes & Personnes Âgées</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Tensions physiques chroniques, burn-out, rééducation neurologique, troubles de l&apos;équilibre
              et maintien de l&apos;autonomie.
            </p>
          </div>
        </div>
      </div>

      {/* Sous-bloc : 8 Motifs de consultation */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-[#232B28]">
            Dans quelles situations consulter ?
          </h3>
          <p className="text-sm text-[#58625E]">
            Exemples fréquents de motifs amenant à réaliser un bilan psychomoteur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motifs.map((motif, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E8E4DC] hover:border-sage-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sage-600 font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0" />
                  <span>Motif {i + 1}</span>
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
