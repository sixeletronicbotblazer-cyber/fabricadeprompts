"use client";

export function HeroVideo() {
  return (
    <div className="mt-6 sm:mt-8 mx-auto w-full max-w-[760px]">
      <div className="relative rounded-[18px] overflow-hidden bg-black shadow-[0_0_40px_rgba(124,58,237,0.08)] border border-white/[0.08]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full aspect-video object-cover rounded-[18px]"
        >
          <source src="/images/demo-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
