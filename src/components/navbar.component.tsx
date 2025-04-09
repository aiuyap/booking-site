import { Button } from "./ui/button";
import heroImg from "../assets/hero.jpg";

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-white p-4">
        <div className="text-xl font-bold text-gray-800">Condo Booking</div>
        <ul className="flex items-center space-x-6 font-medium text-gray-600">
          <li>
            <a href="#" className="transition-colors hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors hover:text-blue-600">
              Condos
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <Button>Book Now</Button>
          </li>
        </ul>
      </nav>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImg}')`,
          height: "calc(100vh - 68px)",
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black">
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
            Book your next staycation with us.
          </h1>
        </div>
      </section>
    </>
  );
}
