import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full h-20 bg-purple-900 border-b border-gray-300 flex items-center justify-between px-20 fixed top-0 left-0 right-0 z-50">
      
          <div className="logotipo">
            <Image src="/Images/agência.svg" alt="Logotipo" width={150} height={50} priority  />
          </div>

          <nav className="menu flex gap-6 text-white">
            <Link href="/">Home</Link>
            <Link href="/">O que fazemos</Link>
            <Link href="/">Cases</Link>
          </nav>

          <div className="action">
              <button  style={{
                    backgroundColor: "#0DC74F" 
              }}
              className="text-white px-4 py-2 rounded">Fale Conosco</button>
          </div>
    </header>

     
  );
};

export default NavBar;