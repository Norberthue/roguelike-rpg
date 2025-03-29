import  { player_stats, p_vit, p_dex, p_int, p_lck, p_str, p_dmg, p_armor, p_points,
    player_health_element, player_health_text_element, player_level_progress_element,
    player_level_text_element, player_level_text_progress_element, 
    update_player_level_stats_ui, update_player_stats_ui} from './pStats.js'
import { enemy_stats, pickable_enemy_stats, e_vit, e_dex, e_int, e_lck, e_str,
    e_dmg, e_armor, enemmy_health_element, enemmy_health_text_element, enemy_img ,
    enemy_level_text, update_enemy_stats_ui } from './eStats.js'


//battle log elements
const battle_log_text_element = document.getElementById('battle-log-text')
const pick_new_enemy_element = document.getElementById('pick-enemy-container')
const battle_log_title_element = document.getElementsByClassName('battle-text')
let player_attacks = true
//get start battle button 
const start_battle = document.getElementById('start-battle-btt-js')
// store html for new enemies
let newEnemiesHtml = ''
//player level 
let max_level_progress = 10 * player_stats.level
let exp_gain = 10
//updating player ui stats
update_player_level_stats_ui(max_level_progress)
update_player_stats_ui()
//updating enemy ui stats
update_enemy_stats_ui()

const update_new_enemies_stats = () => {
    //update new enemy stats by player level.

    pickable_enemy_stats.forEach((data, index) => {
        if (index === 0) {
            const rNum = Math.floor(Math.random() * 100) / 100
            const profesion = rNum <= 0.33 ? 0 : rNum > 0.33 && rNum <= 0.66 ? 1 : 2 
            data.level = player_stats.level + 1
            data.vitality = Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level))
            data.dexterity = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.intelligence = profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.strength = profesion === 2 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.damage = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.dexterity : 
            profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.intelligence : 
            Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.strength
            data.armor = profesion === 2 ? Math.round((0.5 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level)) : 
            Math.round((0.3 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            
        }

        if (index === 1) {
            const rNum = Math.floor(Math.random() * 100) / 100
            const profesion = rNum <= 0.33 ? 0 : rNum > 0.33 && rNum <= 0.66 ? 1 : 2 
            data.level = player_stats.level + 2
            data.vitality = Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level))
            data.dexterity = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.intelligence = profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.strength = profesion === 2 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.damage = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.dexterity : 
            profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.intelligence : 
            Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.strength
            data.armor = profesion === 2 ? Math.round((0.5 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level)) : 
            Math.round((0.3* data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
        }

        if (index === 2) {
            const rNum = Math.floor(Math.random() * 100) / 100
            const profesion = rNum <= 0.33 ? 0 : rNum > 0.33 && rNum <= 0.66 ? 1 : 2 
            data.level = player_stats.level + 3
            data.vitality = Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level))
            data.dexterity = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.intelligence = profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.strength = profesion === 2 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 4) - data.level + 1))) + data.level)) : Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
            data.damage = profesion === 0 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.dexterity : 
            profesion === 1 ? Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.intelligence : 
            Math.round((0.8 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level)) + data.strength
            data.armor = profesion === 2 ? Math.round((0.5 * data.level) * ((Math.floor(Math.random() * ((data.level * 2) - data.level + 1))) + data.level)) : 
            Math.round((0.3 * data.level) * ((Math.floor(Math.random() * ((data.level * 1.5) - data.level + 1))) + data.level))
        }
        
    })
}


const createNewEnemies = () => {
    //update enemy's stats
    update_new_enemies_stats()
    let randomImages = []
    // make sure enemies are not same (pictures)
    for (let i = 0; i <= 2; i++) {
        let randomImg = Math.floor(Math.random() * (42 - 10 + 1)) + 10
        if (randomImages.length >= 1) {
            while (randomImages[i-1] === randomImg) {
                randomImg = Math.floor(Math.random() * (42 - 10 + 1)) + 10
            }
            if (randomImages.length > 1) {
                while (randomImages[i-2] === randomImg) {
                    randomImg = Math.floor(Math.random() * (42 - 10 + 1)) + 10
                }
            }
            
        }
        randomImages.push(randomImg)   
    }
       
    pickable_enemy_stats.map((data, index) => {
        newEnemiesHtml += `
             <div class="pickable-e">
                <div>
                    <img id='e-img-${data.id}' class="pickable-e-img" src="assets/enemies/con${randomImages[index]}.png">
                </div>
                <div class="pickable-e-stats">
                    <div style="position: relative; display: flex; justify-content: center;">
                        <p style="margin-right: 5px;">Health: </p>
                        <div style="position: relative; display: flex; justify-content: center;">
                            <progress style="background-color: green; width: 60px; position: relative;" id="pickable-e-health" value="100" max="100"></progress>
                            <h1 id="pickable-e-health-text" style="position: absolute; top: 0px; font-size: 15px">${Math.round((0.8 * data.level) * data.vitality)}</h1>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <p style="display: flex;">Level:<span id="pickable-enemy-level-text" style="margin-right: 2px; margin-left: 1px;">${data.level}</span> </p>
                    </div>
                    <h1 class="stats-text">Stats</h1>
                    <div class="all-stats">
                        <div class="pickable-container-stats-e">
                            <h3>Vitality</h3>
                            <span id="pickable-e-vit">${data.vitality}</span>
                        </div>
                        <div class="pickable-container-stats-e ">
                            <h3>Dexterity</h3>
                            <span id="pickable-e-dex">${data.dexterity}</span>
                        </div><div class="pickable-container-stats-e">
                            <h3>Inteligence</h3>
                            <span id="pickable-e-int">${data.intelligence}</span>
                        </div><div class="pickable-container-stats-e">
                            <h3>Luck</h3>
                            <span id="pickable-e-lck">${data.luck}</span>
                        </div><div class="pickable-container-stats-e">
                            <h3>Strength</h3>
                            <span id="pickable-e-str">${data.strength}</span>
                        </div>
                        <div class="pickable-container-stats-e">
                            <h3>Damage</h3>
                            <span id="pickable-e-damage">${data.damage}</span>
                        </div>
                        <div class="pickable-container-stats-e">
                            <h3>Armor</h3>
                            <span id="pickable-e-armor">${data.armor}</span>
                        </div>
                        <button id="fight-btt"  data-id=${data.id}  style="padding: 0;">Fight The Enemy</button>
                    </div>
                </div>
            </div>
        `
    })

    return newEnemiesHtml
}


