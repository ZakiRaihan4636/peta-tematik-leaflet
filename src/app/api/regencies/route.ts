// pages/api/regencies.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const regencies = await prisma.regencies.findMany({
      select: {
        id: true,
        name: true,
        alt_name: true,
        latitude: true,
        longitude: true,
      },
    });
    return new Response(
      JSON.stringify({
        message: 'Successfully fetched regencies data',
        data: regencies,
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
      JSON.stringify({ error: 'Failed to fetch regencies' }),
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
