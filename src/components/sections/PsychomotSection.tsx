import {
  Compass,
  PenTool,
  Puzzle,
  Scissors,
  Activity,
  Clock,
  Sparkles,
  Heart,
  Baby,
} from "lucide-react";

export function PsychomotSection() {
  const motifs = [
    {
      domain: "Apprentissages",
      icon: <PenTool className="w-4 h-4 text-sage-600" />,
      title: "Graphisme et écriture",
      desc: "Difficultés à écrire, former les lettres ou tenir son crayon ? La psychomotricité aide à développer un geste graphique plus fluide.",
    },
    {
      domain: "Praxies & Gestes",
      icon: <Puzzle className="w-4 h-4 text-sage-600" />,
      title: "Coordination et dyspraxie",
      desc: "Difficultés à coordonner ses gestes ou à réaliser certaines activités du quotidien ? L'accompagnement aide à développer des stratégies adaptées.",
    },
    {
      domain: "Dextérité",
      icon: <Scissors className="w-4 h-4 text-sage-600" />,
      title: "Motricité fine",
      desc: "Difficultés à découper, boutonner ou manipuler de petits objets ? Les séances permettent de travailler la précision et la coordination des gestes.",
    },
    {
      domain: "Aisance corporelle",
      icon: <Activity className="w-4 h-4 text-sage-600" />,
      title: "Équilibre et motricité globale",
      desc: "Difficultés à courir, sauter ou trouver son équilibre ? La psychomotricité aide à gagner en aisance corporelle.",
    },
    {
      domain: "Organisation",
      icon: <Clock className="w-4 h-4 text-sage-600" />,
      title: "Repérage dans l'espace et le temps",
      desc: "Difficultés à se repérer dans l'espace, s'organiser ou se situer dans le temps ? Des activités adaptées permettent de travailler ces repères.",
    },
    {
      domain: "Sensorialité",
      icon: <Sparkles className="w-4 h-4 text-sage-600" />,
      title: "Particularités sensorielles",
      desc: "Certaines sensations, matières ou certains bruits sont difficiles à supporter ? L'accompagnement aide à mieux comprendre ces particularités et à trouver des ajustements.",
    },
    {
      domain: "Émotions & Corps",
      icon: <Heart className="w-4 h-4 text-sage-600" />,
      title: "Confiance en soi et vécu corporel",
      desc: "Manque d'assurance dans les activités corporelles ou peur de l'échec ? Les séances offrent un cadre pour expérimenter et prendre confiance.",
    },
    {
      domain: "Bilan & Éveil",
      icon: <Baby className="w-4 h-4 text-sage-600" />,
      title: "Développement psychomoteur",
      desc: "Des questions concernant le développement moteur ou la coordination de votre enfant ? Un bilan permet de mieux comprendre ses compétences et ses besoins.",
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
          entre le corps, les émotions et les fonctions cognitives. À travers le mouvement et l&apos;expérience
          corporelle, elle permet à chacun de mieux se connaître, de développer ses compétences et de gagner
          en aisance au quotidien.
        </p>
      </div>

      {/* Sous-bloc : Pour qui ? */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#232B28] text-center">
          À chaque étape de la vie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-600 bg-sage-50 px-2.5 py-1 rounded-md inline-block">
              Enfants
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Nourrissons & Enfants</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Éveil et développement psychomoteur, acquisition des coordinations, motricité fine,
              geste graphique, repères spatio-temporels et accompagnement des troubles du neurodéveloppement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-dark bg-teal-soft/60 px-2.5 py-1 rounded-md inline-block">
              Adolescents
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adolescents</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Accompagnement des transformations corporelles, organisation dans les apprentissages,
              gestion des émotions, particularités sensorielles et renforcement de la confiance en soi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#58625E] bg-[#EFECE6] px-2.5 py-1 rounded-md inline-block">
              Adultes & Seniors
            </span>
            <h4 className="text-lg font-semibold text-[#232B28]">Adultes & Seniors</h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Réappropriation du vécu corporel, apaisement des tensions tonico-émotionnelles,
              travail de l&apos;équilibre, prévention des chutes et maintien de l&apos;autonomie au quotidien.
            </p>
          </div>
        </div>
      </div>

      {/* Sous-bloc : 8 Motifs de consultation */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-[#232B28]">
            Motifs de consultation
          </h3>
          <p className="text-sm text-[#58625E]">
            Exemples de situations fréquentes pour lesquelles un bilan ou un suivi psychomoteur peut être proposé.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motifs.map((motif, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E8E4DC] hover:border-sage-400 hover:shadow-2xs transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-sage-50">
                    {motif.icon}
                  </span>
                  <span className="text-[11px] text-[#58625E]/80 font-medium bg-[#F7F5F0] px-2 py-0.5 rounded-md">
                    {motif.domain}
                  </span>
                </div>
                <h4 className="font-semibold text-base text-[#232B28] leading-snug">
                  {motif.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#58625E] leading-relaxed">
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
