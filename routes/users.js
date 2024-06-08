const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users}, null, 4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
    const email = req.params.email;
  // Copy the code here
  res.send(users.filter(user => user.email == email));
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
    users.push({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        email:req.query.email,
        DOB:req.query.DOB,
    });
    res.send("The user " + req.query.firstName +" has been added.");
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    // Copy the code here
    const email = req.params.email;
    let filtered_users = users.filter(user => user.email == email);
    if (filtered_users.length > 0) {
        let user = filtered_users[0];
        let firstName = req.query.firstName;
        if (firstName) {
            user.firstName = firstName;
        }
        let lastName = req.query.lastName;
        if (lastName) {
            user.lastName = lastName;
        }
        let DOB = req.query.DOB;
        if (DOB) {
            user.DOB = DOB;
        }
        res.send(`User (email: ${email}) information has been updated`);
    } else {
        res.send(`Unable to find the user (email: ${email})`);
    }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    // Copy the code here
    const email = req.params.email;
    users = users.filter(user => user.email != email);
    res.send(`User (email: ${email}) has been deleted.`);
});

module.exports=router;
