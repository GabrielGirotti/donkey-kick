import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-orange-500 py-8 px-4 text-center  border-t border-zinc-800">
      <h2 className="sr-only">Información del sitio y créditos</h2>
      <nav
        aria-label="Redes sociales de Donkey Kick"
        className="flex justify-center space-x-6 mb-4 text-2xl"
      >
        <a
          href="https://www.instagram.com/donkey_kick/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
          aria-label="Instagram de Donkey Kick"
        >
          <FaInstagram aria-hidden="true" />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/0BxpcBBFlQgZKn4Ny03Jnp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
          aria-label="Spotify de Donkey Kick"
        >
          <FaSpotify aria-hidden="true" />
        </a>
        <a
          href="https://www.youtube.com/@donkey_kick"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
          aria-label="Youtube de Donkey Kick"
        >
          <FaYoutube aria-hidden="true" />
        </a>
      </nav>

      <p className="text-lg font-semibold mb-2">Donkey Kick</p>
      <p className="text-sm italic text-zinc-400 mb-4">
        Punkabilly - Psychobilly / Benidorm, Alicante (España){" "}
      </p>
      <p className="text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Donkey Kick. Todos los derechos
        reservados.
      </p>

      <p className="text-xs text-zinc-500">
        Hecho por{" "}
        <a
          href="https://gabrielgirotti.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
          aria-label="Portafolio de Gabba en Netlify"
        >
          Gabba
        </a>
      </p>
    </footer>
  );
}
