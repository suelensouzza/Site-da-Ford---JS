class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(event, form) {
    event.preventDefault();

    const nome = form.elements.namedItem("nome").value;
    const sobrenome = form.elements.namedItem("sobrenome").value;
    const email = form.elements.namedItem("email").value;
    const cpf = form.elements.namedItem("cpf").value;
    const telefone = form.elements.namedItem("telefone").value;
    const tipoContato = form.elements.namedItem("contato").value;

    const dadosContato = new Contato(nome, sobrenome, email, cpf, telefone, tipoContato);

    console.log("Dados do formulário:", dadosContato);

    Enviar(dadosContato);
    return false;
}

function Enviar(data) {
    if (data.nome !== "") {
        alert(`Obrigado sr(a) ${data.nome}, os seus dados foram encaminhados com sucesso.`);
    } else {
        alert("Por favor, preencha o campo Nome.");
    }
}
