export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: slugify(data.name, { lower: true }),
        description: data.description,
        price: data.price,
        categoryID: data.categoryID,
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

    let category = searchParams.get("category") ?? undefined;
    if (!category || category.toLowerCase() === "all") category = undefined;

    const minPriceRaw = searchParams.get("minPrice");
    const maxPriceRaw = searchParams.get("maxPrice");

    const filters: any = {};

    if (minPriceRaw || maxPriceRaw) {
      const min = minPriceRaw ? parseFloat(minPriceRaw) : undefined;
      const max = maxPriceRaw ? parseFloat(maxPriceRaw) : undefined;
      filters.price = {};
      if (min !== undefined && !Number.isNaN(min)) filters.price.gte = min;
      if (max !== undefined && !Number.isNaN(max)) filters.price.lte = max;
    }

    const whereClause: any = { ...filters };
    if (tag) whereClause.tags = { some: { slug: { equals: tag, mode: "insensitive" } } };
    if (category) whereClause.category = { slug: { equals: category, mode: "insensitive" } };

    const products = await prisma.product.findMany({
      where: whereClause,
      include: { tags: true, category: true },
      orderBy: { id: "desc" },
    });

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
