const http = require('http')

const {resources, readResource} = require('./resources.js')
const {parseBody} = require('./bodyParser.js')
const {router} = require('./router.js')
const {cors} = require('./cors.js')

const staticDir = "assets"

function handlerHello(_request, response) {
  response.end(JSON.stringify({hello: "hello"}))
}

function handlerSum({requestBody}, response) {
  let {a,b} = requestBody
  console.log(requestBody)
  response.end(JSON.stringify({result: a + b}))
}

function handlerRoot(req, resp) {
  const index =  readResource(`${staticDir}/index.html`)
  resp.writeHeader(200, {"Content-Type": "text/html"});
  resp.write(index)
  resp.end(); 
}

const routes = {
  "/": {"get": handlerRoot},
  "/api/hello" : {"get" : handlerHello},
  "/api/sum" : {"post" : handlerSum}
}

function defaultHandler (request, response) {
  response.writeHead(302, {'Location': '/'});
  response.end();
}

function log(handler) {
  return (req, resp) => {
    console.log(`url ${req.url}, method ${req.method}`)
    handler(req, resp)
  }
}

const app = log(cors(resources(parseBody(router(defaultHandler, routes)), staticDir)))
const server = http.createServer(app)

server.listen(9000, () => {
  console.log("Server is running on Port 9000");
});
