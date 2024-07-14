import { useEffect } from "react";
import Header from "./components/Header";
import { routes } from "./constants";

import AboutSection from "./sections/AboutSection";
import CollectionSection from "./sections/CollectionSection";
import RoadmapSection from "./sections/roadmap";
import FAQSection from "./sections/FAQSection";
import FeaturesSection from "./sections/FeaturesSection";
import FooterSection from "./sections/FooterSection";
import MainSection from "./sections/MainSection";
import Popularity from "./sections/Popularity";
import PromoSection from "./sections/PromoSection";
import TeamSection from "./sections/TeamSection";
import Tokenomics from "./sections/Tokenomics";
import Animate from "./components/Animate";
import { theme, APP_BODY_ID } from "./utils";

const Components = [
    { El: Header, id: routes.home },
    { El: MainSection, id: routes.home },
    { El: Popularity, id: routes.popular },
    { El: AboutSection, id: routes.about },
    { El: FeaturesSection, id: routes.features },
    { El: CollectionSection, id: routes.collection },
    { El: RoadmapSection, id: routes.collection },
    { El: Tokenomics, id: "tokenomics" },
    { El: FAQSection, id: routes.faq },
    { El: PromoSection, id: routes.promo },
    { El: TeamSection, id: "team" },
    { El: FooterSection, id: routes.footer },
];

function App() {
    useEffect(() => {
        const loader = document.querySelector(".loader");
        if (loader) loader.remove();
        theme.initiate();
    }, []);

    return (
        <main className="app-bg min-h-[100dvh] overflow-x-hidden max-w-full">
            <section className="max-w-6xl xl:px-0 px-4 flex center col mx-auto pb-8 md:gap-36 gap-12">
                <div id={APP_BODY_ID} className="fixed inset-0 light round-gradient" />
                {Components.map(({ El, id }, i) => (
                    <Animate id={id} n={i + 1} key={id + i}>
                        <El />
                    </Animate>
                ))}
            </section>
        </main>
    );
}

export default App;
