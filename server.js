var connect = require('connect');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static('./'))
    .use( 
        function(req, res) {
            res.end('hello world\n');
        }
    );

connect.createServer(app).listen(5000);
