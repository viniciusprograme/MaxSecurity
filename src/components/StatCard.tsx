import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
}

export default function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      {Icon && <Icon className="w-6 h-6 text-indigo-600 mb-2" />}
      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{value}</span>
      <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">{title}</span>
    </div>
  );
}
