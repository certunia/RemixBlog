import { PrismaClient } from '@prisma/client'
import process from "process";

let db: PrismaClient

declare global {
    var __db: PrismaClient | undefined
}

if (process.env.NODE_ENV === 'production') {
    db = new PrismaClient()
    db.$connect()
} else {
    if (!global.__db) {
        global.__db = new PrismaClient()
        global.__db.$connect()
    }
    db = global.__db
}

export { db }
