import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-black p-4">
        <div className="text-xl font-bold text-white">Condo Booking</div>
        <ul className="flex items-center space-x-6 font-medium text-white">
          <li>
            <Link to="/" className="transition-colors hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/condos" className="transition-colors hover:text-red-500">
              Condos
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition-colors hover:text-red-500">
              About Us
            </Link>
          </li>
          <li>
            <Button>Book Now</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
