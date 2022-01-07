import prisma from "../../../helpers/client";

export default async function handler (req, res) {
  try {
    const courses = await prisma.courses.findFirst({
      where: {
        courseCode: 'COMP1511'
      }
    });
    res.status(200).json(courses)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}


