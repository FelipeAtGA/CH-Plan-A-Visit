const axios = require('axios');

const museumAPIcontroller = {};

museumAPIcontroller.index = (req, res) => {
  axios(process.env.API_KEY)
  .then((response) => {
    res.json({
      data: response.data.exhibitions,
    })
  }).catch((err) => {
    console.log(err)
  });
}

museumAPIcontroller.search = (req, res) => {
  console.log('in museum controller keyword ', req.query.keys)
  let url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.collection&access_token=${process.env.SECRET}&has_images=1&page=1&per_page=10&query=${req.query.keys}&description=${req.query.keys}`;
  console.log('url in museum controller ', url)
    axios(url)
    .then((response) => {
      res.json({
        objects: response.data.objects,
      })
    }).catch((err) => {
      console.log(err);
    });
}

module.exports = museumAPIcontroller;
