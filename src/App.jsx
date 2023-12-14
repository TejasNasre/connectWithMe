import Bg from "./components/Bg";
import Fg from "./components/Fg";

export default function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Bg />
      <Fg />
    </div>
  );
}
