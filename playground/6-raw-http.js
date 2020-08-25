const https = require('https')

const url = 'https://api.weatherstack.com/current?access_key=1b3b1f0fba26d786af7452c839f95291&query=40,-75&units=f';

const request = https.request(url, (response) => {
    // need this to store outside inner scope
    let data = ''

    // gets chunk of data?
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    // just shows it's done
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end();