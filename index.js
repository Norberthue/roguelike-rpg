let player_stats = {
    vitality: 23,
    dexterity: 5,
    intelligence: 6,
    luck:10,
    strength:8,
    health: 10, 
    damage: 330,
    armor: 25,
    level: 1,
    levelProgress: 0,
    points: 0,
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
    level: 1,
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

//player points
const p_points = document.getElementById('p-points')

//player health
player_stats.health = player_stats.health * player_stats.vitality 
//player health bar
const player_health_element = document.getElementById('p-health')
player_health_element.setAttribute('max', player_stats.health)
player_health_element.value = player_stats.health
//player health bar text
const player_health_text_element = document.getElementById('p-health-text')
player_health_text_element.innerHTML = player_stats.health + '/' + player_health_element.getAttribute('max')

//player level 
let max_level_progress = 10
let exp_gain = 11
const player_level_progress_element = document.getElementById('p-level')
player_level_progress_element.setAttribute('max', max_level_progress)
player_level_progress_element.value = player_stats.levelProgress

const player_level_text_element = document.getElementById('player-level-text')
player_level_text_element.innerHTML = player_stats.level

const player_level_text_progress_element = document.getElementById('player-level-progress-text')
player_level_text_progress_element.innerHTML = player_stats.levelProgress + '/' + player_level_progress_element.getAttribute('max')

//enemy health
enemy_stats.health = enemy_stats.health* enemy_stats.vitality
//enemy health bar
const enemmy_health_element = document.getElementById('e-health')
enemmy_health_element.setAttribute('max', enemy_stats.health)
enemmy_health_element.value = enemy_stats.health
//enemy health bar text
const enemmy_health_text_element = document.getElementById('e-health-text')
enemmy_health_text_element.innerHTML = enemy_stats.health + '/' + enemmy_health_element.getAttribute('max')


//battle variables
const battle_log_text_element = document.getElementById('battle-log-text')
const pick_new_enemy_element = document.getElementById('pick-enemy-container')
const battle_log_title_element = document.getElementsByClassName('battle-text')
console.log(battle_log_title_element)
let player_attacks = true


const update_player_level_stats_ui = () => {
    player_level_progress_element.setAttribute('max', max_level_progress)
    player_level_progress_element.value = player_stats.levelProgress
    player_level_text_element.innerHTML = player_stats.level
    player_level_text_progress_element.innerHTML = player_stats.levelProgress + '/' + player_level_progress_element.getAttribute('max')
    p_points.innerHTML = player_stats.points
}

const update_player_stats_ui = () => {
    p_vit.innerHTML= player_stats.vitality
    p_dex.innerHTML= player_stats.dexterity
    p_int.innerHTML= player_stats.intelligence
    p_lck.innerHTML= player_stats.luck
    p_str.innerHTML= player_stats.strength
    p_points.innerHTML = player_stats.points
    //update health 
    player_stats.health = 10 * player_stats.vitality 
    player_health_element.setAttribute('max', player_stats.health)
    player_health_text_element.innerHTML = player_stats.health + '/' + player_health_element.getAttribute('max')
    player_health_element.value = player_stats.health
}

const pickNewEnemy = () => {
    //clean up the board
    element = battle_log_text_element.getElementsByTagName('div')
    element_btn = battle_log_text_element.getElementsByTagName('button')
    element_btn[0].parentNode.removeChild(element_btn[0])
    for (i = element.length -1 ; i >= 0 ; i--) {
        element[i].parentNode.removeChild(element[i])
    }
    //reset player health
    update_player_stats_ui()
    //hide battle log
    battle_log_text_element.style.visibility = 'hidden'
    battle_log_text_element.style.position = 'absolute'
    //show enemies container
    pick_new_enemy_element.style.visibility = 'visible'
    pick_new_enemy_element.style.position = 'initial'
    //change the title
    battle_log_title_element[0].innerHTML= 'Pick your next enemy'

}



const battle_over = () => {
    if (player_stats.health > 0) {
        //battle log
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Player has won !\n Reward: ' +  exp_gain + 'exp'
        battle_log_text_element.appendChild(newDiv)
        
        //update player exeperience and level
        player_stats.levelProgress += exp_gain
        if ( player_stats.levelProgress >= max_level_progress) {
            player_stats.levelProgress = player_stats.levelProgress - max_level_progress
            max_level_progress += 5
            player_stats.level += 1   
            player_stats.points += 10
            const newDiv = document.createElement('div')
            newDiv.innerHTML = 'Players level has increase to level ' + player_stats.level + '.'
            battle_log_text_element.appendChild(newDiv)
            update_player_level_stats_ui()
        }

        //continue btt to next enemy
        const newBtn = document.createElement('button')
        newBtn.innerHTML = 'Countinue'
        newBtn.style.marginTop = '5px'
        newBtn.addEventListener('click', pickNewEnemy)
        battle_log_text_element.appendChild(newBtn)
    } else {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Enemy has won !' 
        battle_log_text_element.appendChild(newDiv)
    }
}

const battle = () => {
    const battle_interval = setInterval(() => {
        if (player_stats.health > 0 && enemy_stats.health > 0) {
            if (player_attacks ) {
                //math for fight
                let armor_block = Math.floor(((player_stats.damage / 100) * enemy_stats.armor))
                let damage = Math.floor((player_stats.damage - armor_block))
                enemy_stats.health -= damage
                enemmy_health_element.value = enemy_stats.health
                enemmy_health_text_element.innerHTML = enemy_stats.health + '/' + enemmy_health_element.getAttribute('max')
                player_attacks = false
                //battle log
                const newDiv = document.createElement('div')
                newDiv.innerHTML = 'Player does ' + damage + ' damage to Enemy. Enemy Blocks ' + armor_block + ' damage with his armor.'
                battle_log_text_element.appendChild(newDiv)
            } else {
                //math for battle
                const armor_block =  Math.floor((enemy_stats.damage / 100) * enemy_stats.armor)
                const damage = Math.floor((enemy_stats.damage - armor_block))
                player_stats.health -= damage
                player_health_text_element.innerHTML = player_stats.health + '/' + player_health_element.getAttribute('max')
                player_health_element.value = player_stats.health
                player_attacks = true 
                //battle log
                const newDiv = document.createElement('div')
                newDiv.innerHTML = 'Enemy does ' + damage + ' damage to Player. Player Blocks ' + armor_block + ' damage with his armor.'
                battle_log_text_element.appendChild(newDiv)
            }
        } else {
            clearInterval(battle_interval)
            //clean battle log
            var element = battle_log_text_element.getElementsByTagName('div');
            for (i = element.length - 1; i >= 0; i--) {
                element[i].parentNode.removeChild(element[i]);
            }
            battle_over()
        }
       
    },1000)
}

//get start battle button 
const start_battle = document.getElementById('start-battle-btt-js')
start_battle.addEventListener('click', () => {
    battle()
    start_battle.style.visibility= 'hidden'
})


//get all button for upgrade
const upgrade_btt = document.querySelectorAll('[id^=plus-stats]')
upgrade_btt.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.getAttribute('data-id') === 'vit' && player_stats.points > 0) {
        player_stats.vitality += 1    
        player_stats.points -=1
        update_player_stats_ui()
    }

    if (btn.getAttribute('data-id') === 'dex' && player_stats.points > 0) {
        player_stats.dexterity+= 1    
        player_stats.points -=1
        update_player_stats_ui()
    }

    if (btn.getAttribute('data-id') === 'int' && player_stats.points > 0) {
        player_stats.intelligence+= 1    
        player_stats.points -=1
        update_player_stats_ui()
    }

    if (btn.getAttribute('data-id') === 'lck' && player_stats.points > 0) {
        player_stats.luck+= 1    
        player_stats.points -=1
        update_player_stats_ui()
    }

    if (btn.getAttribute('data-id') === 'str' && player_stats.points > 0) {
        player_stats.strength += 1    
        player_stats.points -=1
        update_player_stats_ui()
    }
}))




