const express = require('express');
const fs = require("fs");
const path = require("path");
const app = express();
const proxy = require("http-proxy-middleware").createProxyMiddleware;

app.use(express.static(path.resolve(__dirname, "../dist/OnlineBank")));
app.use("/accounting", proxy(`http://10.245.29.170:8080/`));

app.get("*", function (req, res) {
    console.log(req);
    const html = fs.readFileSync(path.resolve(__dirname, "../dist/OnlineBank/index.html"), "utf-8");
    res.send(html);
}); 


app.listen(3030, () => console.log('Server started on port 3030'));