import React, { Component } from 'react';
import axios from 'axios';
import Category from './category';

class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories:''
    }
  }
  componentDidMount(){
    let self = this;
    axios.post('http://localhost:3001/api', {
      })
      .then(function (response) {
        self.setState({
          categories:response.data.categories
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  diClick(urlnya,ini){
    console.log(ini);
    let self = ini;
    axios.post('http://localhost:3001/api', {
      url:urlnya
      })
      .then(function (response) {
        self.state.categories = response.data.categories
        self.setState({
          categories:response.data.categories
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  sendurl(urlnya){

  }

  render(){
    if (this.state.categories !=='') {
      return(
         <div>
           {this.state.categories.map((category,index)=>{
             const self = this
             return(
               <Category key={index} category={category} klik={()=>this.diClick(category.sub,self)}/>
             )
           })}
         </div>
      )
    } else {
      return(
      <p>loading..</p>
      )
    }
  }
}

export default CategoryList;
