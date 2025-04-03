import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
const NavBar = () => {
  return (
    <header className="w-full h-20 bg-purple-900 border-b border-gray-0 flex items-center justify-between px-20 fixed top-0 left-0 right-0 z-50">
      
          <div className="logotipo">
              <Image src="/Images/agência.svg" alt="Logotipo" width={150} height={50} priority  />
          </div>
          <nav className="menu flex gap-6 text-white">
              <Link href="/">Home</Link>
              <Link href="/">O que fazemos</Link>
              <Link href="/">Cases</Link>
          </nav>
          <div className="action">
              <Button title="Fala Conosco"/> {/* Importamos o botão,ou seja criamos uma pasta e import */}
          </div>
    </header>
  );
};
export default NavBar;