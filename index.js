const request = require("request");
const CronJob = require("cron").CronJob;
const job = new CronJob(
  "0 */1 * * * *",
  function () {
    request(
      {
        url: "",
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10,
      },
      function (error, response, body) {
        if (!error) {
          console.log("sucess!");
        } else {
          console.log("error " + response.statusCode);
        }
      }
    );
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();
