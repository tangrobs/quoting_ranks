const Authors = require('./mongoose').Authors
const Quotes = require('./mongoose').Quotes

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    destroy: destroy,
    createQuote: createQuote,
    destroyQuote: destroyQuote,
    getAllQuotes: getAllQuotes,
    quoteVote: quoteVote
}
function quoteVote(req,res){
    // Quotes.findByIdAndUpdate(req.params.quoteid,{$inc:{votes:1}},{new:true})
    //     // .then(data=>{
    //     //     console.log(data);
    //     //     return Authors.findByIdAndUpdate(req.params.authorid,{$set:{quotes:}})
    //     // })
    //     .then(data=>res.json(data))
    //     .catch(err=>res.json(err))
    Authors.findById(req.params.authorid)
        .then(author=>{
            //console.log(author.quotes);
            for(let quote of author.quotes){
                if(quote._id == req.params.quoteid){
                    quote.votes += req.body.vote
                }
            }
            return author.save()
        })
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}
function getAllQuotes(req,res){
    Quotes.find({})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}
function createQuote(req,res){
    Quotes.create({quote: req.body.quote})
        .then(data=>Authors.findByIdAndUpdate(req.body.id, {$push: {quotes: data}},{new: true}))
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}
function destroyQuote(req,res){
    Authors.findByIdAndUpdate(req.params.authorid, {$pull:{quotes:{_id:req.params.quoteid}}},{new:true})
        .then(()=>Quotes.findByIdAndRemove(req.params.quoteid))
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function getAll(req,res){
    Authors.find({},null,{sort:{name:1}})
        .then(data=>res.json({authors:data} ))
        .catch(err=>res.json(err))
}

function getOne(req,res){
    Authors.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function create(req,res){
    Authors.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function update(req,res){
    Authors.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function destroy(req,res){
    Authors.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}