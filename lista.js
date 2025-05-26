function adicionarContato() {
    console.log("Botao Clicado");
    const inputNome = document.getElementById("input_nome");
    const inputNum1 = document.getElementById("input_num1");
    const inputNum2 = document.getElementById("input_num2");

    if (/^\d{10,11}$/.test(inputNum1) && /^\d{10,11}$/.test(inputnum2)) {
        console.log("Ambos os números são válidos");
      } else {
        console.log("Um ou ambos os números são inválidos");
        alert("Digite numeros válidos!")
      }

    const novoContato = {
        nome: inputNome.value,
        num1: inputNum1.value,
        num2: inputNum2.value,
    };
    console.log("Novo contato")

    const novaLinha = document.createElement("tr");
    const colunaNome = document.createElement("td");
    const colunaNum1 = document.createElement("td");
    const colunaNum2 = document.createElement("td");

    colunaNome.innerText = novoContato.nome;
    colunaNum1.innerText = novoContato.num1;
    colunaNum2.innerText = novoContato.num2;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaNum1);
    novaLinha.appendChild(colunaNum2);

    const tabelaContatos = document.getElementById("tabela_contatos")
    tabelaContatos.appendChild(novaLinha);

    const contatosSalvos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatosSalvos.push(novoContato);
    localStorage.setItem("contatos", JSON.stringify(contatosSalvos));
    const listaContatos = JSON.parse(localStorage.getItem("tabelaContatos"));
}

function carregarContatosSalvos() {
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    const tabelaContatos = document.getElementById("tabela_contatos");
  
    contatos.forEach((contato) => {
      const novaLinha = document.createElement("tr");
      const colunaNome = document.createElement("td");
      const colunaNum1 = document.createElement("td");
      const colunaNum2 = document.createElement("td");
  
      colunaNome.innerText = contato.nome;
      colunaNum1.innerText = contato.num1;
      colunaNum2.innerText = contato.num2;
  
      novaLinha.appendChild(colunaNome);
      novaLinha.appendChild(colunaNum1);
      novaLinha.appendChild(colunaNum2);
  
      tabelaContatos.appendChild(novaLinha);
    });
  }

function configurarEventos() {
    console.log("Página carregada");
    const botaoContato = document.getElementById("adicionar_contato");
    botaoContato.addEventListener("click", adicionarContato);
    carregarContatosSalvos();
}

window.addEventListener("load", configurarEventos);