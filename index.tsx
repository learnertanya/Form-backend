const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors");
const app = express();

// Parse URL-encoded data
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;


app.post("/register", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var phone_number = req.body.phone_number;
  var address_street = req.body.address_street;
  var address_city = req.body.address_city;
  var address_state = req.body.address_state;
  var postal_code = req.body.postal_code;
  var country = req.body.country;

  res.send("Form submitted successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on this ${PORT}`);
});
