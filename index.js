// importa biblioteca http
var http = require('http');
// importa arquivo de configuração principal
var app = require('./config/express')();
// importa arquivo de configuração do banco
require('./config/database.js')('mongodb://127.0.0.1/meuBanco');
// cria servidor web / inicia a aplicação
http.createServer(app).listen(app.get('port'),
    function() {
        // mostra mensagem no console do terminal
        console.log('Express Server Escutando na porta '
        +app.get('port'));
    }
);