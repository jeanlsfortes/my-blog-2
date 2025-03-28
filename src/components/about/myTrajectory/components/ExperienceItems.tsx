import { Experience } from "../typing/my-trajectory.type";

export default function ExperienceItems(experiences: Experience) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
                <p className="text-xl font-semibold">{experiences.periodo}</p>
                <p className="text-gray-600">{experiences.cargo}</p>
            </div>
            <div className="md:w-2/3 mt-2 md:mt-0">
                <h3 className="text-xl font-semibold">{experiences.empresa}</h3>
                <p className="mt-2 text-gray-700">{experiences.descricao}</p>
            </div>
        </div>
    );
}