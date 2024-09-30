function calcularSensacaoTermica(temperaturaAr, velocidadeVento) {
  const sensacaoTermica =
    13.12 +
    0.6215 * temperaturaAr -
    11.37 * Math.pow(velocidadeVento, 0.16) +
    0.3965 * temperaturaAr * Math.pow(velocidadeVento, 0.16);

  return sensacaoTermica.toFixed(2);
}

function calcular() {
  const temperatura = parseFloat(document.getElementById("temperatura").value);
  const vento = parseFloat(document.getElementById("vento").value);

  if (isNaN(temperatura) || isNaN(vento)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  const resultado = calcularSensacaoTermica(temperatura, vento);
  document.getElementById("resultado").textContent = `A sensação térmica é de ${resultado}°C`;
}
