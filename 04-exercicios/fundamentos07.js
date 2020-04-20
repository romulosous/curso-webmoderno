function bhaskara(a = 0, b = 0, c = 0){
    let resultados = [];
    let delta = b ** 2 - 4 * a * c;

    if (delta < 0){
        return "Delta é negativo";
    }
    let x1 = (-b + Math.sqrt(delta))/(a*2);
    let x2 = (-b - Math.sqrt(delta))/(a*2);
    resultados.push(x1);
    resultados.push(x2);

    return resultados;
    

}


console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
