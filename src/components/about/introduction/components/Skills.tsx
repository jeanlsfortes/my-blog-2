interface SkillProps {
    skill: {
        title: string;
        categories: {
            title: string;
            list: string[];
        }[];
    };
}

export default function Skills({ skill }: SkillProps) {
    return (
        <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold">{skill.title}</h2>

            <div className="space-y-4">
                {skill.categories?.map((category) => (
                    <div key={category.title} className="space-y-2">
                        <h3 className="text-lg font-medium text-gray-700">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.list?.map((item) => (
                                <span
                                    key={item}
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
