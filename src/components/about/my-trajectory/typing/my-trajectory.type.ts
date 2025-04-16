export interface Experience {
  period: string;
  position: string;
  company: string;
  description: string[];
}

export function convertJsonToExperience(json: Experience[]): Experience[] {
  return json.map((item) => ({
    period: item.period,
    position: item.position,
    company: item.company,
    description: item.description,
  }));
}
