const https = require("https");
setTimeout(function () {
  https
    .get(process.env.url, (resp) => {
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
}, 60000 * 27);
