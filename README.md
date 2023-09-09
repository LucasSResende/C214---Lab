<h1 align="center">Laboratório de C214</h1>

> Repositório das aulas semanais de Engenharia de Software, de acordo com as atividades realizadas e entregues.

<img src = "https://i0.wp.com/jornal.usp.br/wp-content/uploads/2020/04/20200427_00_computacao_programacao_notebook1.jpg?fit=800%2C420&ssl=1" />

### Relatórios:

> Relatórios entregues em aula de Laboratório -

<h2>
[x] Aula 1 Revisão POO;
</h2>

<h2>[x] Aula 2 Revisão POO(continuação com CRUD);</h2>

<img src = "https://www.ofuxico.com.br/wp-content/uploads/2021/10/painel-com-posteres-filmes-halloween-paramount.jpg" />

A ideia do código de catálogo de filmes é de adicionar e marcar os filmes assistidos, com suas informações básicas e notas após o término deles. Assumindo um CRUD básico, temos o backend rodando em JavaScript, com algumas funções básicas e interatividade com o usuário. Assim, é possível alterar a lista a qualquer instante em que o usuário necessitar.

<h2>[x] Aula 3 Introdução ao Svelte;</h2>

O intuito do aplicativo desenvolvido é fazer o cálculo do índice de massa corpórea da pessoa e mostrar a ela tanto o resultado numérico quanto sua situação em relação ao peso, conforme a tabela abaixo:

<img src = "https://1.bp.blogspot.com/_vTV-kg2ll28/TAheWXZhwuI/AAAAAAAAAh4/5_gkDIlexpo/s320/imc_tabela.gif" />

O código foi desenvolvido com HTML, CSS e o framework Svelte.

Ao clonar o repositório, com o comando abaixo:

```
git clone https://github.com/LucasSResende/C214-Lab.git
```

deve abrir o projeto na IDE desejada, e pelo terminal, utilizar o comando:

```
npm install
```

para instalar os pacotes do Node. Ao final, rodar o aplicativo web com o comando:

```
npm run dev
```

e entrar no link página indicada pela compilação do código, que pode ser visalizada após iniciada, como, por exemplo:

> svelte-app@1.0.0 start
> sirv public --no-clear --dev
> Your application is ready~! 🚀
>
> - Local: http://localhost:8080
> - Network: Add `--host` to expose
>
> ────────────────── LOGS ──────────────────
>
> [14:43:34] 200 ─ 5.18ms ─ /

> [14:43:34] 200 ─ 1.07ms ─ /global.css

> [14:43:34] 200 ─ 1.12ms ─ /build/bundle.css

> [14:43:34] 200 ─ 1.67ms ─ /build/bundle.js

<h2>[x] Aula 4 Gerenciamento de Dependências;</h2>
Continuando o aplicativo de cálculo de IMC, foi implementada uma função onde mostra a data e hora do cálculo realizado. Para isso foi necessário instalar uma nova dependência, a "dayjs", que faz manipulação de data e hora. Foi aumentado no código um botão para visualização da data e hora e mostrada no display final.

Instalação da dependência:

```
npm install dayjs
```

Depois de instalada, deve ser dado o comando:

```
npm install
```

novamente, e em seguida o comando:

```
npm run dev
```

para que as atualizações do código estejam prontas para funcionar.

Lembrando que ao abirr o arquivo package-lock.json, deve-se encontrar a nova dependência referente ao módulo dayjs, conforme mostrado abaixo:

> "packages": {

> "": {

> "name": "svelte-app",

> "version": "1.0.0",

> "dependencies": {

> "dayjs": "^1.11.9",

> "sirv-cli": "^2.0.0"

> },

<h2>[x] Aula 5 Testes unitários;</h2>
Continuando o aplicativo de cálculo de IMC, foram implementadas as funções:

> classificarIMC(imc): Classifica o IMC em categorias como "Peso normal", "Sobrepeso" e assim por diante.

> avaliarPaciente(peso, altura): Usa as duas funções acima para calcular o IMC e classificar o paciente.

Primeiramente, verifique a versão do node utilizado e altere com nvm caso necessário:

Para verificar versão do node:

```
node -v
```

caso não tenha a ferramenta de gerenciamento de versão do node, instale-o com o comando:

```
nvm install
```

e altere a versão caso necessário com o comando:

```
nvm use <numero_da_versão_requerido>
```

Instalação das ferramentas de teste:

```
npm install mocha chai
```

Depois de instaladas e com seus testes devidamente criados, deve ser dado o comando:

```
npm test
```

A saída dos testes deverão aparecer da forma abaixo. Caso algum deles ocorra uma falha, revise o código e analise a lógica utilizada para os testes, garantindo assim, que eles estejam condizentes com os parâmetros utilizados e resultados esperados:

```
> aula5@1.0.0 test
> mocha



  Testes para calcularIMC
    ✔ Deve calcular o IMC corretamente para valores válidos
    ✔ Deve retornar "NaN" se a altura for igual a zero

  Testes para classificarIMC
    ✔ Deve classificar corretamente como "Peso normal"
    ✔ Deve classificar corretamente como "Sobrepeso"
    ✔ Deve classificar corretamente como "Obesidade grau 2"

  Testes para avaliarPaciente
    ✔ Deve avaliar corretamente um paciente com peso e altura válidos
    ✔ Deve avaliar corretamente um paciente com altura igual a zero


  7 passing (8ms)

```

### Códigos:

> Todos os códigos estão disponíveis por tópicos de aulas.

[⬆ Voltar ao topo](#Laboratório-de-C214)<br>
