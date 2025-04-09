export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="text-xl font-bold text-gray-800">Website Name</div>
      <ul className="flex space-x-6 font-medium text-gray-600">
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
      </ul>
    </nav>
  );
}
