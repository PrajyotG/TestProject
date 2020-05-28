const http = require("http")
const date = require("date-fns")

const host = "0.0.0.0"
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("Hello, how are you ?");
});

server.listen(port, host, () => {
    const dateStr = date.format(new Date(), "dd-MM-yyyy HH:mm:ss");
    console.log(dateStr + " Listening at :" +host+":" + port);
});