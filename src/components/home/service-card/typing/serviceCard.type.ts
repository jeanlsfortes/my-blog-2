export type ServiceKey = "web" | "uxui" | "mobile" | "software";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
