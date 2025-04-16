export interface Achievement {
  id: number;
  title: string;
  company: string;
  category: string;
  challenge: string;
  solution: string[];
  results: string[];
  technologies?: string;
}

export default function AchievementCard(achievement: Achievement) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-700 p-4">
        <h2 className="text-xl font-bold">{achievement.title}</h2>
        <p className="text-100">{achievement.company}</p>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Desafio:</h3>
          <p className="text-gray-700">{achievement.challenge}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Solução:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {achievement.solution?.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Resultado:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {achievement.results?.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {achievement.technologies && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Tecnologias:</h3>
            <p className="text-gray-700">{achievement.technologies}</p>
          </div>
        )}
      </div>
    </div>
  );
}
