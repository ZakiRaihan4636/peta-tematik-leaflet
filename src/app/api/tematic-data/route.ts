// pages/api/tematic-data.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const regencies = await prisma.regencies.findMany({
      include: {
        polygons: true,
      },
    });

    // Mengambil data tematik seperti jumlah rumah sakit, populasi, dll
    const tematicData = regencies.map((regency) => ({
      id: regency.id,
      name: regency.name,
      totalPopulation: regency.total_population,
      totalHospital: regency.total_hospital,
      totalMosque: regency.total_mousque,
      totalPrivateCollege: regency.total_private_college,
      totalTourism: regency.total_tourism,
      totalTouristDestination: regency.total_destination,
      polygons: regency.polygons.map((polygon) => JSON.parse(polygon.polygon)),
    }));

    return new Response(
      JSON.stringify({
        message: 'Successfully fetched tematic data',
        data: tematicData,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch tematic data' }),
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
