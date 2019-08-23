module.exports=function(app) {
    var controller = {};
    var contato = app.models.contato;

    controller.salvaContato = function(req, res) {
        contato.create(req.body).then(
            function(contato) {
                res.status(201).json(contato)
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaContatos = function(req, res) {
      contato.find().exec().then(
        function(contatos) {
            res.status(200).json(contatos);
        }, function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
      );
    };

    controller.alteraContato = function(req, res) {
        var _id = req.body._id;
        contato.findByIdAndUpdate(_id, req.body).exec().then(
            function(contato) {
                res.status(200).json(contato);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeContato = function(req, res) {
        var _id = req.params.id;
        contato.remove({"_id": _id}).exec().then(
            function(contato) {
                res.status(204).end();
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemContato = function(req, res) {
        var _id = req.params.id;
        contato.findById(_id).exec().then(
            function(contato) {
                if(!contato) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(contato);
                }
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}