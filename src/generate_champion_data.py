import requests
import json

def get_champion_data():
    url = "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/en_US/champion.json"

    response = requests.get(url)

    if response.status_code == 200:
        champion_data = response.json()["data"]
        return champion_data
    else:
        print("Falha ao obter dados dos campeões.")
        return None

def generate_champion_data(champion_name, champion_info):
    # Escapando as aspas duplas na descrição do campeão
    blurb = champion_info['blurb'].replace('"', '\\"')

    champion_code = f"""
export const champion{champion_name.capitalize()}: ChampionData = {{
    version: "{champion_info['version']}",
    id: "{champion_info['id']}",
    key: "{champion_info['key']}",
    name: "{champion_info['name']}",
    title: "{champion_info['title']}",
    blurb: "{blurb}",
    info: {{
        attack: {champion_info['info']['attack']},
        defense: {champion_info['info']['defense']},
        magic: {champion_info['info']['magic']},
        difficulty: {champion_info['info']['difficulty']}
    }},
    image: {{
        full: "{champion_info['image']['full']}",
        sprite: "{champion_info['image']['sprite']}",
        group: "{champion_info['image']['group']}",
        x: {champion_info['image']['x']},
        y: {champion_info['image']['y']},
        w: {champion_info['image']['w']},
        h: {champion_info['image']['h']}
    }},
    tags: {json.dumps(champion_info['tags'])},
    partype: "{champion_info['partype']}",
    stats: {{
        hp: {champion_info['stats']['hp']},
        hpperlevel: {champion_info['stats']['hpperlevel']},
        mp: {champion_info['stats']['mp']},
        mpperlevel: {champion_info['stats']['mpperlevel']},
        movespeed: {champion_info['stats']['movespeed']},
        armor: {champion_info['stats']['armor']},
        armorperlevel: {champion_info['stats']['armorperlevel']},
        spellblock: {champion_info['stats']['spellblock']},
        spellblockperlevel: {champion_info['stats']['spellblockperlevel']},
        attackrange: {champion_info['stats']['attackrange']},
        hpregen: {champion_info['stats']['hpregen']},
        hpregenperlevel: {champion_info['stats']['hpregenperlevel']},
        mpregen: {champion_info['stats']['mpregen']},
        mpregenperlevel: {champion_info['stats']['mpregenperlevel']},
        crit: {champion_info['stats']['crit']},
        critperlevel: {champion_info['stats']['critperlevel']},
        attackdamage: {champion_info['stats']['attackdamage']},
        attackdamageperlevel: {champion_info['stats']['attackdamageperlevel']},
        attackspeedperlevel: {champion_info['stats']['attackspeedperlevel']},
        attackspeed: {champion_info['stats']['attackspeed']}
    }}
}};
"""
    return champion_code

def main():
    champion_data = get_champion_data()
    
    if champion_data:
        with open("champions.ts", "w") as file:
            file.write("import { ChampionData } from './types';\n\n")
            for champion_name, champion_info in champion_data.items():
                champion_code = generate_champion_data(champion_name, champion_info)
                file.write(champion_code)
        print("Código TypeScript gerado com sucesso.")
    else:
        print("Não foi possível gerar o código TypeScript.")

if __name__ == "__main__":
    main()