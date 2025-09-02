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
  const [progress, setProgress] = useState(0); // progreso en segundos
  const [duration, setDuration] = useState(0); // duración total en segundos
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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateProgress);

    // Al cargar metadata, seteamos duración
    const setAudioDuration = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentTrack]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // Efecto para reproducir automáticamente al cambiar de track
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

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
        <div className="w-full flex items-center space-x-2 mt-4 text-white text-sm">
          <span>{formatTime(progress)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={progress}
            onChange={handleSeek}
            className="flex-1 h-1 rounded-lg bg-orange-500 accent-orange-400"
          />
          <span>{formatTime(duration)}</span>
        </div>

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
