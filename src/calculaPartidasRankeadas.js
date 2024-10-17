function calculaRankeadas(saldoVitorias){
    
    if(saldoVitorias <= 10){
        return saldoVitorias, "Ferro"
    }
    else if(11 <= saldoVitorias && saldoVitorias <= 20){
        return saldoVitorias,"Bronze"
    } 
    else if(21 <= saldoVitorias && saldoVitorias <= 50){
        return saldoVitorias,"Prata"
    }
    else if(51 <=saldoVitorias && saldoVitorias <= 80){
        return saldoVitorias,"Ouro"
    }
    else if(81 <= saldoVitorias && saldoVitorias <= 90){
        return saldoVitorias,"Platina"
    }
    else if(91 <= saldoVitorias && saldoVitorias <= 100){
        return saldoVitorias,"Imortal"
    }
    else {
        return saldoVitorias,"Radiante"
    }
}

const vitorias = 30
const derrotas = 5
let saldoVitorias = vitorias - derrotas
const nivel = calculaRankeadas(saldoVitorias)

console.log(" O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)