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

museumAPIcontroller.search = (req, res) => {
  console.log('in museum controller keyword ', req.query.keys)
  let url = 'https://api.collection.cooperhewitt.org/rest/'
    url += '?method=cooperhewitt.search.collection&access_token='
    url += '49525b3629ac5bb3d446da768b0305a7&has_images=1&page=1&per_page=10'
    url += '&query='
    url +=  req.query.keys
    url += '&description='
    url +=  req.query.keys;
    axios(url)
    .then((response) => {
      if(response.data.objects.length === 0){
        window.alert('No such keywords exit in the database.\nPlease enter new keywords');
        this.setState({
          inputSearchValue: '',
        })
      }else{
          res.json({
            objects: response.data.objects,
          })
      }
    }).catch((err) => {
      console.log(err);
    });
}

module.exports = museumAPIcontroller;
