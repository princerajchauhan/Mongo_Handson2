

const client = require("../DB/connection")
const Data = require("../Data")

const db = client.db("Human_Resource_2")
const collection = db.collection("employee")


const createEmployee = (req, res) =>{
    try {
        collection.insertMany(Data, (err, result) =>{
            if (err) throw err
            console.log({msg: "Employee created", result})
        })
        res.status(200).send({msg: "All Employee created"})
    } catch (error) {
        res.status(200).send({msg: "All Employee created"})
    }
}

const getAllList = async(req, res) =>{
    try {
        const result = await collection.find().toArray()
        res.status(200).send({msg: "Employee all list found", result})
    } catch (error) {
        res.status(500).send({msg: "Employee list not found"})
    }
}

const salaryMoreThan = async(req, res) =>{
    try {
        const result = await collection.find({salary: {$gt: "30000"}}).toArray()
        res.status(200).send({msg: "Founded all List of employee having salary more than 30000", result})
    } catch (error) {
        res.status(500).send({msg: "Not found the employee having salary greater than 30000"})   
    }
}

const experienceMoreThan = async(req, res) =>{
    try {
        const result = await collection.find({overallExp: {$gt: '2'}}).toArray()
        res.status(200).send({msg: "Founded employee having experience more than 2 years", result})
    } catch (error) {
        res.status(500).send({msg: "Not founded employee experience more than 2 years"})
    }
}

const graduateAndExperience = async(req, res) =>{
    try {
        const result = await collection.find({yearGrad: {$gt: '2015'}, overallExp: {$gt: '1'}}).toArray()
        res.status(200).send({msg: "Foundex all employee with experience more than 1 year and graduated after 2015", result})
    } catch (error) {
        res.status(500).send({msg: "Not found employee with experince more than 1 year and graduated after 2015"})
    }
}

const updateSalary = async(req, res) =>{
    try {
        const result = await collection.updateMany({salary: {$gt: "70000"}}, {$set: {salary: "65000"}}, {new: true})
        res.status(200).send({msg: "Employee salary updated", result})
    } catch (error) {
        res.status(500).send({msg: "Not updated employee salary"})
    }
}

const deleteLastCompany = async(req, res) =>{
    try {
        const result = await collection.deleteMany({lastCompany: 'Y'})
        res.status(200).send({msg: "Employee deleted having lastCompany: Y", result})
    } catch (error) {
        res.status(500).send({msg: "Employee not deleted"})
    }
}

module.exports = {getAllList, salaryMoreThan, experienceMoreThan, graduateAndExperience, createEmployee, updateSalary, deleteLastCompany}