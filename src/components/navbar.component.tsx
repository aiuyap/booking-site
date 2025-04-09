import { Button } from "./ui/button";

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-black p-4">
        <div className="text-xl font-bold text-white">Condo Booking</div>
        <ul className="flex items-center space-x-6 font-medium text-white">
          <li>
            <a href="#" className="transition-colors hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors hover:text-red-500">
              Condos
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <Button>Book Now</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
