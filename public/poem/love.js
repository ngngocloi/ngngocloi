exports.name = '/poem/love';
exports.index = async(req, res, next) => {
    try {
        const love = require('./data/love.json');
        var image = love[Math.floor(Math.random() * love.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: love.length,
            author: 'Tuấn Hưng'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}