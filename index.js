const https = require("https");
setInterval(function () {
  https
    .get('https://holuserver.herokuapp.com/probando', (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        console.log(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}, 60000);
