import React from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  change: string;
  changeText: string;
  changeColor: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeText,
  changeColor,
}) => {
  return (
    <div>
      <hr
        role="presentation"
        className="w-full border-t border-zinc-950/10 dark:border-white/10"
      />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <span
          className={`inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline ${changeColor} group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15`}
        >
          {change}
        </span>{" "}
        <span className="text-zinc-500">{changeText}</span>
      </div>
    </div>
  );
};
