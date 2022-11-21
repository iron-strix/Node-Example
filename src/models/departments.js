// import database from '../utils/database'
import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getDepartments = async () => database.Department.findMany()

export const getDepartment = async (id) =>
  database.Department.findUnique({ where: { departmentId: id } })

export const addDepartment = async (companyData) =>
  database.Department.create({ data: { ...companyData } })
