heroina = "ChryslleyKelly"
xp = 10001
nivel = ""

if xp < 1000:
    nivel = "Ferro"
elif 1000 <= xp <= 2000:
    nivel = "Bronze"
elif 2001 <= xp <= 5000:
    nivel = "Prata"
elif 5001 <= xp <= 7000:
    nivel = "Ouro"
elif 7001 <= xp <= 8000:
    nivel = "Platina"
elif 8001 <= xp <= 9000:
    nivel = "Ascendente"
elif 9001 <= xp <= 10000:
    nivel = "Imortal"
else:
    nivel = "Radiante"

print(f"A Heroina {heroina} está no nível {nivel} com {xp} de xp.")
