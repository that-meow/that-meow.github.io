
async function fetchCommodities() {
  return fetch('./commodities.json')
    .then(res => res.json())
    .then(data => {return data});
}

console.log(await fetchCommodities());
