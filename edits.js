async function manager(){
  let commodities = await fetchStuff("./commodities.json");
  console.log(commodities);
  let stations = await fetchStuff("./stations.json")["stations"];
  console.log(stations);
  stations.sort(sortFunctionStations);
  console.log(stations);
}

async function fetchStuff(stuff) {
  return fetch(stuff)
    .then(res => res.json())
    .then(data => {return data});
}

function sortFunctionStations(a, b) {
  return a["system-name"] - b["system-name"];
}

function sortFunctionCommodities(a, b) {
  return a["name"] - b["name"];
}
manager();
