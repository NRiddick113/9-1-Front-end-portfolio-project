fetch('https://www.officeapi.dev/api/quotes/')
    .then(res => res.json())
    .then(res => console.log(res))

fetch('https://api.tvmaze.com/shows/526/cast')
    .then(res => res.json())
    .then(res => console.log(res))