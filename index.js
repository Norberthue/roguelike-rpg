let player_stats = {
    vitality: 23,
    dexterity: 5,
    intelligence: 6,
    luck:10,
    strength:8,
    health: 10, 
    damage: 10,
    armor: 25,
}

let enemy_stats = {
    vitality: 20,
    dexterity: 4,
    intelligence: 2,
    luck:20,
    strength:10,
    health: 10,
    damage: 10,
    armor: 50,
}

//player stats decleration
const p_vit = document.getElementById('p-vit')
p_vit.innerHTML= player_stats.vitality

const p_dex = document.getElementById('p-dex')
p_dex.innerHTML= player_stats.dexterity

const p_int = document.getElementById('p-int')
p_int.innerHTML= player_stats.intelligence

const p_lck = document.getElementById('p-lck')
p_lck.innerHTML= player_stats.luck

const p_str = document.getElementById('p-str')
p_str.innerHTML= player_stats.strength

const p_dmg = document.getElementById('p-damage')
p_dmg.innerHTML = player_stats.damage

const p_armor = document.getElementById('p-armor')
p_armor.innerHTML = player_stats.armor

//enemy stats decleration
const e_vit = document.getElementById('e-vit')
e_vit.innerHTML= enemy_stats.vitality

const e_dex = document.getElementById('e-dex')
e_dex.innerHTML= enemy_stats.dexterity

const e_int = document.getElementById('e-int')
e_int.innerHTML= enemy_stats.intelligence

const e_lck = document.getElementById('e-lck')
e_lck.innerHTML= enemy_stats.luck

const e_str = document.getElementById('e-str')
e_str.innerHTML= enemy_stats.strength

const e_dmg = document.getElementById('e-damage')
e_dmg.innerHTML= enemy_stats.damage

const e_armor = document.getElementById('e-armor')
e_armor.innerHTML= enemy_stats.armor


//player health
player_stats.health = player_stats.health * player_stats.vitality 
//player health bar
const player_health_element = document.getElementById('p-health')
player_health_element.setAttribute('max', player_stats.health)
player_health_element.value = player_stats.health
//player health bar text
let player_health_text_element = document.getElementById('p-health-text')
player_health_text_element.innerHTML = player_stats.health


//enemy health
enemy_stats.health = enemy_stats.health* enemy_stats.vitality
//enemy health bar
const enemmy_health_element = document.getElementById('e-health')
enemmy_health_element.setAttribute('max', enemy_stats.health)
enemmy_health_element.value = enemy_stats.health
//enemy health bar text
const enemmy_health_text_element = document.getElementById('e-health-text')
enemmy_health_text_element.innerHTML = enemy_stats.health


//battle log 
const battle_log_text_element = document.getElementById('battle-log-text')


let player_attacks = true

const battle = () => {
    setInterval(() => {
        if (player_attacks ) {
            let damage = (player_stats.damage - ((player_stats.damage / 100) * enemy_stats.armor))
            enemy_stats.health -= damage
            enemmy_health_element.value = enemy_stats.health
            enemmy_health_text_element.innerHTML = enemy_stats.health
            player_attacks = false
            const newDiv = document.createElement('div')
            newDiv.innerHTML = 'Player does ' + damage + ' damage to Enemy'
            battle_log_text_element.appendChild(newDiv)
        } else {
            let damage = (player_stats.damage - ((player_stats.damage / 100) * enemy_stats.armor))
            player_stats.health -= damage
            player_health_text_element.innerHTML = player_stats.health
            player_health_element.value = player_stats.health
            player_attacks = true 
            const newDiv = document.createElement('div')
            newDiv.innerHTML = 'Enemy does ' + damage + ' damage to Player'
            battle_log_text_element.appendChild(newDiv)
        }
    },1000)
}

//get start battle button 
const start_battle =  document.getElementById('start-battle-btt-js')
start_battle.addEventListener('click', battle)
   




