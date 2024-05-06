const os = require('os');

const info = async (req, res) => {
  const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  };

  res.status(200).json(currentOS);
};

module.exports = { info };
