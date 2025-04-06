import { FaInstagram, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-violetaEscuro px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo e Contato */}
        <div className="flex flex-col gap-2">
            <Image src="/Images/agência.svg" alt="Logotipo" width={150} height={50} priority/>
            <h1 className="text-sm text-gray-300">928847292832</h1>
            <p className="text-sm text-gray-300">camiegesalvador@gmail.com</p>
        </div>

        {/* Menu */}
        <div>
          <h1 className="text-lg font-semibold mb-2 text-green-800">Menu</h1>
          <ul className="space-y-1 text-sm text-gray-400">
             <li><a href="#" className="hover:text-green-400">Quem somos</a></li>
             <li><a href="#" className="hover:text-green-400">Cases</a></li>
          </ul>
        </div>

        {/* Conteúdo */}
        <div>
          <h1 className="text-lg font-semibold mb-2 text-green-800">Conteúdo</h1>
          <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400">E-books</a></li>
              <li><a href="#" className="hover:text-green-400">Fórmulas Prontas</a></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h1 className="text-lg font-semibold mb-2 text-green-800">Social</h1>
          <div className="flex gap-4 mt-2 text-gray-300">
              <a href="#"><FaInstagram size={24} className="hover:text-pink-500" /></a>
              <a href="#"><FaFacebook size={24} className="hover:text-blue-500" /></a>
              <a href="#"><FaGithub size={24} className="hover:text-white" /></a>
              <a href="#"><FaYoutube size={24} className="hover:text-red-500" /></a>
          </div>
        </div>
        
      </div>

      {/* Linha final */}
      <div className="border-t border-zinc-700 mt-10 pt-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Salvador Camiege. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;