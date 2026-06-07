import { Footer } from "./components/Footer";
import { InkBackground } from "./components/InkBackground";
import { MusicDiscPlayer } from "./components/MusicDiscPlayer";
import { Navbar } from "./components/Navbar";
import { useBasicDevtoolsGuard } from "./hooks/useBasicDevtoolsGuard";
import { HomePage } from "./pages/HomePage";

export default function App() {
  useBasicDevtoolsGuard();

  return (
    <>
      <InkBackground />
      <Navbar />
      <main>
        <HomePage />
      </main>
      <MusicDiscPlayer />
      <Footer />
    </>
  );
}
