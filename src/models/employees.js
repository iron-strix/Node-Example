// import database from '../utils/database'
import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getEmployees = async (skip, take) => {
  const count = await database.Employee.count()
  const employees = await database.Employee.findMany({
    skip,
    take,
  })

  return { count, employees }
}

export const getEmployee = async (id) =>
  database.Employee.findUnique({ where: { employeeId: id } })

export const addEmployee = async (employeeData) =>
  database.Employee.create({ data: { ...employeeData } })

export const updateEmployee = async (id, employeeData) => {
  const employee = await getEmployee(id)
  if (employee) {
    return database.Employee.update({
      where: { employeeId: id },
      data: { ...employee, ...employeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteEmployee = async (id) =>
  database.Employee.delete({ where: { employeeId: id } })
