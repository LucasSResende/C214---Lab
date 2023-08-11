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
  }

  marcarAssistido() {
    this.assistido = true;
  }

  avaliarFilme(nota) {
    this.avaliacao = nota;
  }
}

// Criando instâncias da classe Filme
const filme1 = new Filme("Pulp Fiction", 1994, "Crime", "2h34min");
const filme2 = new Filme("Interestelar", 2014, "Ficção Científica", "2h49min");
const filme3 = new Filme("O Poderoso Chefão", 1972, "Crime", "2h55min");
const filme4 = new Filme(
  "O Senhor dos Anéis: A Sociedade do Anel",
  2001,
  "Aventura",
  "3h30min"
);
const filme5 = new Filme("Clube da Luta", 1999, "Drama", "2h19min");

// Marcando filmes como assistidos e avaliando
filme1.marcarAssistido();
filme1.avaliarFilme(9);

filme2.marcarAssistido();
filme2.avaliarFilme(7);

filme3.marcarAssistido();
filme3.avaliarFilme(10);

filme4.marcarAssistido();
filme4.avaliarFilme(10);

filme5.marcarAssistido();
filme5.avaliarFilme(8);

// Exibindo informações dos filmes
console.log("Filmes assistidos e suas avaliações:");
console.log(`Filme: ${filme1.titulo}\n Nota: ${filme1.avaliacao}`);
console.log(`Filme: ${filme2.titulo}\n Nota: ${filme2.avaliacao}`);
console.log(`Filme: ${filme3.titulo}\n Nota: ${filme3.avaliacao}`);
console.log(`Filme: ${filme4.titulo}\n Nota: ${filme4.avaliacao}`);
console.log(`Filme: ${filme5.titulo}\n Nota: ${filme5.avaliacao}`);
