import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Mi App Next.js',
  description: 'Tutorial básico de Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}