// Put your code here

console.log("My Enemies List!");
console.log("----------------");

const enemyList = [
  {
    firstName: "Darth",
    lastName: "Vader",
    offenses: [
      "Cut off Luke's hand",
      "Murdered all those kids",
      "Unkind management practices"],
    isReallyHated: false
  },
  {
    firstName: "Betty",
    lastName: "Ruelady",
    offenses: [
      "Phone calls in the theater",
      "Phone calls on the bus",
      "Phone calls in line at the grocery store",
      "Poor conversationalist"],
    isReallyHated: true
  },
  {
    firstName: "Leon",
    lastName: "Peck",
    offenses: [
      "Keeps giving me a hotplate"],
    isReallyHated: false
  }
]

const getEnemies = () => {
  return enemyList
}

const enemies = getEnemies();

enemies.forEach(enemy => {
  if (enemy.isReallyHated) {
    console.log(`${enemy.firstName} ${enemy.lastName} Really, really dislike!`)
  } else {
    console.log(`${enemy.firstName} ${enemy.lastName}`)
  }
})

