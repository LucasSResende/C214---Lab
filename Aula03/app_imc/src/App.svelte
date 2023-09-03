<script>
  let peso = 0;
  let altura = 0;
  let imc = 0;
  let classificacao = '';


  import dayjs from 'dayjs';
  let dataHoraAtual = '';
  const exibirDataHoraAtual = () => {
    dataHoraAtual = dayjs().format('YYYY-MM-DD HH:mm:ss');
  };




  const calcularIMC = () => {
    imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = 'Peso ideal, parabéns!';
    } else if (imc >= 25.0 && imc <= 29.9) {
      classificacao = 'Levemente acima do peso';
    } else if (imc >= 30.0 && imc <= 34.9) {
      classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = 'Obesidade grau II (severa)';
    } else {
      classificacao = 'Obesidade grau III (mórbida)';
    }
  };
</script>

<style>
  .bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: #333;
  }

  main {
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    color: #007BFF;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 18px;
    margin-top: 10px;
  }

  input {
    width: 10%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
  }

  button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
  }

  div {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 18px;
  }
</style>

<main class="bg">
  <h1>Calculadora de IMC</h1>
  <form>
    <label for="peso">Peso (kg):</label>
    <input type="number" id="peso" bind:value={peso} step="0.01" />

    <label for="altura">Altura (m):</label>
    <input type="number" id="altura" bind:value={altura} step="0.01" />

    <button type="button" on:click={calcularIMC}>Calcular</button>
  </form>

  {#if imc > 0}
    <div>
      <p>Seu IMC é: {imc}</p>
      <p>Classificação do peso: {classificacao}</p>
      <h1>Data e Hora do cálculo</h1>
      <button on:click={exibirDataHoraAtual}>Exibir</button>
    </div>
  {/if}
  {#if dataHoraAtual}
    <p>Data e hora atuais: {dataHoraAtual}</p>
  {/if}




</main>
