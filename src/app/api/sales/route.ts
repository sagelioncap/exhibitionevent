import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'sales.json');

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function getSales() {
  await ensureDataDir();
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSales(sales: unknown[]) {
  await ensureDataDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(sales, null, 2));
}

export async function GET() {
  const sales = await getSales();
  return NextResponse.json(sales);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { artPieceId, artPieceTitle, buyerName, buyerEmail, price, saleDate } = body;

  if (!artPieceId || !artPieceTitle || !buyerName || !buyerEmail || !price) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const sale = {
    id: Date.now().toString(),
    artPieceId,
    artPieceTitle,
    buyerName,
    buyerEmail,
    price: Number(price),
    saleDate: saleDate || new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  };

  const sales = await getSales();
  sales.push(sale);
  await saveSales(sales);

  return NextResponse.json(sale, { status: 201 });
}
