const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIxx = await promiseTheaterIXX();
  const theaterVgc = await promiseTheaterVGC();
  
  const emosiTheaterIxx = theaterIxx.filter((element) => {
    return element.hasil === emosi;
  });
  const emosiTheaterVgc = theaterVgc.filter((element) => {
    return element.hasil === emosi;
  });
    return emosiTheaterIxx.length + emosiTheaterVgc.length;
};

module.exports = {
  promiseOutput,
};
