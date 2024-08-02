exports.name = '/images/itachi';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/itachi.json');
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