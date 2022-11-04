const body = document.body;
const switcher = document.querySelector('#switch');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const searchWarning = document.querySelector('.search-warning');
// const dropdownBtn = document.querySelector('#dropdown-btn');
// const dropdownBox = document.querySelector('#dropdown-box');
// const dropdownItems = document.querySelectorAll('.dropdown-item');
// const loadingScreen = document.querySelector('.loading-screen');
// const countries = document.querySelector('#countries');
// const africa = document.querySelector('#africa');
// const asia = document.querySelector('#asia');
// const nAmerica = document.querySelector('#nAmerica');
// const sAmerica = document.querySelector('#sAmerica');
// const europe = document.querySelector('#europe');
// const oceania = document.querySelector('#oceania');
// let searchValue = '';
// let screenMode;
// let countriesArr = [];

window.onload = () => {
    if (localStorage.getItem('screenMode') === 'dark') {
        dark.classList.remove('hide');
        light.classList.add('hide');
        body.classList.add('dark-mode');
    }
}

switcher.addEventListener('click', () => {
    if (dark.classList.contains('hide')) {
        dark.classList.remove('hide');
        light.classList.add('hide');
        body.classList.add('dark-mode');
        localStorage.setItem('screenMode', 'dark');
    } else if (light.classList.contains('hide')) {
        light.classList.remove('hide');
        dark.classList.add('hide');
        body.classList.remove('dark-mode');
        localStorage.setItem('screenMode', 'light');
    }
})

searchInput.addEventListener('focus', () => {
    // searchWarning.classList.remove('hide');
    searchValue = searchInput.value;
})

// searchInput.addEventListener('blur', () => {
//     searchWarning.classList.add('hide');
// })

searchInput.addEventListener('input', () => {
    // searchInput.value = searchInput.value.replace(/[^a-zA-Z]/g, '')
    try {
        if (/\d+/g.test(searchInput.value)) throw new Error("Digits are not allowed here")
        searchValue = searchInput.value;
        console.log(searchValue)
        searchWarning.innerHTML = ""
    } catch(err) {
        console.log(err)
        searchWarning.innerHTML = err.message;
    } finally {
        if (dark.classList.contains('hide')) {
            dark.classList.remove('hide');
            light.classList.add('hide');
            body.classList.add('dark-mode');
            localStorage.setItem('screenMode', 'dark');
        } else if (light.classList.contains('hide')) {
            light.classList.remove('hide');
            dark.classList.add('hide');
            body.classList.remove('dark-mode');
            localStorage.setItem('screenMode', 'light');
        }
    }
    // searchValue = searchInput.value;
})

// searchInput.addEventListener('keypress', (event) => {
//     if (event.key ==='Enter') {
//         event.preventDefault();
//         window.open(`search.html?search=${searchValue}`, '_self');
//     }
// })

const search = (event) => {
    event.preventDefault();
    // window.open(`search.html?search=${searchValue}`, '_self');
}

// dropdownBtn.addEventListener('click', () => {
//     dropdownBox.classList.toggle('hide')
// })

// dropdownItems.forEach(item => {
//     item.addEventListener('click', () => {
//         dropdownBox.classList.add('hide');
//     })
// })


// const data =  [
//     {
//         "name":{
//             "common":"United States",
//             "official":"United States of America",
//         },
//         "currencies":{
//             "USD":{
//                 "name":"United States dollar",
//                 "symbol":"$"
//             }
//         },
//         "capital":"Washington, D.C.",
//         "altSpellings":["US","USA","United States of America"],
//         "languages":{
//             "eng":"English"
//         },
//         "borders":["CAN","MEX"],
//         "area":9372610.0,
//         "population":329484123,
//         "fifa":"USA",
//         "continent":"North America",
//         "flag":{
//             "png":"https://flagcdn.com/w320/us.png"
//         },
//         'code': 'USA'
//     },

//     {
//         "name":{
//             "common":"United Arab Emirates",
//             "official":"United Arab Emirates",
//         },
//         "currencies":{
//             "AED":{
//                 "name":"United Arab Emirates dirham",
//                 "symbol":"د.إ"
//             }
//         },
//         "capital":"Abu Dhabi",
//         "altSpellings":["AE","UAE","Emirates"],
//         "languages":{
//             "ara":"Arabic"
//         },
//         "borders":["OMN","SAU"],
//         "area":83600.0,
//         "population":9890400,
//         "fifa":"UAE",
//         "continent":"Asia",
//         "flag":{
//             "png":"https://flagcdn.com/w320/ae.png"
//         },
//         'code': 'UAE'
//     }
// ]

// // let arr = [1,2,3]
// let arr2 = data.map(item =>  {
//     return {
//         'name': item.name.official,
//         'continent': item.continent,
//         'population': item.population
//     }
// })
// console.log(arr2)

// console.log(0 || undefined || null)

// console.log(Boolean(0))

// // &&  ||

const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        // countriesArr = data.map(item => {
        //     return {
        //        'code' : item.cca3,
        //        'name': item.name.common,
        //        'flag': item.flags.png,
        //        'population': item.population.toLocaleString(),
        //        'continent': item.continents[0],
        //        'capital': item.capital || 'nil'
        //     }
        // })
        // console.log(countriesArr)
        // displayCountries(countriesArr)
    })
}

fetchCountries()


// const displayCountries = arr => {
//     let card = ``;
//     for (let i = 0; i < arr.length; i++) {
//         card += `<a href="country.html?country=${arr[i].code}" class="text-decoration-none m-0 p-0">
//                     <div class="country-card rounded pb-3">
//                         <div class="flag ratio ratio-16x9">
//                             <img src="${arr[i].flag}" alt="Flag of ${arr[i].name}" class="img-fluid">
//                         </div>
//                         <div class="card-body d-flex flex-column py-4 px-4">
//                             <h2 class="country-name h5 fw-800 mb-3">${arr[i].name}</h2>
//                             <p class="fw-600 fs-small mb-1">Population: <span class="population fw-300 opacity-9">${arr[i].population}</span></p>
//                             <p class="fw-600 fs-small mb-1">Continent: <span class="region fw-300 opacity-9">${arr[i].continent}</span></p>
//                             <p class="fw-600 fs-small mb-3">Capital: <span class="capital fw-300 opacity-9">${arr[i].capital}</span></p>
//                         </div>
//                     </div>
//                 </a>`
//     }

//     countries.innerHTML = card;
//     // loadingScreen.classList.add('hide');
// }

// // displayCountries(data)


const promiseCallback = (err, result) => {
    if(err === false) {
        return result
    } else {
        return err
    }
}
