// pages/api/regency-poligons.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const polygons = await prisma.regency_poligons.findMany();
    return new Response(
      JSON.stringify({
        message: 'Successfully fetched regency polygons data',
        data: polygons,
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
      JSON.stringify({ error: 'Failed to fetch regency polygons' }),
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
