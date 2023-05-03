// const hraciTest =
// [{"jmeno":"prvni","rank":"10"},{"jmeno":"druhy","rank":"10"},{"jmeno":"3","rank":"10"},{"jmeno":"4","rank":"10"},{"jmeno":"5","rank":"10"},{"jmeno":"6","rank":"10"},{"jmeno":"7","rank":"10"},{"jmeno":"8","rank":"10"},{"jmeno":"9","rank":"10"},{"jmeno":"10","rank":"10"},{"jmeno":"11","rank":"10"},{"jmeno":"12","rank":"5"},{"jmeno":"13","rank":"5"},{"jmeno":"14","rank":"5"},{"jmeno":"15","rank":"5"},{"jmeno":"16","rank":"5"},{"jmeno":"17","rank":"1"},{"jmeno":"18","rank":"8"},{"jmeno":"19","rank":"8"},{"jmeno":"20","rank":"1"},{"jmeno":"21","rank":"1"},{"jmeno":"22","rank":"3"},{"jmeno":"23","rank":"3"},{"jmeno":"24","rank":"4"}]

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

let hraci = [];

      const addBtn = document.getElementById('add-btn');
      addBtn.addEventListener('click', () => {
        const jmeno = document.getElementById('jmeno').value;
        const rank = document.getElementById('rank').value;
        const obj = { jmeno, rank };
        hraci.push(obj);
        updateList();
      });

      const generateBtn = document.getElementById('generate-btn');
      generateBtn.addEventListener('click', () => {
        generujTeamy(hraci)

      });

      function updateList() {
        const list = document.getElementById('json-array');
        list.innerHTML = '';
        hraci.forEach((obj, index) => {
          const li = document.createElement('li');
          li.textContent = `${obj.jmeno} - ${obj.rank} `;
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Vymaž';
          deleteBtn.classList.add("btn", "del")
          deleteBtn.addEventListener('click', () => {
            hraci.splice(index, 1);
            updateList();
          });
          li.appendChild(deleteBtn);
          list.appendChild(li);
        });
      }


const generujTeamy = (hraci) => {

  const zamichaniHraci = hraci.sort(() => 0.5 - Math.random());
  const p= zamichaniHraci.length
  let liche = 1
  let cela 
  if (p % 2 == 0) {
    liche = 0
    cela = p-2
  } else {
    cela= p-1

  }
  
  const pul = cela / 2
  
  const teamA = zamichaniHraci.slice(0, pul);
  const teamB = zamichaniHraci.slice(pul, cela);
  
  let substituteA
  const substituteB = zamichaniHraci.slice(cela, cela+1);
  
  if (liche == 0) {
    substituteA = zamichaniHraci.slice(cela+1, cela+2);
  } else {
    substituteA = [{"jmeno":"není (lichý počet hráčů)", "rank": "0"}]
  }
  
  const tA = document.getElementById("tA");
  const tB = document.getElementById("tB");
  let nElA = document.createElement("ul")
  let nElB = document.createElement("ul")
 
  nElA.innerHTML = returnTeam(teamA) + addSubstitute(substituteA[0])
  nElB.innerHTML = returnTeam(teamB) + addSubstitute(substituteB[0])
  if (tA.firstElementChild) {
    tA.firstElementChild.innerHTML = returnTeam(teamA) + addSubstitute(substituteA[0])
    tB.firstElementChild.innerHTML = returnTeam(teamB) + addSubstitute(substituteB[0])
  } else {
    tA.appendChild(nElA)
    tB.appendChild(nElB)

  }
}

