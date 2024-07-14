import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "Interoperability",
        desc: "Seamlessly communicate and transact across multiple blockchains, enhancing connectivity and functionality.",
    },
    {
        id:2,
        title:"Security",
        desc: "With the help of using Distrubuted Key Generation and Signature aggregators We ensure the transactions to happen in most secure way as possible",
    },
    {
        id: 3,
        title: "Censorship Resistance",
        desc: "Maintain privacy and security with our censorship-resistant protocol, protecting transactions from external interference.",
    },
    {
        id: 4,
        title: "Dark Pools Integration",
        desc: "Protect transaction data even from the platform itself with our advanced dark pools integration.",
    },

];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Key Features"
                subHeading="Access The Future with Ozone Protocol"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
