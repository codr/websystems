var http = require('http')

var options = {
    host: '127.0.0.1',
    port: 8123,
    path: 'large.jpg',
    method: 'GET'
}

// create a request object (passing in some options)
var request = http.request(options)

// set up an event listener to handle a response
request.on('response', function(response) {
    
    // we are expecting utf8 encoded data
    response.setEncoding('utf8')
    
    // set up an event listener to be called when each
    // chunk of data arrives
    response.on('data', function(chunk) {
       console.log('\tgot chunk')
    })
    
    // set up an event listener to be called when response
    // is complete
    response.on('end', function() {
       console.log('DONE')
    })
})

// set up an event listener to handle any error
request.on('error', function(e) {
    console.log('error: ' + e.message)
})

// complete the request
request.end()