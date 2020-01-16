import React from 'react';
import '../css/App.css';
import Category  from './Category';
import books from '../data/books.js'

console.log(books.results.lists);

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments : []
        };
        this.category = books.results.lists.map(el => {
          return (
              <Category 
                  key={el.list_id} 
                  list_name={el.list_name}
                  data_category={el}
              >
                
              </Category>
          );
        });
    }

    render () {
        return (
          <div className="App">
            {this.category}

          </div>
        );
    }
  
}

export default App;
