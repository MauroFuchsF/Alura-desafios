var nomeUsuario = "Fulano";
var valorEmBitcoin = 3;
var cotacaoEmBitcoin = 180967.14;
var valorEmReal = (valorEmBitcoin * cotacaoEmBitcoin).toFixed(2);
// LEMBRAR valorEmReal = valorEmReal.toFixed(2);
alert('Olá ' + nomeUsuario + '! O valor em reais é de R$ '+ valorEmReal);