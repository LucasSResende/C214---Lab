const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Filme {
  constructor(titulo, ano, genero, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.duracao = duracao;
    this.assistido = false;
    this.avaliacao = null;
  }

  exibirDetalhes() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Gênero: ${this.genero}`);
    console.log(`Duração: ${this.duracao}`);
    console.log(`Assistido: ${this.assistido ? "Sim" : "Não"}`);
    console.log(
      `Avaliação: ${this.avaliacao !== null ? this.avaliacao : "Não avaliado"}`
    );
  }

  marcarAssistido() {
    this.assistido = true;
  }

  avaliarFilme(nota) {
    this.avaliacao = nota;
  }
}

const listaDeFilmes = [];

function adicionarFilme() {
  rl.question("Informe o título do filme: ", (titulo) => {
    rl.question("Informe o ano do filme: ", (ano) => {
      rl.question("Informe o gênero do filme: ", (genero) => {
        rl.question("Informe a duração do filme: ", (duracao) => {
          const novoFilme = new Filme(titulo, parseInt(ano), genero, duracao);
          listaDeFilmes.push(novoFilme);
          console.log(`O filme "${titulo}" foi adicionado à lista.`);
          exibirMenu();
        });
      });
    });
  });
}

function marcarComoAssistido() {
  listarFilmes();
  rl.question(
    "Informe o índice do filme que deseja marcar como assistido: ",
    (indice) => {
      indice = parseInt(indice);
      if (indice >= 0 && indice < listaDeFilmes.length) {
        listaDeFilmes[indice].marcarAssistido();
        console.log(
          `O filme "${listaDeFilmes[indice].titulo}" foi marcado como assistido.`
        );
      } else {
        console.log("Índice inválido.");
      }
      exibirMenu();
    }
  );
}

function avaliarFilme() {
  listarFilmes();
  rl.question("Informe o índice do filme que deseja avaliar: ", (indice) => {
    indice = parseInt(indice);
    if (indice >= 0 && indice < listaDeFilmes.length) {
      rl.question(
        `Informe a nota de 0 a 10 para o filme "${listaDeFilmes[indice].titulo}": `,
        (nota) => {
          nota = parseFloat(nota);
          if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            listaDeFilmes[indice].avaliarFilme(nota);
            console.log(
              `Você avaliou o filme "${listaDeFilmes[indice].titulo}" com a nota ${nota}.`
            );
          } else {
            console.log("Nota inválida. A nota deve estar entre 0 e 10.");
          }
          exibirMenu();
        }
      );
    } else {
      console.log("Índice inválido.");
      exibirMenu();
    }
  });
}

function listarFilmes() {
  console.log("Lista de filmes:");
  listaDeFilmes.forEach((filme, indice) => {
    console.log(
      `${indice}: ${filme.titulo} ${filme.assistido ? "(Assistido)" : ""}`
    );
  });
}

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1. Adicionar um novo filme");
  console.log("2. Marcar um filme como assistido");
  console.log("3. Avaliar um filme");
  console.log("4. Exibir a lista de filmes");
  console.log("5. Sair do programa");

  rl.question("Digite o número da opção desejada: ", (escolha) => {
    escolha = parseInt(escolha);
    switch (escolha) {
      case 1:
        adicionarFilme();
        break;
      case 2:
        marcarComoAssistido();
        break;
      case 3:
        avaliarFilme();
        break;
      case 4:
        listarFilmes();
        exibirMenu();
        break;
      case 5:
        console.log("Programa encerrado.");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenu();
    }
  });
}

exibirMenu();
