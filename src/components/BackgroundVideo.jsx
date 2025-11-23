import galaxyVideo from "../assets/galaxy.mp4";

export default function BackgroundVideo() {
  return (
    <>
      {/* The video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-50"
      >
        <source src={galaxyVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-40"></div>
    </>
  );
}
