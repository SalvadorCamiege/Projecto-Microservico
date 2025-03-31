import Button from "../Button";

const Welcome = () => {
    return (
        <div>
            <div>
                <h1 
                    style={{
                        fontSize: "71px",
                        fontWeight: "bold",
                       
                    }}
                >
                    Melhor Agência de Marketing Do Bairro
                </h1>
                <p 
                    style={{
                        fontSize: "30px",
                        fontWeight: "300",
                        opacity: "1"
                    }}
                >
                    Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.
                </p>

                <div className="action">
                    <Button title="Aumentar Vendas" kind="secundary"/> {/* Importamos o botão,ou seja criamos uma pasta e import, já o kint vem do botão para modificar a cor ou estolizar o segundo botão */}
                </div>
            </div>
        </div>
    );
};

export default Welcome;