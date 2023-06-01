1. endpoint: localhost:8400/
method: GET
purpose: This is the home endpoint
response: welcome to Food Delivery App

2. endpoint:localhost:8400/api/register
method: POST
purpose: This endpoint is used to register a new user with hashing the password in the app
response:{
  "mssg": "user registered successfully",
  "user": {
    "name": "neha",
    "email": "neha@gmail.com",
    "password": "$2b$06$1qkWi.Hoaumo4ha0jH5S0.xzhx3fakbwS1FwmH8DZPO5fgENH0Gf6",
    "address": {
      "street": "2",
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India",
      "zip": "110037"
    },
    "_id": "647842516143eda3f5100017",
    "__v": 0
  }
}
status:201

3. endpoint: localhost:8400/api/login
method : POST
purpose : this endpoint is used to logged in user with the registered credentials and returning a JWT token.
response : {
  "mssg": "login successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODU2MDM4NjksImV4cCI6MTY4NTY5MDI2OX0.9BtrcORQsArWTWXeSRjKRBljaTTQszGLmQmbmS3sv3c"
}
status:201

4. endpoint: localhost:8400/api/user/647842516143eda3f5100017/reset
method :PATCH
response: user details updated
purpose : This endpoint is used to update the password of user with specific I'd that passed in params.
status:204

5. endpoint: localhost:8400/api/restaurants/
method: GET
response: {
  "name": "Taj Hotel",
  "address": {
    "street": "4",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "zip": "110061"
  },
  "menu": [
    {
      "name": "lassi",
      "description": "delicious taste",
      "price": 200,
      "image": "image1.png",
      "_id": "647854da2af9df2425174f37"
    }
  ],
  "_id": "647854da2af9df2425174f36",
  "__v": 0
}
purpose: This endpoint is used to add new restaurants 
status: 201

6. endpoint:localhost:8400/api/restaurants/
method: GET
response: [
  {
    "address": {
      "street": "4",
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India",
      "zip": "110061"
    },
    "_id": "647854da2af9df2425174f36",
    "name": "Taj Hotel",
    "menu": [
      {
        "name": "lassi",
        "description": "delicious taste",
        "price": 200,
        "image": "image1.png",
        "_id": "647854da2af9df2425174f37"
      }
    ],
    "__v": 0
  }
]
purpose: This endpoint is used to get the list of all restaurant
status: 200

7. endpoint: localhost:8400/api/restaurants/647854da2af9df2425174f36
method: GEt
response: {
  "address": {
    "street": "4",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "zip": "110061"
  },
  "_id": "647854da2af9df2425174f36",
  "name": "Taj Hotel",
  "menu": [
    {
      "name": "lassi",
      "description": "delicious taste",
      "price": 200,
      "image": "image1.png",
      "_id": "647854da2af9df2425174f37"
    }
  ],
  "__v": 0
}
purpose: This endpoint is used to get the details of restaurant w.r.t specific id
status: 200

8. endpoint: localhost:8400/api/restaurants/647854da2af9df2425174f36/menu
method: POST
response: new item added successfully
purpose: this endpoint is used to to add a new item to a specific restaurants menu identified by it id.
status: 201

9. endpoint: 
method: 
response: 
purpose: 
status: 

10. endpoint: 
method: 
response: 
purpose: 
status: 

11. endpoint: 
method: 
response: 
purpose: 
status: 