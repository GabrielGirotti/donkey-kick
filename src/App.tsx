import Footer from "./components/Footer";
import Header from "./components/Header";
import SpotifyPlayer from "./components/SpotifyPlayer";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Header />
      <SpotifyPlayer />
      <Footer/>
    </div>
  );
}

export default App;
