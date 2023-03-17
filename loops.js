console.log("Trabalhando com condicionais")
let idadeComprador = 19;
let contador = 0 ;

const listaDeDestino = new Array(
    'Goiânia', 
    'Aparecida de Goiânia',
    'Rio Verde'
)

while(contador<3){
    console.log(listaDeDestino[contador])
    if(idadeComprador >= 18){
        // listaDeDestino.splice(1,1)
        console.log("Comprador é maior de Idade !!!")    
        console.table(listaDeDestino);
    }else{
        console.log("Comprador não é maior de Idade !!!")
    }
    contador++
}


