const Button = ({ title, kind }) => {
    const gerenciador = () => {  {/* IAqui temos a funcão para estilizar o unico botão apensar de usar a mesma varavel ou botão, usamos o Kind e criamos uma funçâo ou variavel para acontecer como mostra abaixo*/}
        return kind === "secundary" 
            ? { backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid #000000" }  
            : { backgroundColor: "#0DC74F", color: "#FFFFFF" };
    };
    return (
        <div className="action">
            <button  
                style={gerenciador()} 
                className="px-4 py-2 rounded"
            >
                {title}
            </button>
        </div> 
    );
};
export default Button;