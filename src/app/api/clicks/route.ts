import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type ClickDoc = { _id: string; count: number };

async function getCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

// 모든 링크의 클릭 수를 { [linkId]: count } 형태로 반환
export async function GET() {
  try {
    const docs = await (await getCollection()).find().toArray();
    const counts: Record<string, number> = {};
    for (const link of links) counts[link.id] = 0;
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return NextResponse.json(counts);
  } catch {
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "잘못된 링크 id" }, { status: 400 });
  }

  try {
    await (await getCollection()).updateOne(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true },
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
