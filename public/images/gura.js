exports.name = '/images/gura';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/gura.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: girl.length,
            author: 'TuanHung'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}