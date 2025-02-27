async function manager(){
  let commodities = await fetchStuff("./commodities.json");
  console.log(commodities);
  let stations = await fetchStuff("./stations.json");
  console.log(stations);
}

async function fetchStuff(stuff) {
  return fetch(stuff)
    .then(res => res.json())
    .then(data => {return data});
}

manager();
