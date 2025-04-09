import heroImg from "../assets/hero.jpg";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        height: "calc(100vh - 68px)",
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-black/70">
        <h1 className="text-center text-4xl font-bold text-white opacity-100 md:text-6xl">
          Book your next staycation with us.
        </h1>
        <Button>Book Now</Button>
      </div>
    </section>
  );
}
export default Hero;
