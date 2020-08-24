module.exports = (req, res, next) => {
    req.url = req.url.slice(1, req.url.length);
    if(req.url.indexOf("/") != -1 ){
        req.url = req.url.slice(req.url.indexOf("/"), req.url.length);
    } else {
        req.url = "/";
    }
    console.log("Requested: " + req.url);
    next();
}