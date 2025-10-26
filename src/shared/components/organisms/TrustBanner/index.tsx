import React from "react";
import Avatar from "@/shared/components/atoms/Avatar";

const TrustBanner: React.FC = () => {
  return (
    <div
      className="rounded-xl py-2 px-4 flex items-center gap-3"
      style={{ backgroundColor: "#F7C20033" }}
    >
      {/* Avatar Images */}
      <div className="flex -space-x-2">
        <Avatar src="/images/avatar1.png" alt="Company 1" className="z-30" />
        <Avatar src="/images/avatar2.png" alt="Company 2" className="z-20" />
        <Avatar src="/images/avatar3.png" alt="Company 3" className="z-10" />
      </div>

      {/* Trust Text */}
      <span className="text-black text-sm font-medium">
        trusted by 20+ companies with 5 rating
      </span>
    </div>
  );
};

export default TrustBanner;
