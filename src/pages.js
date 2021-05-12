const orphanages = require('./database/fakedata.js');

module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index',{city})
    },
    
    orphanages(req, res) {
        return res.render('orphanages', {orphanages})
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }
}