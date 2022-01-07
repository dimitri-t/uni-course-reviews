import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';

import prisma from '../../helpers/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Post request to add a new review for a course
  try {
    const reviewData = JSON.parse(req.body);
    const savedReview = await prisma.courseReview.create({
      data: reviewData
    });
    res.status(200).json(savedReview); 
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
