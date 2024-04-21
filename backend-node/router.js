function router (handler, routes) {
    return (req, res) => {
      const {url, method} = req
      console.log(`router: ${url} ${method}`)
      const route = routes[url]?.[method.toLowerCase()]
      console.log(route)
      if (route) {
        route(req, res)
      } else {
        handler(req, res)
      }
    }
  }


module.exports = {
    router
}