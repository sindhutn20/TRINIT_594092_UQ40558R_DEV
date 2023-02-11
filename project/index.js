const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbconnect = require('./dbconnect.js');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())

let employees = [
    { id: 1, name: "Afroz", dept: "CSE", address: "Kurnool" },
    { id: 2, name: "Nagesh", dept: "IT", address: "Mahaboobabad" },
    { id: 3, name: "VDS Krishna", dept: "CSE", address: "Hyderabad" },
]

app.get('/readUsers', async (req, res) => {
    let result = await dbconnect.readUsers();
    res.json(result);
})

app.get('/readUserById/:_id', async (req, res) => {
    let result = await dbconnect.readUserById(parseInt(req.params._id));
    res.json(result);
})


app.post('/addUser', async (req, res) => {
    let result = await dbconnect.createUser(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.put('/updateUser', async (req, res) => {
    let result = await dbconnect.updateUser(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.delete('/deleteUser', async (req, res) => {
    let result = await dbconnect.deleteUser(parseInt(req.body._id));
    res.json({ result, message: `Record with id ${req.body._id} is deleted successfully` });
})

app.get('/api/employees', (req, res) => {
    res.json(employees);
})

app.get('/api/employees/:id', (req, res) => {
    console.log(req.params.id);
    const employee = employees.find(employee => employee.id === parseInt(req.params.id))
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} does not exists` })
    }
    res.json(employee);
})

app.post('/api/employees', (req, res) => {
    console.log(req.body);
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        dept: req.body.dept,
        address: req.body.address
    }
    employees.push(employee);
    res.json(employee);
})

app.put('/api/employees/:id', (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id))
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} does not exists` })
    } else {
        employee.name = req.body.name;
        employee.dept = req.body.dept;
        employee.address = req.body.address;
    }
    res.json(employee);
})

app.patch('/api/employees/:id', (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id))
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} does not exists` })
    } else {
        // employee.name = req.body.name;
        // employee.dept = req.body.dept;
        employee.address = req.body.address;
    }
    res.json(employee);
})

app.delete('/api/employees/:id', (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id))
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} does not exists` })
    } else {
        var index = employees.indexOf(employee);
        employees.splice(index, 1);
        res.json(employee);
    }
})
app.listen(3000, () => console.log("server started at port 3000"))