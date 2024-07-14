import Card, { CardProps } from "../components/sub-components/Card";
import { RiShieldStarLine } from "react-icons/ri";
import { IoMdSpeedometer } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";

const values = [
    { value: "1", label: "Billion OZONE" },
    { value: "100%", label: "Decentralized" },
    { value: "15", label: "sec of Transaction speed" },
];

const cards: CardProps[] = [
    {
        icon: <RiShieldStarLine size={44} color="#71dcf5" />,
        title: "Strong Security",
        description:
            "Ensuring secure and private transactions across multiple blockchains.",
    },
    {
        icon: <IoMdSpeedometer size={44} color="#948fe8" />,
        title: "Fast Transactions",
        description:
            "Utilizing cutting-edge FROST Algorithm for optimal transaction speeds.",
    },
    {
        icon: <AiOutlineSwap size={44} color="#ea9bfa" />,
        title: "Interoperability",
        description:
            "Facilitating seamless transactions and limitless liquidity across chains.",
    },
];

export default function Popularity() {
    return (
        <section className="bg-white/10 rounded-3xl col w-full">
            <div className="px-4 row border-b-2 border-app_bg py-6 items-center justify-around gap-4">
                {values.map((it, i) => (
                    <div key={i}>
                        <span className="md:text-8xl text-6xl font-redzone flex-1">
                            {it.value}
                        </span>
                        <br />
                        <span className="text-xl pt-4">{it.label}</span>
                    </div>
                ))}
            </div>
            <div className="px-4 row justify-center w-full">
                {cards.map((content, i) => (
                    <div
                        key={i}
                        className={`flex-1 min-w-[200px] ${
                            i !== cards.length - 1 && "md:border-r-2 md:border-app_bg"
                        }`}
                    >
                        <Card {...content} />
                    </div>
                ))}
            </div>
        </section>
    );
}
