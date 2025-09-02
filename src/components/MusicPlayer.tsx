import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import terror from "../assets/songs/terror.mp3";
import she from "../assets/songs/she.mp3";
import dancing from "../assets/songs/dancing.mp3";
import wolf from "../assets/songs/wolf.mp3";

interface Track {
  title: string;
  cover: string;
  src: string;
}

const tracks: Track[] = [
  { title: "Terror Movie", cover: "/terror.jpg", src: terror },
  { title: "She Is Ideal", cover: "/she.jpg", src: she },
  { title: "Dancing With My Dead Girl", cover: "/dancing.jpg", src: dancing },
  { title: "WolfGirl", cover: "/wolf.jpg", src: wolf },
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true); // <- cambiar a true para autoplay
  };

  const playPrev = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true); // <- cambiar a true para autoplay
  };

  // Efecto para reproducir automáticamente al cambiar de track
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <section className="w-full h-[70vh] flex items-center justify-center bg-black/70 py-72">
      <div className="bg-black/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col items-center max-w-md w-full text-center">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-96 h-96 max-w-[100dvw] object-cover rounded-xl shadow-lg mb-2"
        />
        <h2 className="text-xl mb-2 font-semibold text-orange-500 drop-shadow-lg">
          {currentTrack.title}
        </h2>

        <div className="flex items-center space-x-6 text-orange-500 text-3xl">
          <button onClick={playPrev} aria-label="Canción anterior">
            <FaStepBackward />
          </button>
          <button
            onClick={togglePlay}
            className="bg-orange-500 text-black p-4 rounded-full hover:bg-orange-400 transition"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={playNext} aria-label="Siguiente canción">
            <FaStepForward />
          </button>
        </div>

        <audio ref={audioRef} src={currentTrack.src} onEnded={playNext} />
      </div>
    </section>
  );
}
