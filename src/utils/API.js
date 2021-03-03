const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "ABC96057C4554BD788FAFF40D09096C0",
  type: "product",
  amazon_domain: "amazon.com",
  asin: "B073JYC4XM"
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {

    // print the JSON response from Rainforest API
    console.log(JSON.stringify(response.data, 0, 2));

  }).catch(error => {
    // catch and print the error
    console.log(error);
  })
