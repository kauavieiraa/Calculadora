function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('Resultado').innerHTML;
    
    document.getElementById('Resultado').innerHTML = resultado ? eval(resultado) : "Insira números";
}