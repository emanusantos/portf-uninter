function main() {
  // seleciona o formulário via DOM
  const form = document.getElementById("contact-form");

  // escuta o evento de submit do formulário
  form.addEventListener("submit", (event) => {
    // impede que a página reinicie
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    // reinicializa o formulário
    form.reset();
  });
}

// inicialização da função principal do script
main();
