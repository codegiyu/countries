const body = document.body;
const switcher = document.querySelector('#switch');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownBox = document.querySelector('#dropdown-box');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const countries = document.querySelector('#countries');
const africa = document.querySelector('#africa');
const asia = document.querySelector('#asia');
const nAmerica = document.querySelector('#nAmerica');
const sAmerica = document.querySelector('#sAmerica');
const europe = document.querySelector('#europe');
const oceania = document.querySelector('#oceania');
let countriesArr = [];

switcher.addEventListener('click', () => {
    if (dark.classList.contains('hide')) {
        dark.classList.remove('hide');
        light.classList.add('hide');
        body.classList.add('dark-mode');
    } else if (light.classList.contains('hide')) {
        light.classList.remove('hide');
        dark.classList.add('hide');
        body.classList.remove('dark-mode');
    }
})

dropdownBtn.addEventListener('click', () => {
    dropdownBox.classList.toggle('hide')
})

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownBox.classList.add('hide');
    })
})

const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))

            displayCountries(countriesArr)
        })
}

fetchCountries();

const displayCountries = arr => {
    let card = ``;
    for (let i = 0; i < arr.length; i++) {
        card += `<a href="country.html?country=${arr[i].code}" class="text-decoration-none m-0 p-0">
                    <div class="country-card rounded pb-3">
                        <div class="flag ratio ratio-16x9">
                            <img src="${arr[i].flag}" alt="Flag of ${arr[i].name}" class="img-fluid">
                        </div>
                        <div class="card-body d-flex flex-column py-4 px-4">
                            <h6 class="country-name h5 fw-800 mb-3">${arr[i].name}</h6>
                            <p class="fw-600 fs-small mb-1">Population: <span class="population fw-300 opacity-9">${arr[i].population.toLocaleString()}</span></p>
                            <p class="fw-600 fs-small mb-1">Continent: <span class="region fw-300 opacity-9">${arr[i].continent}</span></p>
                            <p class="fw-600 fs-small mb-3">Capital: <span class="capital fw-300 opacity-9">${arr[i].capital}</span></p>
                        </div>
                    </div>
                </a>`
    }

    countries.innerHTML = card;    
}

const filterAfrica = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'Africa')
            displayCountries(countriesArr)
        })
}

const filterAsia = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'Asia')
            displayCountries(countriesArr)
        })
}

const filterNAmerica = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'North America')
            displayCountries(countriesArr)
        })
}

const filterSAmerica = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'South America')
            displayCountries(countriesArr)
        })
}

const filterEurope = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'Europe')
            displayCountries(countriesArr)
        })
}

const filterOceania = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'Oceania')
            displayCountries(countriesArr)
        })
}

const filterAntarctica = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return {
                    'name': item.name.common,
                    'population': item.population,
                    'continent': item.continents[0],
                    'capital': item.capital || 'nil',
                    'flag': item.flags.png,
                    'code': item.cca3
                }
            }).sort((a, b) => a.name.localeCompare(b.name))
            .filter(item => item.continent == 'Antarctica')
            displayCountries(countriesArr)
        })
}