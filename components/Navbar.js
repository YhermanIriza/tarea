export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca</a></li>
      </ul>
    </nav>
  );
}