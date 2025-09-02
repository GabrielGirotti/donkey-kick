import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Header />
      <MusicPlayer />
      <Biography />
      <Footer />
    </div>
  );
}

export default App;
