import React, { Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''}
  }
  //only inside the constructor function do we change our state how we do with
  // this.state = {}


  render() {
    return (
      <div>
           <input
              value= {this.state.term}
             type="text" onChange={event => this.setState({term:event.target.value})}/>

     </div>
   )
  }


}


export default SearchBar;
