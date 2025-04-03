// Al cargar el DOM, la aplicación tiene que llamar una función que realiza una solicitud a la API para obtener información
//  - fetch() y async/await
// Ordenar los paises en orden alfabético --> repasar el método sort()
// Información detallada en una ventana flotante: incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.
//  - Botón cerrar ventana flotante: Tendrá un botón cerrar para hacer desaparecer esa información.
//  - se quedará fijo y centrado hasta que se cierre
// End point: https://restcountries.com/v3/all

const getFlags = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3/all')
        if (!response.ok) {
            throw new Error ('Ha surgido un problema', response.status)
        }
        const data = await response.json()
        console.log(data)

    }
    catch (error) {
        console.log('Error al obtener los datos', error)

    }
}
getFlags()