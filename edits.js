async function manager(){
  let commoditiesObject = await fetchStuff("./commodities.json");
  let commodities = await commoditiesObject["commodities"];
  console.log(commodities);
  let stationsObject = await fetchStuff("./stations.json");
  let stations = stationsObject["stations"];
  console.log(stations);
  stations.sort(sortFunctionStations);
  console.log(stations);
  document.innerHTML("<h1>" + stations[0]["system-name"] + "</h1>);
}

async function fetchStuff(stuff) {
  return fetch(stuff)
    .then(res => res.json())
    .then(data => {return data});
}

function sortFunctionStations(a, b) {
  return ('' + a["system-name"]).localeCompare(b["system-name"]);
}

function sortFunctionCommodities(a, b) {
  return ('' + a["name"]).localeCompare(b["name"]);
}
manager();
