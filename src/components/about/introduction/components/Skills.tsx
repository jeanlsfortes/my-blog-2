interface SkillProps {
    skill: {
        title: string
        list: string[];
    }
}

const Skills: React.FC<SkillProps> = ({ skill }) => {
    return (

        <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">{skill.title}</h2>

            <div className="flex flex-wrap gap-2">
                {skill.list.map((mySkill) => (
                    <span key={mySkill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {mySkill}
                    </span>
                ))}
            </div>
        </div>

    );
};

export default Skills;