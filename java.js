

function convertir() {
    var DATO1 = parseFloat(document.getElementById('A1').value);
    var DATO2 = parseFloat(document.getElementById('A2').value);
    var DATO3 = parseFloat(document.getElementById('A3').value);
    var DATO4 = parseFloat(document.getElementById('A4').value);
    var moneda = document.getElementById('SelectorDivisa').value;
    var potencia = 0;
    var tiempo = 0;
    var ENERGIA = 0;
    var resultado = 0;

    switch (moneda) {
        case 'POTENCIA':
            resultado = (1 / 2) * DATO1 * DATO2 * Math.pow(DATO3, 3) * (1 / 1000);
            document.getElementById('resultado').innerText = `El resultado es: ${resultado.toFixed(2)} KILOWATS`;
            break;
        case 'ENERGIA':
            potencia = (1 / 2) * DATO1 * DATO2 * Math.pow(DATO3, 3) * (1 / 1000);
            resultado = potencia * DATO4;
            document.getElementById('resultado').innerText = `El resultado es: ${resultado.toFixed(2)} KILOWATS`;
            break;
    }
}

function tiempo2() {
    var DATO6 = parseFloat(document.getElementById('A6').value);
    var potencia = (1 / 2) * parseFloat(document.getElementById('A1').value) * parseFloat(document.getElementById('A2').value) * Math.pow(parseFloat(document.getElementById('A3').value), 3) * (1 / 1000);
    var tiempo2 =DATO6 / potencia ;
    document.getElementById('tiempo2').innerText = `El resultado es: ${tiempo2.toFixed(2)} HORAS`;
}

function calculoarea() {
    var DATO5 = parseFloat(document.getElementById('A5').value);
    var area = Math.pow(DATO5, 2) * Math.PI;
    document.getElementById('area').innerText = `El resultado es: ${area.toFixed(2)} m²`;
}
