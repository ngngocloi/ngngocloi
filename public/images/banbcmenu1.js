exports.name = '/images/banbcmenu1';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/banbcmenu1.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            author: 'TuanHung'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}