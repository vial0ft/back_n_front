
function isPreflight(req) {
    return req.method == "OPTION"
}

function setHeaders(resp) {
    resp.setHeader("Access-Control-Allow-Origin", "*")
    resp.setHeader("Access-Control-Allow-Headers", "*")
    resp.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
}

function cors(handler) {
    return (req, resp) => {
        if(isPreflight(req)) {
            setHeaders(resp)
            resp.statusCode = 200
            resp.end(); 
        } else {
            setHeaders(resp)
            handler(req, resp)
        }
    }
}

module.exports = {
    cors
}