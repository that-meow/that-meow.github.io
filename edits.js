async function manager(){
  let commodities = await fetchCommodities();
  console.log(commodities);
}

async function fetchCommodities() {
  return fetch('./commodities.json')
    .then(res => res.json())
    .then(data => {return data});
}

manager();
