export const sendContact = contact => {
  return new Promise((resolve, reject) => {
  return dispatch => {
    //console.log(contact);

    const addCustomerDoc =
    fetch('http://localhost:5001/portfolio-project-7e999/asia-northeast1/helloWorld2', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors' }   
        )
        .then(function(response) {
            console.log(response)
          }).catch(function(err) {
            console.log(err) // this won't trigger because there is no actual error
          });


    return dispatch({ type: "BUTTON_PRESSED"});
  };
})
}


