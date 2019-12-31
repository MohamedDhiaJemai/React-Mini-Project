import React, { Component } from 'react';
import Header from './Header';
import Elements from './Elements';

class ListShows extends Component {
    
    state = {
        list : []
    }

    componentDidMount(){

        const axios = require("axios");

        axios({
            "method":"GET",
            "url":"https://frecar-epguides-api-v1.p.rapidapi.com/",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"frecar-epguides-api-v1.p.rapidapi.com",
            "x-rapidapi-key":"d32501715dmshff22a1ddc88498cp166bb3jsn44be9e0a5138"
            }
            })
            .then((response)=>{
              console.log(response.data[0].imdb_id)
              this.setState({
                  list: response.data
              })
            })
            .catch((error)=>{
              console.log(error)
            })
    }


    render() {
        const {list} = this.state
        const showslist = list.map(list =>{
            return(
            <Elements val = {list} />
            )
        })
        return (
            <div>
                <table className="table">
                    <Header />
                    <tbody>
                        {showslist}
                    </tbody>
                    {showslist}
                </table>
            </div>
        );
    }
}

export default ListShows;