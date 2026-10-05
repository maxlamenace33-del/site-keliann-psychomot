import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Euro,
  FileText,
  Activity,
  PenTool,
  Heart,
  Smile,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Users,
  Compass,
  Sparkles,
} from "lucide-react";
import { getSiteSettings } from "@/lib/settings";

export default async function HomePage() {
  const settings = await getSiteSettings();

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
    <div className="flex flex-col gap-24 pb-20">
      {/* 1. HERO SECTION */}
      <section
        id="accueil"
        className="relative pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
      >
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-xs sm:text-sm font-medium text-sage-800">
            <ShieldCheck className="w-4 h-4 text-sage-600" />
            <span>Praticien de Santé Diplômé d&apos;État • Prise en soin personnalisée</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#232B28] leading-[1.15]">
            Prendre soin du corps et de l&apos;esprit par le{" "}
            <span className="text-sage-600 underline decoration-teal-accent/50 decoration-wavy decoration-2">
              mouvement
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#58625E] leading-relaxed max-w-2xl mx-auto">
            Bienvenue au cabinet de psychomotricité de <strong>{settings.contact.fullName}</strong>.
            J&apos;accompagne les enfants, adolescents et adultes pour dénouer les difficultés motrices,
            scolaires et émotionnelles à travers une approche globale et bienveillante.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={settings.contact.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Prendre rendez-vous</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <Link
              href="#infos-pratiques"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium text-[#232B28] bg-white border border-[#E8E4DC] hover:bg-[#F7F5F0] hover:border-sage-400 transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-sage-600" />
              <span>Cabinet & Localisation</span>
            </Link>
          </div>

          <p className="text-xs text-[#58625E] pt-2">
            📍 Cabinet situé à {settings.contact.address.city} • Sur prescription médicale uniquement
          </p>
        </div>
      </section>

      {/* 2. BANDEAU 4 PILIERS */}
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

      {/* 3. SECTION "QUI SUIS-JE ?" */}
      <section id="qui-suis-je" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
              <Users className="w-3.5 h-3.5" />
              <span>Le Praticien</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
              Bonjour, je suis {settings.contact.fullName}
            </h2>

            <div className="space-y-4 text-base text-[#58625E] leading-relaxed">
              <p>
                Diplômé d&apos;État, j&apos;exerce avec la conviction profonde que le corps est
                le premier médiateur de nos apprentissages, de notre relation aux autres et de notre
                bien-être émotionnel.
              </p>
              <p>
                Mon approche s&apos;appuie sur le jeu, l&apos;expérimentation corporelle, les parcours moteurs,
                la relaxation et les médiations artistiques ou graphiques pour accompagner chaque patient à son
                rythme, sans mise en échec.
              </p>
            </div>

            {/* Encadré Déontologique / Ordonnance */}
            <div className="p-5 rounded-2xl bg-sage-50 border-l-4 border-sage-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-sage-900">
                <FileText className="w-4 h-4 text-sage-700" />
                <span>Cadre légal & Prescription médicale</span>
              </div>
              <p className="text-xs sm:text-sm text-sage-800 leading-relaxed">
                {settings.prescriptionNote}
              </p>
            </div>
          </div>

          {/* Colonne Visuel Praticien */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full aspect-[4/5] bg-gradient-to-tr from-sage-100 to-teal-soft/40 rounded-3xl border border-[#E8E4DC] p-4 flex flex-col justify-end relative shadow-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-sage-600/40">
                <Activity className="w-24 h-24 stroke-1" />
              </div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-white/80 shadow-sm">
                <p className="font-bold text-[#232B28]">{settings.contact.fullName}</p>
                <p className="text-xs text-sage-700 font-medium">Psychomotricien D.E.</p>
                <div className="mt-2 pt-2 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] text-[#58625E]">
                  <span>Cabinet libéral</span>
                  <span>Conventionné</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION VALEURS & CITATION */}
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
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-semibold text-lg text-[#232B28]">Écoute & Non-jugement</h3>
              <p className="text-sm text-[#58625E] leading-relaxed">
                Créer un espace sécurisant et chaleureux où l&apos;erreur fait partie de l&apos;apprentissage
                et où le patient retrouve le plaisir d&apos;oser.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-semibold text-lg text-[#232B28]">Approche Holistique</h3>
              <p className="text-sm text-[#58625E] leading-relaxed">
                Considérer la personne dans sa globalité : son corps, ses émotions, ses capacités motrices
                et son environnement familial et scolaire.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-semibold text-lg text-[#232B28]">Travail en Réseau</h3>
              <p className="text-sm text-[#58625E] leading-relaxed">
                Échange régulier avec le médecin prescripteur, les enseignants, l&apos;orthophoniste,
                l&apos;ergothérapeute et le psychologue pour un suivi coordonné.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center pt-6">
            <blockquote className="italic text-base sm:text-lg text-[#232B28]/90 font-light">
              « Le mouvement est la première forme de langage de l&apos;être humain. En restaurant l&apos;harmonie du geste,
              on redonne à chacun la liberté d&apos;exprimer son plein potentiel. »
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5. SECTION LA PSYCHOMOTRICITÉ */}
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
                spatio-temporelle pour les études ou le brevet/bac.
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

      {/* 6. SECTION INFOS PRATIQUES & CABINET */}
      <section id="infos-pratiques" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-[#E8E4DC] p-8 sm:p-12 shadow-sm space-y-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>Modalités pratiques</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#232B28]">
              Le Cabinet & Informations Utiles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne Gauche : Horaires, Tarifs, Mutuelle */}
            <div className="space-y-8">
              {/* Horaires */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                  <Clock className="w-5 h-5 text-sage-600" />
                  <span>Horaires d&apos;ouverture</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#58625E]">
                  {settings.openingHours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-[#E8E4DC]/60 pr-2">
                      <span className="font-medium text-[#232B28]">{h.day}</span>
                      <span>{h.slots}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarifs */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                  <Euro className="w-5 h-5 text-sage-600" />
                  <span>Tarifs indicatifs</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.bilan.label}</p>
                      <p className="text-xs text-[#58625E]">{settings.pricing.bilan.description}</p>
                    </div>
                    <span className="text-lg font-bold text-sage-700 ml-4 shrink-0">
                      {settings.pricing.bilan.amount} €
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.seance.label}</p>
                      <p className="text-xs text-[#58625E]">Durée : {settings.pricing.seance.duration}</p>
                    </div>
                    <span className="text-lg font-bold text-sage-700 ml-4 shrink-0">
                      {settings.pricing.seance.amount} €
                    </span>
                  </div>
                </div>
              </div>

              {/* Remboursement */}
              <div className="p-4 rounded-xl bg-sage-50 text-xs sm:text-sm text-sage-900 border border-sage-200 space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sage-700" />
                  <span>Prise en charge & Mutuelles</span>
                </p>
                <p className="leading-relaxed text-sage-800">
                  {settings.pricing.reimbursementNote}
                </p>
              </div>
            </div>

            {/* Colonne Droite : Galerie Photos Cabinet */}
            <div className="space-y-4 flex flex-col justify-between">
              {/* Photo Principale */}
              <div className="aspect-[16/10] bg-gradient-to-br from-sage-100 to-teal-soft/30 rounded-2xl border border-[#E8E4DC] flex items-center justify-center p-6 text-center text-sage-700">
                <div className="space-y-2">
                  <Activity className="w-12 h-12 mx-auto stroke-1 opacity-70" />
                  <p className="text-sm font-semibold">Salle de consultation & Matériel moteur</p>
                  <p className="text-xs text-[#58625E]">Un espace spacieux, lumineux et sécurisant</p>
                </div>
              </div>

              {/* 2 Vignettes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F7F5F0] to-sage-50 rounded-xl border border-[#E8E4DC] flex items-center justify-center p-3 text-center">
                  <p className="text-xs text-[#58625E] font-medium">Devanture & Accès PMR</p>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F7F5F0] to-teal-soft/20 rounded-xl border border-[#E8E4DC] flex items-center justify-center p-3 text-center">
                  <p className="text-xs text-[#58625E] font-medium">Salle d&apos;attente paisible</p>
                </div>
              </div>

              {/* Bouton Google Maps */}
              <a
                href={settings.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E8E4DC] bg-[#FDFBF7] hover:bg-[#F7F5F0] text-sm font-medium text-[#232B28] transition-colors"
              >
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Ouvrir l&apos;itinéraire sur Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
