
function fetchCommodities() {
  fetch('./commodities.json')
    .then(res => res.json())
    .then(data => {console.log(data)});
}

console.log(fetchCommodities());
