const Button = ({ title, kind, className }) => {
    const gerenciador = () => {
        return kind === "secundary" 
            ? { backgroundColor: "#FFFFFF", color: "#000000", border: "1px solid #000000" }  
            : { backgroundColor: "#0DC74F", color: "#FFFFFF" };
    };

    return (
        <button  
            style={gerenciador()} 
            className={`px-4 py-2 rounded ${className}`} // Adiciona className dinamicamente
        >
            {title}
        </button>
    );
};

export default Button;