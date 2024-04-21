function parseBody(handler) {
    return (req, res) => {
        const chunks = [];
        req.on("data", (chunk) => {
          chunks.push(chunk);
        });
        req.on("end", () => {
          const b = Buffer.concat(chunks).toString()
          req.requestBody = b ? JSON.parse(b) : {}
          handler(req, res);
        });
    } 
  }


module.exports = {
    parseBody
}