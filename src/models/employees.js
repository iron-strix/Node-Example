// import database from '../utils/database'
import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getEmployees = async () => database.employee.findMany()

export const getEmployee = async (id) => {
  database.employee.findUnique({ where: { employeeId: id } })
}

export const createEmployee = async (employeeData, departmentId) => {
  database.employee.create({ data: { ...employeeData, departmentId } })
}

export const updateEmployee = async (id, employeeData, departmentId) => {
  database.employee.update({
    where: { employeeId: id },
    data: { ...employeeData, departmentId },
  })
}

export const deleteEmployee = async (id) => {
  database.employee.delete({ where: { employeeId: id } })
}
