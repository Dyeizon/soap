const soap = require('soap');

const service = {
    MDCCalculator: {
        MDCPort: {
            CalculateMDC: function(args, callback) {
                const x = args.x;
                const y = args.y;

                var gcd = function(a, b) {
                    if (!b) {
                        return a;
                    }
                    
                    return gcd(b, a % b);
                }

                const mdc = gcd(x, y);

                const result = {
                    MDC: mdc,
                }

                callback(null, result);
            }
        }
    }
}

const xml = require('fs').readFileSync('mdc.wsdl', 'utf8');
const server = soap.listen({ port: 3000, path: '/mdc', xml: xml }, function() {
  console.log('SOAP server running at http://localhost:3000/mdc?wsdl');
});
