import React from 'react';

const teamMembers = [
    { name: "JAY", role: "CEO", imageUrl: "/assets/jay.jpg", hoverImageUrl: "/assets/jay2.jpeg" },
    { name: "SHANKAR", role: "COO", imageUrl: "/assets/ravi.jpg", hoverImageUrl: "/assets/ravi2.jpg" },
    { name: "ABHI", role: "CBO", imageUrl: "/assets/abhi.jpg", hoverImageUrl: "/assets/abhi2.jpg" },
];

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="w-full flex flex-col items-center py-12">
            <h2 className="text-4xl font-redzone mb-8">Our Team</h2>
            <div className="flex gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col items-center text-center">
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-48 h-48 object-cover rounded-full"
                            onMouseEnter={e => e.currentTarget.src = member.hoverImageUrl}
                            onMouseLeave={e => e.currentTarget.src = member.imageUrl}
                        />
                        <span className="mt-2 text-xl font-bold">{member.name}</span>
                        <span className="text-app_gray">{member.role}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
