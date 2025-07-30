import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-orange-500 py-8 px-4 text-center  border-t border-zinc-800">
      <div className="flex justify-center space-x-6 mb-4 text-2xl">
        <a
          href="https://www.instagram.com/donkey_kick/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/0BxpcBBFlQgZKn4Ny03Jnp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
        >
          <FaSpotify />
        </a>
        <a
          href="https://www.youtube.com/@donkey_kick"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="text-lg font-semibold mb-2">Donkey Kick</p>
      <p className="text-sm italic text-zinc-400 mb-4">
        Punkabilly - Psychobilly / Benidorm, Alicante (España){" "}
      </p>
      <p className="text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Donkey Kick. Todos los derechos
        reservados.
      </p>
      <p className="text-xs text-zinc-500">Hecho por   <a
          href="https://gabrielgirotti.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
        >
          Gabba
        </a></p>
    </footer>
  );
}