const update_current_enemy = (data) => {
    //get the enemy which play choose
    let new_e = pickable_enemy_stats.filter(e => e.id === data)[0]
    //update experience for player
    exp_gain = data === 0 ? 3 * player_stats.level : data === 1 ? 6 * player_stats.level : 9 * player_stats.level
    //update stats for current enemy
    enemy_stats.vitality = new_e.vitality
    enemy_stats.dexterity = new_e.dexterity
    enemy_stats.intelligence = new_e.intelligence
    enemy_stats.luck = new_e.luck
    enemy_stats.strength = new_e.strength
    enemy_stats.damage = new_e.damage
    enemy_stats.armor = new_e.armor
    enemy_stats.level = new_e.level
    update_enemy_stats_ui()
    //update enemy img
    const new_e_img = document.getElementById(`e-img-${data}`).src
    enemy_img.src = new_e_img
    //reset everythin that is neccesary
    pick_new_enemy_element.innerHTML = ''
    newEnemiesHtml = ''
    //put battle box back and hide picking enemy container
    battle_log_text_element.style.visibility = 'visible'
    battle_log_text_element.style.position = 'initial'
    pick_new_enemy_element.style.visibility = 'hidden'
    pick_new_enemy_element.style.position = 'absolute'
    // reset title
    battle_log_title_element[0].innerHTML= 'Battle log'
    battle()
}


const handle_button_new_enemy = () => {
    const button = document.querySelectorAll('[id^=fight-btt]')
        .forEach((btt) => {
            btt.addEventListener('click', () => {
                const new_enemy_data = (btt.dataset.id)
                update_current_enemy(parseInt(new_enemy_data))
            })
        })
          
}

const pickNewEnemy = () => {
    //clean up the board
    const element = battle_log_text_element.getElementsByTagName('div')
    const element_btn = battle_log_text_element.getElementsByTagName('button')
    element_btn[0].parentNode.removeChild(element_btn[0])
    for (let i = element.length -1 ; i >= 0 ; i--) {
        element[i].parentNode.removeChild(element[i])
    }
    
    //reset player health
    update_player_stats_ui()
    //hide battle log
    battle_log_text_element.style.visibility = 'hidden'
    battle_log_text_element.style.position = 'absolute'
    //show enemies container
    pick_new_enemy_element.innerHTML= createNewEnemies()
    pick_new_enemy_element.style.visibility = 'visible'
    pick_new_enemy_element.style.position = 'initial'
    
    //change the title
    battle_log_title_element[0].innerHTML= 'Pick your next enemy'
    handle_button_new_enemy()

}


const battle_over = () => {
    if (player_stats.health > 0) {
        //battle log
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Player has won !\n Reward: ' +  exp_gain + ' exp'
        battle_log_text_element.appendChild(newDiv)
        
        //update player exeperience and level
        player_stats.levelProgress += exp_gain
        
        if (player_stats.levelProgress >= max_level_progress) {
            player_stats.levelProgress = player_stats.levelProgress - max_level_progress
            player_stats.level += 1   
            max_level_progress += 5 * player_stats.level
            player_stats.points += 10
            const newDiv = document.createElement('div')
            newDiv.innerHTML = 'Players level has increase to level ' + player_stats.level + '.'
            battle_log_text_element.appendChild(newDiv)
        }
        update_player_level_stats_ui(max_level_progress)
        //continue btt to pick player's next enemy
        const newBtn = document.createElement('button')
        newBtn.innerHTML = 'Countinue'
        newBtn.style.marginTop = '5px'
        newBtn.addEventListener('click', pickNewEnemy)
        battle_log_text_element.appendChild(newBtn)
    } else {
        //reset the game
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Enemy has won ! \n Game is restarting itself...' 
        battle_log_text_element.appendChild(newDiv)
        setTimeout(() => {
            window.location.reload()
        },2000)
        
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
            const element = battle_log_text_element.getElementsByTagName('div');
            for (let i = element.length - 1; i >= 0; i--) {
                element[i].parentNode.removeChild(element[i]);
            }
            battle_over()  
        }
       
    },1000)
}


start_battle.addEventListener('click', () => {
    battle()
    start_battle.style.visibility= 'hidden'
})


//get all buttons for upgrade and make them function 
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




