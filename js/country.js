const body = document.body;
const switcher = document.querySelector('#switch');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const country = document.querySelector('#country');
let singleCountry = new URLSearchParams(window.location.search).get("country");
let countriesArr = [];
let countryArr = [];

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

const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesArr = data.map(item => {
                return [item.cca3, item.name.common]
            })
            console.log(countriesArr)

            fetch(`https://restcountries.com/v3.1/name/${singleCountry}`)
            .then(response => response.json())
            .then(data => {
                document.title = `${singleCountry} - World Countries`

                const borders = arr => {
                    let newArr = [], coun = '';
                    for (let item of arr) {
                        coun = countriesArr.filter(a => a[0] === item)
                        newArr.push(coun[0][1])
                    }
                    return newArr
                }

                countryArr = data.map(item => {
                    const lang = obj => {
                        let arr = Object.entries(obj), newArr = [];
                        for (let item of arr) {
                            newArr.push(item[1])
                        }
                        return newArr.join(', ')
                    }
                    
                    const cur = obj => {
                        let arr = Object.entries(obj), newArr = [];
                        for (let item of arr) {
                            newArr.push(item[1].name)
                        }
                        return newArr.join(', ') 
                    }
                    
                    return {
                        'commonName': item.name.common,
                        'nativeName': Object.entries(item.name.nativeName)[0][1].common,
                        'population': item.population.toLocaleString(),
                        'region': item.region,
                        'subRegion': item.subregion,
                        'continent': String(item.continents),
                        'capital': String(item.capital),
                        'tld': String(item.tld),
                        'currencies': cur(item.currencies),
                        'languages': lang(item.languages),
                        'borders': borders(item.borders),
                        'flag': item.flags.png
                    }
                })
                console.log(countryArr)
                displayCountry(countryArr)
            })
        })
}

fetchCountries();

const displayCountry = arr => {
    const nameAddress = str => str.replace(' ', '_');
    const borderBtns = () =>{
        let bCBtn = ``;
        for (let i = 0; i < arr[0].borders.length; i++) {
            bCBtn +=    `<a href="country.html?country=${nameAddress(arr[0].borders[i])}" class="text-decoration-none m-0 p-0">
                            <button class="bc rounded m-0 py-1 px-3 me-1">
                                <p class="fs-small fw-600 opacity-9 m-0 p-0">${arr[0].borders[i]}</p>
                            </button>
                        </a>`
        }
        return bCBtn;
    }

    card = `<div class="flag ratio ratio-16x9">
                <img src="${arr[0].flag}" alt="Flag of ${arr[0].commonName}" class="img-fluid">
            </div>
            <div class="details h-100 d-flex align-items-center">
                <div class="details-wrap">
                    <h6 class="country-name h3 fw-800 mb-4">${arr[0].commonName}</h6>
                    <div class="detail-columns my-3">
                        <div class="column1">
                            <p class="fw-600 fs-small mb-2">Native Name: <span class="native_name fw-300 opacity-9">${arr[0].nativeName}</span></p>
                            <p class="fw-600 fs-small mb-2">Population: <span class="population fw-300 opacity-9">${arr[0].population}</span></p>
                            <p class="fw-600 fs-small mb-2">Region: <span class="region fw-300 opacity-9">${arr[0].region}</span></p>
                            <p class="fw-600 fs-small mb-2">Sub-Region: <span class="sub-region fw-300 opacity-9">${arr[0].subRegion}</span></p>
                            <p class="fw-600 fs-small mb-3">Capital: <span class="capital fw-300 opacity-9">${arr[0].capital}</span></p>
                        </div>
                        <div class="column2">
                            <p class="fw-600 fs-small mb-2">Top Level Domain: <span class="tld fw-300 opacity-9">${arr[0].tld}</span></p>
                            <p class="fw-600 fs-small mb-2">Currencies: <span class="currencies fw-300 opacity-9">${arr[0].currencies}</span></p>
                            <p class="fw-600 fs-small mb-2">Languages: <span class="languages fw-300 opacity-9">${arr[0].languages}</span></p>
                        </div>
                    </div>
                    <div class="borders d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-4 mt-lg-5 mb-5 mb-lg-0">
                        <p class="fw-600 m-0 mb-2 mb-lg-0">Border Countries: </p>
                        <div id="bcs" class="border-countries ms-0 ms-lg-3">
                            ${borderBtns()}
                        </div>
                    </div>
                    
                </div>
            </div>`

    country.innerHTML = card;    
}