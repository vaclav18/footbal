const hraci = [
  { jmeno: 'Hráč 1', rank: 1 },
  { jmeno: 'Hráč 2', rank: 2 },
  { jmeno: 'Hráč 3', rank: 3 },
  { jmeno: 'Hráč 4', rank: 4 },
  { jmeno: 'Hráč 5', rank: 5 },
  { jmeno: 'Hráč 6', rank: 6 },
  { jmeno: 'Hráč 7', rank: 7 },
  { jmeno: 'Hráč 8', rank: 8 },
  { jmeno: 'Hráč 9', rank: 9 },
  { jmeno: 'Hráč 10', rank: 10 },
  { jmeno: 'Hráč 11', rank: 11 },
  { jmeno: 'Hráč 12', rank: 12 },
  { jmeno: 'Hráč 13', rank: 13 },
  { jmeno: 'Hráč 14', rank: 14 },
  { jmeno: 'Hráč 15', rank: 15 },
  { jmeno: 'Hráč 16', rank: 16 },
  { jmeno: 'Hráč 17', rank: 17 },
  { jmeno: 'Hráč 18', rank: 18 },
  { jmeno: 'Hráč 19', rank: 19 },
  { jmeno: 'Hráč 20', rank: 20 },
  { jmeno: 'Hráč 21', rank: 21 },
  { jmeno: 'Hráč 22', rank: 22 },
  { jmeno: 'Hráč 23', rank: 23 },
  { jmeno: 'Hráč 24', rank: 24 }
];

const returnTeam = (team)=> {
  let markup = ""
  team.forEach((i)=> {
    markup += `<li>${i.jmeno} rank: ${i.rank}</li>`
  })
  return markup
}

const addSubstitute = (i) => {
  return `<li>Nahradnik ${i.jmeno} rank: ${i.rank}</li>`
}


const zamichaniHraci = hraci.sort(() => 0.5 - Math.random());


const teamA = zamichaniHraci.slice(0, 11);
const teamB = zamichaniHraci.slice(11, 22);
const substituteA = zamichaniHraci.slice(22, 23);
const substituteB = zamichaniHraci.slice(23, 24);

console.log('Team A:');
console.log(teamA);
console.log('Substitute A:');
console.log(substituteA);
console.log('Team B:');
console.log(teamB);
console.log('Substitute B:');
console.log(substituteB);
const tA = document.getElementById("tA");
const tB = document.getElementById("tB");
let nElA = document.createElement("ul")
let nElB = document.createElement("ul")
let markup=
nElA.innerHTML = returnTeam(teamA) + addSubstitute(substituteA[0])
nElB.innerHTML = returnTeam(teamB) + addSubstitute(substituteB[0])
tA.appendChild(nElA)
tB.appendChild(nElB)
