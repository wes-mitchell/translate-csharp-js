// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const rollDie = () => {
  const die = {
    value: 0
  }
  const dieValue = Math.floor(Math.random() * 6) +1;
  die.value = dieValue
  return die
}

const dieString = (dieObj) => {

  let dieString = 'Unknown'

  switch (dieObj.value) {
    case 1:
      dieString = 'one'
      break;
    case 2:
      dieString = 'two'
      break;
    case 3:
      dieString = 'three'
      break;
    case 4:
      dieString = 'four'
      break;
    case 5:
      dieString = 'five'
      break;
    case 6:
      dieString = 'six'
      break;
  }
  return dieString
}

const letsPlay = () => {

  for (let i = 0; i < 10; i++) {
    const die1 = rollDie()
    const die2 = rollDie()

    let message = `${dieString(die1)} + ${dieString(die2)} = ${die1.value + die2.value}`
    if (die1.value === die2.value) {
      message += " DOUBLES!"
    }

    console.log(message);
  }
}

letsPlay()
