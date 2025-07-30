export default function SpotifyPlayer() {
  return (
    <section className="bg-black text-white py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl mb-6 font-semibold">
        Escuchá Satan's Crew
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://open.spotify.com/embed/album/3GI6lYKoMn8PM2G5uvmEQX?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="max-w-4xl w-full rounded-xl"
        ></iframe>
      </div>
    </section>
  );
}
