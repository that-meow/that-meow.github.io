async function manager(){
  let commoditiesObject = await fetchStuff("./commodities.json");
  let commodities = await commoditiesObject["commodities"];
  console.log(commodities);
  let stationsObject = await fetchStuff("./stations.json");
  let stations = stationsObject["stations"];
  console.log(stations);
  stations.sort(sortFunctionStations);
  console.log(stations);
  for (let i = 0; i < stations.length; i++) {
    let title = document.createElement("h1");
    title.innerHTML = stations[i]["system-name"];
    document.getElementsByTagName("body")[0].appendChild(title);
    let tableHeader = document.createElement("thead");
    tableHeader.innerHTML = "<tr><td>Material</td><td>Amount</td><td>Economy</td><td>Possible buy locations</td></tr>"
    let tableBody = document.createElement("tbody");
    let table = document.createElement("table");
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    document.getElementsByTagName("body")[0].appendChild(table);
  } 
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
