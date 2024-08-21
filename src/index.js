let heroina = "ChryslleyKelly";
let xp = 10.001;

if (xp < 1.000) {
    xp = "Ferro";
} else if (xp >= 1.000 && xp <= 2.000) {
    xp = "Bronze";
} else if (xp >= 2.001 && xp <= 5.000) {
    xp = "Prata";
} else if (xp >= 5.001 && xp <= 7.000) {
    xp = "Ouro";
} else if (xp >= 7.001 && xp <= 8.000) {
    xp = "Platina";
} else if (xp >= 8.001 && xp <= 9.000) {
    xp = "Ascendente";
} else if (xp >= 9.001 && xp <= 10.000) {
    xp = "Imortal";
} else if (xp >= 10.001) {
    xp = "Radiante";
}

console.log("A Heroína", heroina, "está no nível", xp);

