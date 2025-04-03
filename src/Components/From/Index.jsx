import Button from "../Button";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio
    const form = e.target;

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert("Formulário enviado com sucesso!");
    // Aqui você pode adicionar a lógica para enviar os dados do formulário.
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-20 p-30 gap-50 bg-[url('/Images/Fundo.svg')] bg-cover bg-center bg-no-repeat h-screen">
      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4 text-green-500">Entra em Contacto</h1>
        <h2 className="text-3xl text-white mb-4">Aumenta o seu resultado <br /> de vendas e Performance</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis earum, sunt necessitatibus cumque ut explicabo vel repudiandae aspernatur minus, corporis et quis, doloribus voluptatum quasi sapiente. Eum atque sit deserunt?
        </p>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center mb-4">Fale com a Especialista</h1>
        <input
          type="text"
          placeholder="Nome Completo"
          required
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="email"
          placeholder="Email Profissional"
          required
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Celular"
          pattern="^\+?[1-9]\d{1,14}$"
          required
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Site"
          required
          className="p-2 border rounded-lg w-full"
        />

        {/* Select para orçamento de mídia com opções LinkedIn e Facebook */}
        <select
          required
          className="p-2 border rounded-lg w-full"
        >
          <option value="" disabled selected>
            Escolha a plataforma de mídia
          </option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
        </select>

        <Button title="Enviar" kind="Primary" className="w-full" />
      </form>
    </div>
  );
};

export default Contacto;
