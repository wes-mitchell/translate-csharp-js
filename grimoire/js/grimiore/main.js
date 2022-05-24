// Put your code here

console.log('Do you believe in magic?');
console.log('------------------------');

const allSpells = [
  {
    Name: "Turn enemy into a newt",
    IsEvil: true,
    EnergyReqired: 5.1
  },
  {
    Name: "Conjure some gold for a local charity",
    IsEvil: false,
    EnergyReqired: 2.99
  },
  {
    Name: "Give a deaf person the ability to heal",
    IsEvil: false,
    EnergyReqired: 12.2
  },
  {
    Name: "Make yourself emperor of the universe",
    IsEvil: true,
    EnergyReqired: 100.0
  },
  {
    Name: "Convince your relatives your political views are correct",
    IsEvil: false,
    EnergyReqired: 2921.5
  }
]

const createEvilSpellBook = (spellList) => {

  const evilBook = {
    title: 'Evil Book',
    spells: []
  }

  spellList.forEach(spell => {
    if (spell.IsEvil === true) {
      evilBook.spells.push(spell)
    }
  })
  return evilBook
}

const createGoodSpellBook = (spellList) => {
  const goodBook = {
    title: 'Good Book',
    spells: []
  }

  spellList.forEach(spell => {
    if (spell.IsEvil !== true) {
      goodBook.spells.push(spell)
    }
  })
  return goodBook
}

const displaySpellBook = (book) => {
  const spells = book.spells
  console.log(`Title: ${book.title}`);
  spells.forEach(spell => {
    console.log(` Spell: ${spell.Name}`);
  })
}

const goodBook = createGoodSpellBook(allSpells);
const badBook = createEvilSpellBook(allSpells);



  displaySpellBook(goodBook)
  console.log('');
  displaySpellBook(badBook)