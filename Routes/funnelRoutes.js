var express = require('express');

var routes = function(Funnel){
    var funnelRouter = express.Router();

    funnelRouter.route('/')
        .post(function(req, res){
            var funnel = new Funnel(req.body);
            funnel.save();
            res.status(201).send(funnel);
        })
        .get(function(req, res){
            console.log("Inside Funnel Get Data");
            var query = {};
            // if(req.query.genre)
            // {
            //     query.genre = req.query.genre;
            // }

            Funnel.find(function(err, funnel){              
                if(err)
                    res.status(500).send(err);
                else
                    res.json(funnel);
            });
        });

    funnelRouter.use('/:funnelId', function(req,res, next){
        Funnel.findById(req.params.funnelId, function(err,funnel){
            if(err)
                res.status(500).send(err);
            else if(funnel)
            {
                req.funnel = funnel;
                next();
            }
            else
            {
                res.status(404).send('no funnel found');
            }
        });
    });

    funnelRouter.route('/:funnelId')
        .get(function(req,res){
            res.json(req.funnel);
        })
        .put(function(req,res){
            req.funnel.title = req.body.title;
            req.funnel.author = req.body.author;
            req.funnel.genre = req.body.genre;
            req.funnel.read = req.body.read;
            req.funnel.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.funnel);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.funnel[p] = req.body[p];
            }

            req.funnel.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.funnel);
                }
            });
        })
        .delete(function(req,res){
            req.funnel.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return funnelRouter;
};

module.exports = routes;
