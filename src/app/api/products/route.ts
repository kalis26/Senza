export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tag = searchParams.get("tag");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    const filters: any = {};

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.gte = parseFloat(minPrice);
      if (maxPrice) filters.price.lte = parseFloat(maxPrice);
    }

    const whereClause = {
      ...(tag
        ? { tags: { some: { name: { equals: tag, mode: "insensitive" } } } }
        : {}),
      ...filters,
    };

    const products = await prisma.product.findMany({
      where: whereClause,
      include: { tags: true },
    });

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
