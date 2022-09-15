const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
  const desconto = (valorDaCompra * 10) / 100;
  const valorAPagar = valorDaCompra - desconto;
  console.log(
    `O valor a ser pago será de ${valorAPagar} reais, pois à vista tem 10% desconto.`
  );
} else {
  const valorDaParcela = valorDaCompra / numeroDeParcelas;
  console.log(
    `O valor poderá ser pago em até ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(
      2
    )} reais sem juros.`
  );
}
