const { calcularIMC, classificarIMC, avaliarPaciente } = require("../src/imc"); // Certifique-se de substituir pelo caminho correto do seu arquivo

const chai = require("chai");
const assert = chai.assert;

describe("Testes para calcularIMC", function () {
  it("Deve calcular o IMC corretamente para valores válidos", function () {
    assert.equal(calcularIMC(70, 175), "22.86");
  });

  it('Deve retornar "NaN" se a altura for igual a zero', function () {
    assert.equal(calcularIMC(70, 0), "NaN");
  });
});

describe("Testes para classificarIMC", function () {
  it('Deve classificar corretamente como "Peso normal"', function () {
    assert.equal(classificarIMC(22), "Peso normal");
  });

  it('Deve classificar corretamente como "Sobrepeso"', function () {
    assert.equal(classificarIMC(28), "Sobrepeso");
  });

  it('Deve classificar corretamente como "Obesidade grau 2"', function () {
    assert.equal(classificarIMC(37), "Obesidade grau 2");
  });
});

describe("Testes para avaliarPaciente", function () {
  it("Deve avaliar corretamente um paciente com peso e altura válidos", function () {
    const resultado = avaliarPaciente(70, 175);
    assert.equal(resultado.imc, "22.86");
    assert.equal(resultado.classificacao, "Peso normal");
  });

  it("Deve avaliar corretamente um paciente com altura igual a zero", function () {
    const resultado = avaliarPaciente(70, 0);
    assert.equal(resultado.imc, "NaN");
    assert.equal(resultado.classificacao, "Desconhecido");
  });
});
