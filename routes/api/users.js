const express = require('express')

const router = express.Router()

const uuid = require('uuid')

let users = require('../../users')

// Get all users
router.get('/', (req, res) => {
    res.json(users);
}
);

// Get user by id
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (!found){
        res.status(400).json({msg: `No user with the id of ${req.params.id}`})
    } else {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
    });


// Create user
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if (!newUser.name || !newUser.email){
        return res.status(400).json({msg: 'Please include a name and email'})
    }
    users.push(newUser)
    res.json(users)
})


// Update user
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (!found){
        res.status(400).json({msg: `No user with the id of ${req.params.id}`})
    } else {
        const updUser = req.body
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)){
                user.name = updUser.name ? updUser.name : user.name
                user.email = updUser.email ? updUser.email : user.email
                res.json({msg: 'User updated', user})
            }
        })
    }
    });



//Get single user
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (!found){
        res.status(400).json({msg: `No user with the id of ${req.params.id}`})
    } else {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
}
);

// Delete user
router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (!found){
        res.status(400).json({msg: `User deleted ${req.params.id}`})
    } else {
        res.json({msg: 'User deleted', users: users.filter(user => user.id !== parseInt(req.params.id))})
    }
    }); 



module.exports = router