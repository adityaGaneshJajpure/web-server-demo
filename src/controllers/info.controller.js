const os = require('os');

const info = async (req, res) => {
  console.log("request")
  const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  };

  res.status(200).json(currentOS);
};

module.exports = { info };
