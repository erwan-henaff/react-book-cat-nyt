import React from 'react';
import '../css/App.css';
import Category  from './Category';
// import books from '../data/books.js'
import api_key from '../env/env.js'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            articles : []
        };
    }

    async componentDidMount() {
      let url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=2018-09-12&api-key=" + api_key;
  
      const response = await fetch(url);
      const newBooks = await response.json();
      this.setState({ articles: newBooks.results.lists });
    }

    render () {

      const category = this.state.articles.map(el => {
          return (
              <Category 
                  key={el.list_id} 
                  list_name={el.list_name}
                  data_category={el}
              >
                
              </Category>
          );
        });

        return (
          <div className="App">
            {category}
          </div>
        );
    }
  
}

export default App;
