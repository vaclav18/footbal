const players = [
  { name: 'Hráč 1', rank: 1 },
  { name: 'Hráč 2', rank: 2 },
  { name: 'Hráč 3', rank: 3 },
  { name: 'Hráč 4', rank: 4 },
  { name: 'Hráč 5', rank: 5 },
  { name: 'Hráč 6', rank: 6 },
  { name: 'Hráč 7', rank: 7 },
  { name: 'Hráč 8', rank: 8 },
  { name: 'Hráč 9', rank: 9 },
  { name: 'Hráč 10', rank: 10 },
  { name: 'Hráč 11', rank: 11 },
  { name: 'Hráč 12', rank: 12 },
  { name: 'Hráč 13', rank: 13 },
  { name: 'Hráč 14', rank: 14 },
  { name: 'Hráč 15', rank: 15 },
  { name: 'Hráč 16', rank: 16 },
  { name: 'Hráč 17', rank: 17 },
  { name: 'Hráč 18', rank: 18 },
  { name: 'Hráč 19', rank: 19 },
  { name: 'Hráč 20', rank: 20 },
  { name: 'Hráč 21', rank: 21 },
  { name: 'Hráč 22', rank: 22 },
  { name: 'Hráč 23', rank: 23 },
  { name: 'Hráč 24', rank: 24 }
];

const returnTeam = (team)=> {
  let markup = ""
  team.forEach((i)=> {
    markup += `<li>${i.name} rank: ${i.rank}</li>`
  })
  return markup
}

const addSubstitute = (i) => {
  return `<li>Nahradnik ${i.name} rank: ${i.rank}</li>`
}

const sortedPlayers = players.sort((a, b) => a.rank - b.rank);


let substituteA = sortedPlayers.slice(22, 23);
let substituteB = sortedPlayers.slice(23, 24);
let teamA =[]
,teamB = []


sortedPlayers.pop()
sortedPlayers.pop()


let selectFromTeamA = true;

while (sortedPlayers.length >1 ) {
  if (selectFromTeamA) {
    
    const highestRankPlayerA = sortedPlayers.pop();

    const lowestRankPlayerB = sortedPlayers.shift();

    teamA.push(lowestRankPlayerB);
    teamB.push(highestRankPlayerA);
  } else {

    const highestRankPlayerB = sortedPlayers.pop();
   
    const lowestRankPlayerA = sortedPlayers.shift();

    teamA.push(highestRankPlayerB);
    teamB.push(lowestRankPlayerA);
  }

  selectFromTeamA = !selectFromTeamA;
  }
  
 

const tA = document.getElementById("tA");
const tB = document.getElementById("tB");
let nElA = document.createElement("ul")
let nElB = document.createElement("ul")
let markup=""
nElA.innerHTML = returnTeam(teamA) + addSubstitute(substituteA[0])
nElB.innerHTML = returnTeam(teamB) + addSubstitute(substituteB[0])
tA.appendChild(nElA)
tB.appendChild(nElB)
