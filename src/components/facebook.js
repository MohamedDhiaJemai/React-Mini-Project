import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import ListShows from './ListShows'

class facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };

      responseFacebook = response => {
        // console.log(response);
    
        this.setState({
          isLoggedIn: true,
          userID: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url
        });
      };

      componentClicked = () => console.log("clicked");

    render() {

        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
              <div>
                  <div
                    style={{
                      width: "400px",
                      margin: "auto",
                      padding: "20px"
                    }}
                  >
                    
                    <h2>Welcome {this.state.name}</h2>
                    <p><img src={this.state.picture} alt={this.state.name} /></p>
                    Email: {this.state.email}
                  </div>
                  <ListShows />
                </div>
              );
        } else{
            fbContent = ( 
            <FacebookLogin
                appId="593111474806339"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
            );
        }

        return <div>{fbContent}</div>;
    }
}

export default facebook;