export default function Biography() {
  return (
    <section
      className="bg-zinc-900 text-white pb-12"
      aria-labelledby="bio-heading"
    >
      <div className="w-full h-[50vh] overflow-hidden">
        <img
          src="https://image-cdn-fa.spotifycdn.com/image/ab67618600000194b9ef7c5d77a4c5ae10b60c80"
          alt="Donkey Kick Spotify Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <article className="max-w-3xl mx-auto px-4 mt-10 text-center">
        <h2
          id="bio-heading"
          className="text-4xl font-bold text-orange-500 mb-6"
        >
          Biografía
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
          <strong>Donkey Kick</strong> es una banda nacida en 2024 en la ciudad
          de <strong>Benidorm</strong> (Alicante), combinando la energía del
          punk con la esencia del psychobilly más crudo.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mt-4 text-zinc-200">
          Formada por <strong>Gabba</strong> (guitarra y voz),{" "}
          <strong>Kevin</strong> (contrabajo y voz) y <strong>Pedro</strong>{" "}
          (batería y coros), el trío canaliza influencias clásicas y modernas
          para crear un sonido propio y directo.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mt-4 text-zinc-200">
          En su primer EP titulado <strong>“Satan's Crew”</strong>, disponible
          en todas las plataformas digitales, Donkey Kick presenta 6 canciones
          originales que capturan su estilo salvaje y su identidad sonora con
          fuerza y actitud.
        </p>
      </article>
    </section>
  );
}
