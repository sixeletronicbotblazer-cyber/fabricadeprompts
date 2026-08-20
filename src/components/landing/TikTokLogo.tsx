"use client";

import React from "react";

interface TikTokLogoProps {
  className?: string;
  variant?: "full" | "icon";
  color?: "dark" | "light";
}

const TikTokLogo: React.FC<TikTokLogoProps> = ({
  className,
  variant = "icon",
  color = "dark",
}) => {
  const iconColor = color === "dark" ? "#000000" : "#ffffff";

  return (
    <svg
      className={className}
      viewBox={variant === "full" ? "0 0 120 34" : "0 0 34 40"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TikTok"
      role="img"
    >
      {/* Musical note icon, TikTok's signature shape */}
      <path
        d="M19.3 0v24.5c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8c.6 0 1.2.1 1.8.3v-6.2c-.6-.1-1.2-.2-1.8-.2C8.2 12.6 3 17.8 3 24.2S8.2 35.8 14.5 35.8 26 30.6 26 24.2V8.7c2.2 1.5 4.8 2.4 7.7 2.4V5C27.6 5 22.1 3.1 19.3 0Z"
        fill={iconColor}
      />

      {/* "TikTok" wordmark, only shown in "full" variant */}
      {variant === "full" && (
        <g transform="translate(38, 4)">
          {/* T */}
          <path
            d="M0 3.2v2.6h6.6V24h2.9V5.8h6.6V3.2H0Z"
            fill={iconColor}
          />
          {/* i */}
          <rect x="15.8" y="3.2" width="2.9" height="2.6" fill={iconColor} />
          <rect
            x="15.8"
            y="7.8"
            width="2.9"
            height="16.2"
            fill={iconColor}
          />
          {/* k */}
          <path
            d="M21.2 7.8V24h2.9v-8.2l6 8.2h3.6l-7.1-8.5 6.5-8.7h-3.5l-5.5 7.2V7.8h-2.9Z"
            fill={iconColor}
          />
          {/* T */}
          <path
            d="M35.5 3.2v2.6h6.6V24h2.9V5.8h6.6V3.2H35.5Z"
            fill={iconColor}
          />
          {/* o */}
          <path
            d="M60 7.8c-3.2 0-5.7 2.4-5.7 5.3s2.5 5.3 5.7 5.3 5.7-2.4 5.7-5.3S63.2 7.8 60 7.8Zm0 8.3c-1.7 0-2.8-1.3-2.8-3s1.1-3 2.8-3 2.8 1.3 2.8 3-1.1 3-2.8 3Z"
            fill={iconColor}
          />
          {/* k */}
          <path
            d="M67.8 7.8V24h2.9v-8.2l6 8.2h3.6l-7.1-8.5 6.5-8.7h-3.5l-5.5 7.2V7.8h-2.9Z"
            fill={iconColor}
          />
        </g>
      )}
    </svg>
  );
};

export default TikTokLogo;