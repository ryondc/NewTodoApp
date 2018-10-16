import React from 'react';
import './FetchApi.css';
import { Button } from "../../button/button";


export class FetchApi extends React.Component{
  constructor(){
    super();
    this.state = {
      picture:[]
    }
  }

    fetchapi(event){
      event.preventDefault();
      fetch('https://dog.ceo/api/breeds/image/random/2')
      .then(Response => Response.json())
      .then(ParseJson =>
        {
          this.setState({
            picture:ParseJson.message[0]
          })
        })

    }

    clear(event){
      event.preventDefault();
      this.setState({
        picture:''
      })
    }

  render(){
    return(
      <div >
        <Button onClick={(event) => this.fetchapi(event)}> FetchApi</Button>
        <Button onClick={(event) => this.clear(event)}>Clear</Button>
        <div className="containerImg" >
          <img alt="" src={this.state.picture} />
        </div>

      </div>
    )
  }
}
