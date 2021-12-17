// Create a class that declares my ship AKA USS HelloWorld with the required properties 
//This is the player's ship
class Ussship {
// Ship Properties ===>
    constructor (name, hull, firepower, accuracy, type) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.type = type; 
    }
 // Create a function(s) that carries out the actions of the player's ship AKA the USS HelloWorld
// According to the game instructions "every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()`"
//if enemy acc < Math.random, subtract firepower from enemy's hull 
    attack(target){
        let checkAgainst = Math.random()
        if(target.accuracy < checkAgainst){
            target.hull -= this.firepower
            if(target.type === "enemy"){
                console.log(`We hit ${target.name}! \nHull: ${target.hull}`)
            }else{
                console.log(`We've been hit! \nHull: ${target.hull}`)
            }
        }else{
            console.log(`We missed, ${target.type} attacks now. Brace yourself!`)
        }
       if(target.hull < 1){
           return true; 
       } else{
           return false; 
       }
    }
}
// Create a class that declares the alien ships with the required properties. I added an identifier so that players can know which enemy ship they've destroyed 
// This is essentially the computer's player
class Alienship  extends Ussship{
    constructor (name, hull, firepower, accuracy, type) {
        super(name, hull, firepower, accuracy, type)
    }
}  

// Declare a new object 
let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7, "Player")

// Create a function(s) that carries out the actions of the alien ship.
let alienShips = []
for( let i = 0; i < 6; i++){
    let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
    let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
    let alienAcc = (Math.random()* (2) + 6) / 10
    alienShips.push(new Alienship (`enemy${i+1}`, alienHp, alienFp, alienAcc, "enemy"))
}

let battleBegin = null; 
while(battleBegin !== ("yes" && "no")){
    battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle?:", "yes/no")
    console.log(battleBegin)
}

let attackOrRetreat = null;
if(battleBegin === "yes"){
    let activeEnemy = 0; 
    while(ussschwartz.hull > 0){
        attackOrRetreat = null; 
        while(attackOrRetreat !== ("attack" || "retreat")){
            attackOrRetreat = window.prompt("Would you like to attack or retreat?", "attack/retreat")
        }
        if(attackOrRetreat === "attack"){
            if(ussschwartz.attack(alienShips[activeEnemy])){
                activeEnemy++;
                console.log("Enemy destroyed!") 
            }else{
                alienShips[activeEnemy].attack(ussschwartz)
            }
            
        }else{
            window.prompt("We are retreating")
        }
    }
}
// Unable to get code to come out the first prompt. I'm assuming it's because the attack was created as a while loop?

