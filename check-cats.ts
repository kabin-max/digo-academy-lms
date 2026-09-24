import { PrismaClient } from './lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = process.env['DIRECT_URL'] ?? process.env['DATABASE_URL'];
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: connectionString! }) });

async function main() {
  const cats = await db.category.findMany();
  console.log(cats);
}

main().then(() => db.$disconnect()).catch(console.error);
