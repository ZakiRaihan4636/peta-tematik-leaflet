// pages/api/districts.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const districts = await prisma.districts.findMany();
    return new Response(
      JSON.stringify({
        message: 'Successfully fetched districts data',
        data: districts,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch districts' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
