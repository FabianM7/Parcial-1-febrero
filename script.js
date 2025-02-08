function buscarPrimeraOferta(ofertas, salarioMinimo) {
    let izquierda = 0;
    let derecha = ofertas.length - 1;
    let resultado = -1;
    
    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);
        
        if (ofertas[medio] >= salarioMinimo) {
            resultado = medio;
            derecha = medio - 1;
        } else {
            izquierda = medio + 1;
        }
    }
    
    return resultado;
}

const ofertas = [20000, 25000, 30000, 35000, 40000];
console.log(buscarPrimeraOferta(ofertas, 30000)); // Output: 2
console.log(buscarPrimeraOferta(ofertas, 27000)); // Output: 2
console.log(buscarPrimeraOferta(ofertas, 45000)); // Output: -1
