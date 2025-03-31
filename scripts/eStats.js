export let enemy_stats = {
    vitality:20,
    dexterity: 4,
    intelligence: 2,
    luck:20,
    strength:10,
    health: 10,
    damage: 5,
    armor: 50,
    level: 1,
}

export let pickable_enemy_stats = [
    {
       vitality: 20,
       dexterity: 4,
       intelligence: 2,
       luck:20,
       strength:15,
       health: 20,
       damage: 15,
       armor: 15,
       level: 2,
       id:0,
   },
   {
       vitality: 30,
       dexterity: 4,
       intelligence: 2,
       luck:20,
       strength:10,
       health: 10,
       damage: 20,
       armor: 25,
       level: 3,
       id:1,
   },
   {
       vitality: 40,
       dexterity: 4,
       intelligence: 2,
       luck:20,
       strength:10,
       health: 10,
       damage: 30,
       armor: 35,
       level: 4,
       id:2,
   }
]

//enemy stats elements
export const e_vit = document.getElementById('e-vit')
export const e_dex = document.getElementById('e-dex')
export const e_int = document.getElementById('e-int')
export const e_lck = document.getElementById('e-lck')
export const e_str = document.getElementById('e-str')
export const e_dmg = document.getElementById('e-damage')
export const e_armor = document.getElementById('e-armor')
//enemy health bar
export const enemmy_health_element = document.getElementById('e-health')
//enemy health bar text
export const enemmy_health_text_element = document.getElementById('e-health-text')
//enemy img 
export const enemy_img = document.querySelector('.img-enemy')
// enemy level 
export const enemy_level_text = document.getElementById('enemy-level-text')
//enemy weapon 
export const e_image_weapon = document.querySelector('.e-weapon')

export const update_enemy_stats_ui = () => {
    e_vit.innerHTML= enemy_stats.vitality
    e_dex.innerHTML= enemy_stats.dexterity
    e_int.innerHTML= enemy_stats.intelligence
    e_lck.innerHTML= enemy_stats.luck
    e_str.innerHTML= enemy_stats.strength
    e_dmg.innerHTML= enemy_stats.damage
    e_armor.innerHTML= enemy_stats.armor
    //enemy health
    enemy_stats.health = Math.round((0.8 * enemy_stats.level) * enemy_stats.vitality)
    enemmy_health_element.setAttribute('max', enemy_stats.health)
    enemmy_health_element.value = enemy_stats.health
    enemmy_health_text_element.innerHTML = enemy_stats.health + '/' + enemmy_health_element.getAttribute('max')
    //update enemy level
    enemy_level_text.innerHTML = enemy_stats.level

}