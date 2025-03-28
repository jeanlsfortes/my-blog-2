"use client";

import { ServiceCardProps } from "./typing/serviceCard.type";

const ServiceCard = ({ title, description, icon }: ServiceCardProps): React.ReactElement => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;