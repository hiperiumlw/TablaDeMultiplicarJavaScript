let valor = prompt('Introduce el numero del que desea ver la tabla de multiplicar!');
let resultado=[];
for (let i=0;i<=10;i++){
    let resultadoAux = valor * i;
    resultado.push(valor+'*'+i+' = '+resultadoAux);
}

let textoResultado = "";
let textarea = document.createElement("TEXTAREA");

for (let i=0;i<resultado.length;i++){
        textoResultado+=(resultado[i])+"\n";
}


let texto = document.createTextNode(textoResultado);
textarea.appendChild(texto);
textarea.style.height = '10em';
document.body.appendChild(textarea);

