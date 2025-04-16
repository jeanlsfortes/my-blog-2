import AchievementCard, {
  Achievement,
} from "../achievement-card/AchievementCard";
import ImpactItem from "../impact-item/ImpactItem";

interface inpactProps {
  title: string;
  description: string;
  items: string[];
}

interface StoriesProps {
  title: string;
  data: Achievement[];
  impact: inpactProps;
}

export default function Stories({ title, data, impact }: StoriesProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

        <div className="grid grid-cols-1 gap-6">
          {data.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{impact.title}</h2>
          <p className="mb-2">{impact.description}</p>
          <ul className="list-none">
            {impact.items?.map((item, index) => (
              <ImpactItem key={index} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
