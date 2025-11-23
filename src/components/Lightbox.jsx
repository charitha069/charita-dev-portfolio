export default function Lightbox({ photos, index, setIndex, onClose }) {
  const photo = photos[index];

  const close = () => onClose();

  const next = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex flex-col justify-center items-center animate-fadeIn"
      onClick={close}
    >
      {/* ARROWS */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl px-4 py-2"
        onClick={prev}
      >
        ‹
      </button>

      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl px-4 py-2"
        onClick={next}
      >
        ›
      </button>

      {/* IMAGE */}
      <img
        src={photo.src}
        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain animate-zoomIn"
      />

      {/* CAPTION */}
      <div className="text-center mt-4 px-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white">{photo.title}</h2>
        <p className="text-gray-300 mt-2">{photo.desc}</p>
      </div>

      {/* CLOSE */}
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={close}
      >
        ✕
      </button>
    </div>
  );
}
