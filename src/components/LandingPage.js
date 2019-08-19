import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class LandingPage extends Component {
    state = {
      email: "",
      password: ""
    };
  
    
  
    render() {
    //   const { getFieldDecorator } = this.props.form;
      const { auth } = this.props;
      if (auth.uid) return <Redirect to="/" />;
  
      return (
        <div className="landingPage">
        
        </div>
      );
    }
  }
  
  const mapStateProps = state => {
    return {
    //   authError: state.auth.authError,
      auth: state.firebase.auth
    };
  };
  
//   const mapDispatchToProps = dispatch => {
//     // return {
//     //   signIn: creds => dispatch(signIn(creds))
//     // };
//   };
  
  export default 
    connect(
      mapStateProps,
      null
    )(LandingPage)
  