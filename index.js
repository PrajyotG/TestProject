const http = require("http")

const host = "0.0.0.0"
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("Hello, Ssup Homie");
});

server.listen(port, host, () => {
    console.log("Listening at :" +host+":" + port);
});