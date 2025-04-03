const Factures = () => {
     return (
       <div className="flex flex-col items-center text-center p-8">
         <h1 className="text-3xl font-bold mb-4 text-white">Neste Bairro Não há agência <br/> melhor. Garantimos</h1>
         <p className="max-w-2xl mb-8 text-gray-600 text-white">
           A nossa agência é especializada em marketing digital, focada em impulsionar resultados através de estratégias de performance. 
           Aceleramos vendas e geramos leads qualificados para marcas que buscam crescer no ambiente online.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
           {["Digital Strategy", "Estratégia Digital", "Social Média", "Marketing Digital"].map((title, index) => (
             <div 
               key={index} 
               className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 active:scale-95"
             >
               <img className="w-24 h-24 mb-4" src="/Images/factures.svg" alt="bannerWelcome" />
               <h2 className="text-xl font-semibold mb-2">{title}</h2>
               <p className="text-gray-600">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis assumenda similique quam, 
                 officia illum accusamus fugiat quasi sunt veniam temporibus.
               </p>
             </div>
           ))}
         </div>
       </div>
     );
   };
   
   export default Factures;   