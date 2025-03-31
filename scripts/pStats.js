export let player_stats = {
    vitality: 20,
    dexterity: 5,
    intelligence: 6,
    luck:10,
    strength:8,
    health: 10, 
    damage: 55,
    armor: 25,
    level: 1,
    levelProgress: 0,
    points: 10,
    class: null

    
}

//player stats decleration
export const p_vit = document.getElementById('p-vit')
export const p_dex = document.getElementById('p-dex')
export const p_int = document.getElementById('p-int')
export const p_lck = document.getElementById('p-lck')
export const p_str = document.getElementById('p-str')
export const p_dmg = document.getElementById('p-damage')
export const p_armor = document.getElementById('p-armor')
//player level points
export const p_points = document.getElementById('p-points')
//player health bar
export const player_health_element = document.getElementById('p-health')
//player health bar text
export const player_health_text_element = document.getElementById('p-health-text')
//player img and weapon
export const p_img = document.querySelector('.img-player')
export const p_img_weapon = document.querySelector('.p-weapon')
//level 
export const player_level_progress_element = document.getElementById('p-level')
export const player_level_text_element = document.getElementById('player-level-text')
export const player_level_text_progress_element = document.getElementById('player-level-progress-text')

export const update_player_level_stats_ui = (max) => {
    player_level_progress_element.setAttribute('max', max)
    player_level_progress_element.value = player_stats.levelProgress
    player_level_text_element.innerHTML = player_stats.level
    player_level_text_progress_element.innerHTML = player_stats.levelProgress + '/' + player_level_progress_element.getAttribute('max')
    p_points.innerHTML = player_stats.points
}

export const update_player_stats_ui = () => {
    p_vit.innerHTML= player_stats.vitality
    p_dex.innerHTML= player_stats.dexterity
    p_int.innerHTML= player_stats.intelligence
    p_lck.innerHTML= player_stats.luck
    p_str.innerHTML= player_stats.strength
    p_dmg.innerHTML =  player_stats.damage
    p_armor.innerHTML = player_stats.armor
    p_points.innerHTML = player_stats.points
    
}


export const update_p_health_stats = () => {
    //update health 
    player_stats.health = Math.round((1.5 * player_stats.level) * player_stats.vitality)
    player_health_element.setAttribute('max', player_stats.health)
    player_health_text_element.innerHTML = player_stats.health + '/' + player_health_element.getAttribute('max')
    player_health_element.value = player_stats.health
}

export const update_p_damage_stats = () => {
    //update damage
    if (player_stats.class === 'berserker') {
        player_stats.damage = Math.round((2 * player_stats.level ) * player_stats.strength) 
        p_dmg.innerHTML =  player_stats.damage
    }

    if ( player_stats.class === 'hunter') {
        player_stats.damage = Math.round((2 * player_stats.level ) * player_stats.dexterity) 
        p_dmg.innerHTML =  player_stats.damage
    }
    if ( player_stats.class === 'warrior') {
        player_stats.damage = Math.round((2 * player_stats.level ) * player_stats.vitality) 
        p_dmg.innerHTML =  player_stats.damage
    }
    if ( player_stats.class === 'battle') {
        player_stats.damage = Math.round((2 * player_stats.level ) * player_stats.intelligence) 
        p_dmg.innerHTML =  player_stats.damage
    }
    
}

  



