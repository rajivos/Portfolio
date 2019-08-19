import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    // const { auth } = this.props;

    return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' component={LandingPage} />
        {/* <ProtectedRoute isAllowed = {auth.uid} exact path='/' component={ReviewForm} />
        <ProtectedRoute isAllowed = {auth.uid} exact path='/new-review' component={ReviewForm} />
        <ProtectedRoute isAllowed = {auth.uid} exact path='/review-form-success' component={SuccessReviewForm} />
        <ProtectedRoute isAllowed = {auth.uid} exact path='/all-photos' component={AllPhotos} />            
        <ProtectedRoute isAllowed = {auth.uid} exact path='/settings' component={Settings} />            
        <ProtectedRoute isAllowed = {auth.uid} exact path='/debug' component={Debug} />            
        <ProtectedRoute isAllowed = {auth.uid} exact path='/sms-campaign' component={TargetCustomerPage} />             */}
        {/* <Route path='/signin' component={SignIn} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}
}

const mapStateToProps = (state) => {
  return{
      auth:state.firebase.auth,
  }
}

export default connect(mapStateToProps, null)(App);
