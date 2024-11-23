import Image from "next/image";

export default function CardList() {
    const cards = [
        {
            image: "/images/example1.jpg",
            title: "Card 1",
            description: "Descrizione della prima card.",
        },
        {
            image: "/images/example2.jpg",
            title: "Card 2",
            description: "Descrizione della seconda card.",
        },
        {
            image: "/images/example3.jpg",
            title: "Card 3",
            description: "Descrizione della terza card.",
        },
    ];

    return (
        <section className="cards-container py-8">
            {/* Header della sezione */}
            <header className="text-center mb-6">
                <h2 className="text-2xl font-bold">Le Nostre Card</h2>
                <p className="text-gray-600">Scopri le nostre migliori proposte.</p>
            </header>

            {/* Griglia di card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

function Card({ image, title, description }) {
    return (
        <article className="card bg-white shadow-md rounded-lg overflow-hidden">
            {/* Immagine ottimizzata */}
            <Image
                src={image}
                alt={`Immagine di ${title}`}
                width={400}
                height={250}
                className="object-cover"
                priority={false} // Usa `true` solo se è un contenuto critico
            />

            {/* Contenuto della card */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </article>
    );
}