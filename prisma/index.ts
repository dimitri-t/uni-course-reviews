import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const getCourses = await prisma.courses.findMany()
  console.log(getCourses)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })