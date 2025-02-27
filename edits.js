async function manager(){
  let commoditiesObject = await fetchStuff("./commodities.json");
  let commodities = await commoditiesObject["commodities"];
  console.log(commodities);
  let stationsObject = await fetchStuff("./stations.json");
  let stations = stationsObject["stations"];
  console.log(stations);
  stations.sort(sortFunctionStations);
  console.log(stations);
  let table = document.createElement("table");
  for (let i = 0; i < stations.length; i++) { //looping through stations
    let tableHeader = document.createElement("thead");
    tableHeader.innerHTML = '<tr class="unbordered"><td colspan="6"><h1>' + stations[i]["system-name"] + "</h1></td></tr><tr><td>Material</td><td>Amount</td><td>Economy</td><td>Possible buy locations</td></tr>"
    let tableBody = document.createElement("tbody");
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    for (let j = 0; j < stations[i]["requirements"].length; j++) { //looping through requirements
      let neededCommodity;
      for (commodity of commodities) { //look for matching commodity in commodities
        console.log(commodity["name"]);
        console.log(stations[i]["requirements"][j]["name"]);
        if (commodity["name"] == stations[i]["requirements"][j]["name"]) {
          neededCommodity = commodity;
          break;
        }
      }
      let rowMaterial = document.createElement("td");
      rowMaterial.innerText = neededCommodity["name"];
      let rowAmount = document.createElement("td");
      rowAmount.innerText = stations[i]["requirements"][j]["count"];
      let rowEconomy = document.createElement("td");
      rowEconomy.innerText = neededCommodity["economy"];
      let rowLinkField = document.createElement("td");
      let rowLink = document.createElement("a");
      if (neededCommodity["EDSM_ID"] != 666) {
        rowLink.href = "https://www.edsm.net/en/search/stations/index/buyCommodity/" + neededCommodity["EDSM_ID"] + "/cmdrPosition/" + stations[i]["system-name"] + "/sortBy/distanceCMDR";
        rowLink.innerHTML = "EDSM";
      }
      else
      {
        rowLink.href = "https://inara.cz/elite/commodities/?formbrief=1&pi1=1&pa1%5B%5D=10487&ps1=HIP+753&pi10=3&pi11=0&pi3=1&pi9=0&pi4=1&pi14=0&pi5=720&pi12=0&pi7=0&pi8=0&pi13=0";
        rowLink.innerHTML = "Inara";
      }
      rowLinkField.appendChild(rowLink);
      let rowRow = document.createElement("tr");
      rowRow.appendChild(rowMaterial);
      rowRow.appendChild(rowAmount);
      rowRow.appendChild(rowEconomy);
      rowRow.appendChild(rowLinkField);
      tableBody.appendChild(rowRow);
    }
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
