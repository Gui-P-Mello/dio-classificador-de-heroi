let heroi = [["Gui", 3000]]
let nivel

for(let i = 0; i < heroi.length; i++){
    let xp = heroi [0][1]

    switch(true){
        case xp < 1000:
            nivel = "Ferro"
            break
        case xp > 1000 && xp <= 2000:
            nivel = "Bronze"
            break
        case xp > 2000 && xp <= 5000:
            nivel = "Prata"
            break
        case xp > 5000 && xp < 7000:
            nivel = "Ouro"
            break
        case xp > 7000 && xp <= 8000:
            nivel = "Platina"
            break
        case xp > 8000 && xp <= 9000:
            nivel = "Ascendente"
            break
        case xp > 9000 && xp <= 10000:
            nivel = "Imortal"
            break
        case xp > 10000:
            nivel = "Radiante"
            break
        default:
            console.log("Erro de classificação de nível.")
    }
}
nome = heroi[0][0]

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)