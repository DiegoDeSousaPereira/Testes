    let nome = "Caneta ";
    let marca = "BIC";
    let quantidade = 10;
    let preco = 6.4;
    let imposto = 1.5;
    let porcentagem = -1;
    let lucro = 1;
    let precoFinal = preco + imposto;
    let lucroPorCaneta = precoFinal * lucro;

{
    console.log(nome + marca);
    console.log("Quantidade: " + quantidade);
    console.log("Preço de compra: " + preco);
    console.log("Imposto: " + imposto);
    console.log("Preço de compra + imposto: " + precoFinal);
    console.log("Preco de venda: " + precoFinal * (1 - porcentagem))
    console.log("Lucro total das 10 canetas vendidas: " + quantidade * lucroPorCaneta)
}