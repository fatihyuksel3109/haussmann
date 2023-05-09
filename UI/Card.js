import Image from "next/image";

export const services = [
  {
    id: "s1",
    imageSrc: "/images/tapisdepierre.jpg",
    title: "Tapis de Pierre",
    subtitle: "Une solution durable et élégante pour vos espaces extérieurs",
    description:
      "Matériau naturel et durable, résistant aux intempéries et aux UV \
          Facile à installer et à entretenir Perméable à l'eau, favorisant l'écoulement des eaux de pluie et évitant les problèmes de drainage\
          Disponible en différentes couleurs et textures pour s'adapter à tous les styles de décoration extérieure\
          Utilisable pour les allées, les patios, les terrasses, les piscines, les jardins, etc.\
          Offre une surface antidérapante pour plus de sécurité",
  },
  {
    id: "s2",
    imageSrc: "/images/etancheinte.jpg",
    title: "Étanchéinté",
    subtitle: "Une protection sûre et durable contre l'eau",
    description:
      "Étanchéité de toiture pour les bâtiments résidentiels et commerciaux\
        Étanchéité de terrasse pour les espaces extérieurs\
        Étanchéité de sous-sol pour une protection contre l'humidité et les infiltrations d'eau\
        Étanchéité de piscine pour une étanchéité durable\
        Matériaux de haute qualité pour une protection optimale\
        Installation professionnelle et garantie de satisfaction client",
  },
  {
    id: "s3",
    imageSrc: "/images/industriel.jpg",
    title: "Sols Industriels",
    subtitle: "Des sols résistants pour les environnements industriels",
    description:
      "Résistance à l'abrasion, aux produits chimiques et à la chaleur\
        Faible entretien et facile à nettoyer\
        Durée de vie prolongée\
        Résistance aux charges lourdes et à la circulation intense\
        Sécurité accrue grâce à des surfaces antidérapantes",
  },
];

const Card = ({ imageSrc, title, subtitle, description }) => {
  return (
    <div className="flex items-center p-4">
      <div className="w-full lg:w-1/3">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="lg:max-w-none"
        />
      </div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-4xl font-medium text-black mb-7">{title}</h2>
        <h4 className="text-lg font-medium text-gray-900 mb-3">{subtitle}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
