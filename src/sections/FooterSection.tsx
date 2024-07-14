import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks } from "../constants";

const socialLinks = [
    { Icon: AiOutlineTwitter, url: "https://x.com/_OzoneProtocol_" },
    { Icon: FaGithub, url: "https://github.com/Ozone-protocol" },
    { Icon: RiDiscordFill, url: "https://discord.gg/mPFCf6d7" },
];

const links = [
    ["MarketPlace", "About us", "Our team", "Team Details"],
    ["Company", "Wallet", "Login Page", "Registration", "Checkout"],
    ["Services", "Contact Us"],
];

const handleCompanyClick = (link:string) => {
    alert("Developing...");
};

export default function FooterSection() {
    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">Ozone Protocol</h3>
                    <div className="row gap-4">
                        {socialLinks.map(({ Icon, url }, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/50 text-white"
                            >
                                <Icon size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>
                <span className="text-app_gray text-sm">
                    All rights reserved &#169; <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="row md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={
                                            group[0] === "Company"
                                                ? `javascript:void(0)`
                                                : `#${appLinks[i]}`
                                        }
                                        onClick={group[0] === "Company" ? () => handleCompanyClick(link) : undefined}
                                        className={`font-nominee text-app_gray text-xs hover:text-white`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            {/* Contact Information */}
            <div id="contact" className="col gap-2">
                <span className="font-redzone mb-2">Contact Us</span>
                <a
                    href="mailto:hello@ozoneprotocol.xyz"
                    className="font-nominee text-app_gray text-xs hover:text-white"
                >
                    hello@ozoneprotocol.xyz
                </a>
            </div>
        </footer>
    );
}
