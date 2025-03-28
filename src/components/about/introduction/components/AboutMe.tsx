import React from 'react';

interface AboutMeProps {
    title: string
    texts: string[];
}

const AboutMe: React.FC<AboutMeProps> = ({ title, texts }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>

            <div className="space-y-6">
                {texts.map((text, index) => (
                    <p key={index} className="text-lg text-gray-700">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;