import requests
import json

def get_champion_data():
    # URL da API do League of Legends para obter dados dos campeões
    url = "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/en_US/champion.json"

    # Fazendo solicitação à API
    response = requests.get(url)

    if response.status_code == 200:
        champion_data = response.json()["data"]
        return champion_data
    else:
        print("Falha ao obter dados dos campeões.")
        return None

def generate_typescript_code(champion_data):
    typescript_code = ""

    for champion_name, champion_info in champion_data.items():
        typescript_code += f"const champion{champion_name}: ChampionData = " + json.dumps(champion_info, indent=4) + ";\n\n"

    return typescript_code

def main():
    champion_data = get_champion_data()

    if champion_data:
        typescript_code = generate_typescript_code(champion_data)
        with open("champions.ts", "w") as file:
            file.write("import { ChampionData } from './types';\n\n")
            file.write(typescript_code)
        print("Código TypeScript gerado com sucesso.")
    else:
        print("Não foi possível gerar o código TypeScript.")

if __name__ == "__main__":
    main()
