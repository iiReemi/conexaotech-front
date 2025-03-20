import React from "react";

interface CircularLoadingProps {
  size?: number;
  stroke?: string;
}

const CircularLoading: React.FC<CircularLoadingProps> = ({
  size = 50,
  stroke,
}) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="4"
        />
        <path
          d="M4 12a8 8 0 018-8"
          stroke={stroke ? stroke : "white"}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CircularLoading;
