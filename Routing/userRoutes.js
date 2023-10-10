const { createEmployee, getAllList, salaryMoreThan, experienceMoreThan, graduateAndExperience, updateSalary, deleteLastCompany } = require("../Controller/userController")

const routes = require("express").Router()


routes.post("/createemployee", createEmployee)
routes.get("/listemployee", getAllList)
routes.get("/salarymorethan", salaryMoreThan)
routes.get("/expmorethan", experienceMoreThan)
routes.get("/graduateexperience", graduateAndExperience)
routes.get("/updatesalary", updateSalary)
routes.get("/deletelastcompany", deleteLastCompany)

module.exports = routes