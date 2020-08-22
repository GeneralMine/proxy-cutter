module.exports = (req, res, next) => {
    req.url = req.url.slice(1, req.url.length);
    req.url = req.url.slice(req.url.indexOf("/"), req.url.length);
    console.log(req.url);
    next();
}