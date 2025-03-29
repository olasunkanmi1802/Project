const os = require("os");

function logSystemInfo() {
  console.log("Operating System:", os.type());
  console.log("Architecture:", os.arch());
  console.log("Total Memory:", os.totalmem());
  console.log("Free Memory:", os.freemem());
  console.log("CPU Info:", os.cpus());
}

module.exports = logSystemInfo;
