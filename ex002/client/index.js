var soap = require('soap');
var url = 'http://localhost:8080/mdc.wsdl';

soap.createClient(url, function(err, client) {
  if (err) console.log(err)
  console.log(client)
});