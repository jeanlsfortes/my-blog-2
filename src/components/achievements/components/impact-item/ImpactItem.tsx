interface ImpactItemProps {
  text: string;
}

export default function ImpactItem({ text }: ImpactItemProps) {
  return (
    <li className="flex items-start mb-2">
      <span className="text-green-500 mr-2">✅</span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
}
