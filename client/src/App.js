import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import CurrentExhibitions from './components/CurrentExhibitions'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      exhibits: [],
      objects: [],
      inputSearchValue: '',
      dbItems: [],

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputSearchOnCahnge = this.handleInputSearchOnCahnge.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    axios('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=49525b3629ac5bb3d446da768b0305a7&page=1&per_page=10')
    .then((res) => {
      console.log('axios', res);
      this.setState((prevState) => {
        return{
          exhibits: res.data.exhibitions,
        }
      })
    }).catch((err) => {
      console.log(err)
    });

    axios('http://localhost:3001/api/planner')
    .then((res) => {
      this.setState((prevState) => {
        return{
          dbItems: res.data.data.data.items,
        }
      })
    })
  }

  handleInputSearchOnCahnge(event) {
    this.setState({
      inputSearchValue: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let keywords = encodeURI(this.state.inputSearchValue);
    let url = 'https://api.collection.cooperhewitt.org/rest/'
        url += '?method=cooperhewitt.search.collection&access_token='
        url += '49525b3629ac5bb3d446da768b0305a7&has_images=1&page=1&per_page=10'
        url += '&query='
        url +=  keywords
        url += '&description='
        url +=  keywords;
        //console.log('url', url);
    axios(url)
    .then((res) => {
      this.setState((prevState) => {
        return {
          objects: res.data.objects,
        }
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  handleAddItem(titleExh, urlImg, urlExh) {
    console.log('handleAddItem', titleExh, urlExh);
    const addItem = {
      title: titleExh,
      img_url: urlImg,
      exhibit_url: urlExh,
    }

    axios.post('http://localhost:3001/api/planner', addItem)
    .then((res) => {
      console.log('inside axios post ', res);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/current'
            render={(props) => <CurrentExhibitions
              exhibits={ this.state.exhibits }
              />
            }
          />
          <Route exact path='/search'
            render={(props) => <SearchForm
              handleSubmit={this.handleSubmit}
              inputSearchValue={ this.state.inputSearchValue }
              handleAddItem={ this.handleAddItem }
              handleInputSearchOnCahnge={ this.handleInputSearchOnCahnge }
              objects={ this.state.objects }
            />}
          />
          <Route exact path='/allItems'
            render={(props) => <ShowAlldb
              dbItems={ this.state.dbItems }
              />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
