console.log("Trabalhando com listas")
const listaDeDestino = new Array(
    'Goiânia', 
    'Aparecida de Goiânia',
    'Rio Verde'
)

listaDeDestino.push('Aparecida de Goiânia')
listaDeDestino.splice(0,1)
console.table(listaDeDestino);