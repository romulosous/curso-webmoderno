function classificarTriangulo(lado1, lado2, lado3){
    if(isTriangle(lado1, lado2, lado3)){
        if(lado1 === lado2 && lado1 === lado3){
            return `Equilátero`;
        }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            return `Isósceles`;
        }else{
            return `Escaleno`;
        }
    }
    
}

function isTriangle(param1, param2, param3){
    return param1 + param2 >= param3 && param1 + param3 >= param2 && param2 + param3 >= param1;
}

console.log(classificarTriangulo(8,10,9));