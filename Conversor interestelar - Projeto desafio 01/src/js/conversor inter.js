var nomeUsuario = 'Fulanus';
var valorEmAnosLuz = 400;
var anosLuzEmKm = 9460800000000;
var anosLuzEmMetros = 9460800000000000;
var valorEmMetros = (valorEmAnosLuz * anosLuzEmKm).toFixed(2);

var mensagemCompleta = 'Olá ' + nomeUsuario + '! Sabia que ' + valorEmAnosLuz + ' anos-luz correspondem a ' + anosLuzEmKm + ' Km, o que corresponde a ' + valorEmMetros + ' metros';

alert(mensagemCompleta);
