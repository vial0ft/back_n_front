const fs = require('fs');

const supportedExt = [".js", ".css", ".html", ".svg"]

function readResource(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
      } catch (err) {
        console.error(`resource ${filePath} not found`);
        return null;
      }
}

function resources(handler, staticDir){
 return (req, res) => {
    const {url, method} = req
    console.log(url)
    if(method === 'GET'
        && supportedExt.some(e => url.endsWith(e))) {
       const resource = readResource(`${__dirname}/${staticDir}${url}`)
       if (resource) {
        res.end(resource)
       } else {
        res.statusCode = 404
        res.end('Status: Not Found')
       }
    } else {
        handler(req, res)
    }
    
 }
}

module.exports = {
    resources,
    readResource
}