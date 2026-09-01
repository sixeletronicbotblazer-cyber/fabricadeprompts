"use client";

export function HeroVideo() {
  return (
    <div className="mt-6 sm:mt-8 mx-auto w-full max-w-[760px]">
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_40px_rgba(255,45,85,0.08)] border border-[#2A2A2E]/60">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full aspect-video object-cover rounded-2xl"
        >
          <source src="/images/demo-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
