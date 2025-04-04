// Al cargar el DOM, la aplicación tiene que llamar una función que realiza una solicitud a la API para obtener información
//  - fetch() y async/await
// Ordenar los paises en orden alfabético --> repasar el método sort()
// Información detallada en una ventana flotante: incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.
//  - Botón cerrar ventana flotante: Tendrá un botón cerrar para hacer desaparecer esa información.
//  - se quedará fijo y centrado hasta que se cierre
// End point: https://restcountries.com/v3/all

// ---- NOTAS DE DATA ----

// Una petición fetch a https://restcountries.com/v3/all
// Aquí pondremos los paises id: countries-list
// ordenar los elementos por orden alfabético sort()
/* al clickar en el elemento sale un modal/capa flotante con estos datos:
- país
- la capital
- la población y 
- el lado de la carretera donde se circula
*/ 
// botón de cerrar el flotante

//Async/await, fetch, usar sort, ... 

const countriesList = document.getElementById('countries-list');
//console.log(countriesList)

const getFlags = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if (!response.ok) {
            throw new Error ('Ha surgido un problema', response.status)
        }
        const countries = await response.json()
        orderedCountries(countries)
        const pintado = countries.map(country => {
            const names = country.name.common
            const flags = country.flags.png
            countriesList.innerHTML += `
            <div class="card">
            <img src=${flags} alt=${names}/>
            <p>${names}</p>
            </div>
            `
        })



        
    }
    catch (err) {
        console.error(err)
    }
}
getFlags()

const orderedCountries = (countries) => {
    countries.sort((a, b) => {
        const nameA = a.name.common.toUpperCase()
        const nameB = b.name.common.toUpperCase()
        return nameA.localeCompare(nameB)
    })
}







/*
const { name: {common}, flags } = country
console.log({ common, flags })
*/
