const axios = require('axios');

const museumAPIcontroller = {};

museumAPIcontroller.index = (req, res) => {
  axios('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=49525b3629ac5bb3d446da768b0305a7&page=1&per_page=10')
  .then((response) => {
    res.json({
      data: response.data.exhibitions,
    })
  }).catch((err) => {
    console.log(err)
  });
}

module.exports = museumAPIcontroller;
