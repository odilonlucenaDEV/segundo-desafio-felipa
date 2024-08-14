//Calculadora de partirdas ranqueadas
let vitorias = 10;
let derrotas = 1;

function partidasRankeadas(vitorias, derrotas)
{
  const resultados = vitorias - derrotas;
  let nivel;

    if (vitorias <= 10) {
        nivel = 'ferro' 
      }
       
      else if (vitorias >= 10 && vitorias <= 20){ 
        nivel = 'bronze' 
      }
        
      else if (21 <= vitorias && vitorias <= 50){
        nivel = 'prata'
      }
        
      else if (51 <= vitorias && vitorias <= 80){
        nivel = 'ouro'
      }
        
      else if (81 <= vitorias && vitorias <= 90){
        nivel = 'diamante'
      }
        
      else if (91 <= vitorias && vitorias <= 100){
        nivel = 'lendario'
      }
        
      else if (vitorias >= 101){
        nivel = 'imortal'
      }

      return {
        saldoVitorias : resultados,
        nivel: nivel
      }
}

const resultados = partidasRankeadas(vitorias, derrotas);


//Saída

console.log(" O herói tem saldo de " + resultados.saldoVitorias + " está no nivel de " + resultados.nivel);