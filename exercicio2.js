const valorInicialDaCompra = 100;
const numeroDeParcelas = 1;
const taxaDeJuros = 1 / 100;

if (numeroDeParcelas === 1) {
  // À vista sem juros
  const desconto = (valorInicialDaCompra * 10) / 100;
  const valorAPagar = valorInicialDaCompra - desconto;
  console.log(
    `O valor a ser pago será de ${valorAPagar} reais, pois à vista tem 10% de desconto.`
  );
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
  // Parcelado com juros
  const montante = valorInicialDaCompra * (1 + taxaDeJuros) ** numeroDeParcelas;
  const valorDaParcela = montante / numeroDeParcelas;
  console.log(
    `O valor será pago em ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(
      2
    )} reais, pois terá acréscimo de 1% de juros ao valor a partir de sete parcelas.`
  );
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
  // Parcelado sem juros
  console.log(
    `O valor será pago em ${numeroDeParcelas}X sem juros de ${(
      valorInicialDaCompra / numeroDeParcelas
    ).toFixed(2)} reais.`
  );
} else {
  console.log('Número de parcelas inválido.');
}
