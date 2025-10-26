import React from "react";
import Typography from "@/shared/components/atoms/Typography";

interface StatItem {
  number: string;
  label: string;
}

interface StatsProps {
  stats: [StatItem, StatItem];
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ stats, className = "" }) => {
  return (
    <div className={`flex gap-16 z-10 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="flex gap-3 items-center">
          <Typography
            variant="h2"
            fontWeight="semibold"
            color="charcoal"
            className="leading-none mb-2 lg:text-[40px] max-lg:text-2xl"
          >
            {stat.number}
          </Typography>
          <Typography
            variant="p"
            fontWeight="normal"
            color="charcoal"
            className="whitespace-pre-line lg:text-base max-lg:text-sm"
          >
            {stat.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Stats;
