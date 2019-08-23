module.exports = function (app) {
    var controller = app.controllers.contato;
    app.post('/contatos', controller.salvaContato);
    app.get('/contatos', controller.listaContatos);
    app.put('/contatos', controller.alteraContato);
    app.delete('/contatos/:id', controller.removeContato);
    app.get('/contatos/:id', controller.obtemContato);
};