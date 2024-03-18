var soap = require('soap')
var url = 'https://gist.github.com/fabricioifc/bf6ccecd92d2aefc7362bdce5342f2c2#file-mdc-wsdl'

soap.createClient(url, (err, client) => {
    client.Add({intA: 12, intB: 42}, (err, result) => {
        if(err) return console.log(err);
    console.log(client);
    })
})