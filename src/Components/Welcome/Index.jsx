import Button from "../Button";

const Welcome = () => {
    return (
        <div className="flex justify-between items-center gap-40 px-20 bg-[url('/Images/Fundo.svg')] bg-cover bg-center bg-no-repeat h-screen">
            {/* Texto ocupa 50% */}
            <div className="w-1/2 flex flex-col gap-4">
                <h1 className="text-[50px] font-bold text-white">
                    Melhor Agência de<br/>Marketing Do Bairro
                </h1>
                <p className="text-[20px] font-light opacity-100 text-white">
                    Somos uma agência de performance digital, aceleramos<br/>vendas e aquisição de leads para grandes marcas.
                </p>
                
                <Button title="Aumentar Vendas" kind="secundary" className="w-[200px]" />
            </div>

            {/* Imagem ocupa 50% */}
            <div className="w-1/2 flex justify-center">
                <img className="w-full max-w-[900px] object-cover" src="/Images/BannerWelcome.svg" alt="bannerWelcome" />
            </div>
        </div>
    );
};

export default Welcome;