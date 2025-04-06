import { Experience } from "../typing/my-trajectory.type";

export default function ExperienceItems(experiences: Experience) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-1/3">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{experiences.period}</p>
                <p className="text-gray-600 dark:text-gray-400">{experiences.position}</p>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experiences.company}</h3>

                <div className="mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                    {Array.isArray(experiences.description) ? (
                        <ul className="list-disc pl-5 space-y-2">
                            {experiences.description.map((item, index) => (
                                <li key={index}>
                                    {item.startsWith('**P (Problema):**') ? (
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {item.replace('**P (Problema):**', 'Problema: ')}
                                        </div>
                                    ) : item.startsWith('**I (Intervenção):**') ? (
                                        <div className="font-semibold text-gray-900 dark:text-white mt-2">
                                            {item.replace('**I (Intervenção):**', 'Intervenção: ')}
                                        </div>
                                    ) : item.startsWith('**T (Transformação):**') ? (
                                        <div className="font-semibold text-gray-900 dark:text-white mt-2">
                                            {item.replace('**T (Transformação):**', 'Transformação: ')}
                                        </div>
                                    ) : (
                                        <div className="ml-4">{item}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{experiences.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}