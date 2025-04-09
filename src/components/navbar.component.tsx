import { Button } from "./ui/button";

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
    </>
  );
}
