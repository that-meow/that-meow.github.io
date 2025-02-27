
function fetchCommodities() {
  fetch('./commodities.json')
    .then(res => res.json())
    .then(data => {return data});
}

console.log(fetchCommodities());
