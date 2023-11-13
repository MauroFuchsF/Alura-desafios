var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

var nomeUsuario = "Fulaninho";
var mensagemCompleta = "Olá " + nomeUsuario + ", este é o valor da sua cotação: R$ " + valorEmReal;

alert(mensagemCompleta);