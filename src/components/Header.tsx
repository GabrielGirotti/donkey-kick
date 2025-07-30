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
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 p-4">
        <img
          src="/donkey-kick-logo.png"
          alt="Donkey Kick Logo"
          className="w-[300px] md:w-[400px] drop-shadow-2xl"
        />
        <div className="flex space-x-6 text-orange-500 text-3xl -mt-14 z-20 cursor-pointer">
          <a
            href="https://www.instagram.com/donkey_kick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/0BxpcBBFlQgZKn4Ny03Jnp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </a>
          <a
            href="https://www.youtube.com/@donkey_kick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </header>
  );
}
