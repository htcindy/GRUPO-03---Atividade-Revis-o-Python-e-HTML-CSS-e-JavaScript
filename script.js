
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);

    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    return { imc: imc.toFixed(2), classificacao };
}

document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoDiv = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoDiv.textContent = "Por favor, insira valores válidos para peso e altura.";
        resultadoDiv.style.color = "red";
        return;
    }
    const resultado = calcularIMC(peso, altura);
    resultadoDiv.style.color = "#222";
    resultadoDiv.textContent = `Seu IMC é ${resultado.imc} — Classificação: ${resultado.classificacao}`;
});