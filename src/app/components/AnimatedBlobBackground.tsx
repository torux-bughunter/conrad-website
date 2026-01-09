"use client";

export default function AnimatedBlobBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <source
          src="/plant.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
