// import database from '../utils/database'
import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getCompanies = async () => database.Company.findMany()

export const getCompany = async (id) =>
  database.company.findUnique({ where: { companyId: id } })

export const addCompany = async (name) =>
  database.company.create({ data: { name } })
