const handler = require('./controllers')

module.exports = function(app){
    app.get('/api/authors',(req,res)=>handler.getAll(req,res))
    app.get('/api/authors/:id',(req,res)=>handler.getOne(req,res))
    app.post('/api/authors',(req,res)=>handler.create(req,res))
    app.put('/api/authors/:id',(req,res)=>handler.update(req,res))
    app.delete('/api/authors/:id',(req,res)=>handler.destroy(req,res))

    app.get('/api/quotes',(req,res)=>handler.getAllQuotes(req,res))
    app.post('/api/quotes',(req,res)=>handler.createQuote(req,res))
    app.delete('/api/quotes/:quoteid/:authorid',(req,res)=>handler.destroyQuote(req,res))
    app.put('/api/quotes/:quoteid/:authorid',(req,res)=>handler.quoteVote(req,res))
}