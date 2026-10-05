export function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Écoute & Non-jugement",
      desc: "Créer un espace sécurisant et chaleureux où l'erreur fait partie de l'apprentissage et où le patient retrouve le plaisir d'oser.",
    },
    {
      num: "02",
      title: "Approche Holistique",
      desc: "Considérer la personne dans sa globalité : son corps, ses émotions, ses capacités motrices et son environnement familial et scolaire.",
    },
    {
      num: "03",
      title: "Travail en Réseau",
      desc: "Échange régulier avec le médecin prescripteur, les enseignants, l'orthophoniste, l'ergothérapeute et le psychologue pour un suivi coordonné.",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B28]">
            Une prise en charge humaine et collaborative
          </h2>
          <p className="text-sm text-[#58625E]">
            Trois piliers guident chaque consultation et suivi thérapeutique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold">
                {v.num}
              </div>
              <h3 className="font-semibold text-lg text-[#232B28]">{v.title}</h3>
              <p className="text-sm text-[#58625E] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center pt-6">
          <blockquote className="italic text-base sm:text-lg text-[#232B28]/90 font-light">
            « Le mouvement est la première forme de langage de l&apos;être humain. En restaurant l&apos;harmonie du geste,
            on redonne à chacun la liberté d&apos;exprimer son plein potentiel. »
          </blockquote>
        </div>
      </div>
    </section>
  );
}
