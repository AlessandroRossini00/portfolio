import Image from "next/image";

export default function CardList() {
  const cards = [
    {
      image: "/skills/design.svg",
      title: "Design Tools:",
      description: ["Figma"],
    },
    {
      image: "/skills/languages.svg",
      title: "Languages I speak",
      description: ["HTML, CSS, Git, C, C++", "Javascript, Typescript "],
    },
    {
      image: "/skills/general.svg",
      title: "General Dev Tools",
      description: ["Firebase, VS Code", "Github, Google Cloud"],
    },
    {
      image: "/skills/mobile.svg",
      title: "Mobile Dev Tools",
      description: ["React, React Native, Expo"],
    },
    {
      image: "/skills/web.svg",
      title: "Web Dev Tools",
      description: ["React, Next.js, Vercel", "Tailwind CSS"],
    },
  ];

  return (
    <section className="cards-container py-8">
      {/* Header della sezione */}
      <header className="text-center mb-6">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <p className="text-white mx-4 ">
          Competenze tecniche e tecnologie utilizzate per progettare e
          sviluppare soluzioni innovative.
        </p>
      </header>

      {/* Griglia di card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ image, title, description }: any) {
  return (
    <article className="flex flex-col bg-blue-500 border-white border-2 justify-start items-center shadow-md rounded-xl overflow-hidden">
      <div className="rounded-full bg-white p-4 m-2">
        <Image
          src={image}
          alt={`Immagine di ${title}`}
          width={64}
          height={64}
          className="object-center bg-white"
          priority={false} // Usa `true` solo se è un contenuto critico
        />
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold text-blue-800 mb-2">{title}</h3>
        {description.map((item: any, index: any) => (
          <p key={index} className="text-sm m-2">
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
