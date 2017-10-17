import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import './App.css';

/* COMPONENTS */
import Header             from './components/Header';
import Footer             from './components/Footer';
import SearchForm         from './components/SearchForm';
import CurrentExhibitions from './components/CurrentExhibitions';
import ShowAlldb          from './components/ShowAlldb';
import ViewSingleItem     from './components/ViewSingleItem';
import Home               from './components/Home';
import About              from './components/About';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
              exhibits: [],
               objects: [],
      inputSearchValue: '',
               dbItems: [],
            isViewItem: false,
            singleItem: [],
            addComment: '',
       inputAddComment: '',
    }
    this.handleSubmit               = this.handleSubmit.bind(this);
    this.handleInputSearchOnCahnge  = this.handleInputSearchOnCahnge.bind(this);
    this.handleAddItem              = this.handleAddItem.bind(this);
    this.handleDeleteItem           = this.handleDeleteItem.bind(this);
    this.addItemToArr               = this.addItemToArr.bind(this);
    this.handleViewSingleItem       = this.handleViewSingleItem.bind(this);
    this.handleUpdate               = this.handleUpdate.bind(this);
    this.handleInputCommentOnChange = this.handleInputCommentOnChange.bind(this);
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
        console.log('didMount all ', res.data.data.items)
        return{
          dbItems: res.data.data.items,
        }
      })
    })
  }

  handleInputSearchOnCahnge(event) {
    this.setState({
      inputSearchValue: event.target.value,
    })
  }

  handleInputCommentOnChange(event) {
    this.setState({
      inputAddComment: event.target.value,
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
    axios(url)
    .then((res) => {
      if(res.data.objects.length === 0){
        window.alert('No such keywords exit in the database.\nPlease enter new keywords');
        this.setState({
          inputSearchValue: '',
        })
      }else{
        this.setState((prevState) => {
          return {
            objects: res.data.objects,
          }
        })
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  addItemToArr(res) {
      let item = res;
      let oldDbItems = this.state.dbItems;
      let tempArr = [];
      oldDbItems.forEach(d => tempArr.push(d));
      tempArr.push(item);
      return tempArr;
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
      let tempArr = this.addItemToArr(res.data.data.data);
      this.setState({
        dbItems: tempArr,
      })
    }).catch(err => console.log(err));
  }

  handleUpdate(id) {
    console.log('handleUpdate ', this.state.inputAddComment)
    let body = {comment: this.state.inputAddComment}
    console.log('body ', body)
    axios.put(`http://localhost:3001/api/planner/${id}`, body)
    .then((res) => {
      let records = this.state.dbItems.map( d => {
        console.log('res ', res.data.data.data);
        if(d.id === res.data.data.data.id) {
          console.log('d ', d)
          d.comment = res.data.data.data.comment
          return d;}
        else { return d }
      })
      console.log('records ', records);
      this.setState({
        dbItems: records,
        inputAddComment: '',
      })

    })
  }

  handleDeleteItem(id) {
    axios.delete(`http://localhost:3001/api/planner/${id}`)
    .then((res) => {
      let dbItems = this.state.dbItems;
      let newDBitems = [];
      dbItems.forEach((item) => {
        if(item.id !== id) {
          newDBitems.push(item);
        }
      });
      this.setState((prevState) => {
        return {
          dbItems: newDBitems,
        }
      });
    })
    .catch((err) => console.log(err));
  }

  handleViewSingleItem(id) {
    console.log('handleViewSingleItem ', id);
    const item = this.state.dbItems.filter((item) => {
      let viewItem = item.id;
      return( viewItem === id);
    });
    this.setState({
      singleItem:item,
    })
    this.props.history.push(`/viewsingleitem/${id}`)
  }

  render() {
    return (
      <div>
        <Header />
        <main>
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
                handleDeleteItem={ this.handleDeleteItem }
                handleViewSingleItem={this.handleViewSingleItem}
                />}
            />
            <Route exact path='/viewsingleitem/:id'
              render={(props) => <ViewSingleItem
                viewItem={ this.state.singleItem }
                addComment={ this.state.addComment }
                handleUpdate={ this.handleUpdate }
                inputAddComment={ this.state.inputAddComment }
                handleInputCommentOnChange={ this.handleInputCommentOnChange }
                /> }
            />
            <Route exact path='/about'
              render={(props) => <About
              />}
            />
            <Route exact path='/' component={ Home } />
            <Redirect to='/' component={ Home } />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
