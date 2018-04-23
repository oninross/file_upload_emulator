const express = require('express');
const app = express();
const allowCrossDomain = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With,  Cache-Control, Content-Type, Accept, Authorization");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

// default options
app.use(allowCrossDomain);

app.post('/upload', function (req, res) {
    console.log('"File uploaded!"');

    res.send('File uploaded!');
});

app.listen(process.env.PORT || 8888, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
