"use client";

export function HeroVideo() {
  return (
    <div className="mt-6 sm:mt-8 mx-auto w-full max-w-[760px]">
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_30px_rgba(37,244,238,0.08),0_0_60px_rgba(254,44,85,0.06)] border border-white/[0.08]">
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
