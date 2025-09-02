import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative w-full h-[60vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/donkey-kick-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Video oficial de Donkey Kick"
        poster="https://image-cdn-fa.spotifycdn.com/image/ab67618600000194b9ef7c5d77a4c5ae10b60c80"
        preload="metadata"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 p-4">
        <h1 className="sr-only">Donkey Kick</h1>
        <img
          src="/donkey-kick-logo.png"
          alt="Donkey Kick Logo"
          className="w-[300px] md:w-[400px] drop-shadow-2xl"
        />
        <nav
          aria-label="Redes sociales de Donkey Kick"
          className="flex space-x-6 text-orange-500 text-3xl -mt-14 z-20 cursor-pointer"
        >
          <a
            href="https://www.instagram.com/donkey_kick/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Donkey Kick"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/0BxpcBBFlQgZKn4Ny03Jnp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify de Donkey Kick"
          >
            <FaSpotify aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/@donkey_kick"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube de Donkey Kick"
          >
            <FaYoutube aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
