import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const profiles = await getAllprofiles();
  return NextResponse.json(profiles);
}

export async function POST(request: NextRequest) {
  const { id, nickname, iconPattern, residence, comment, createdAt } = await request.json();

  const response = await prisma.profiles.create({
    data: {
      id: id,
      nickname: nickname,
      iconPattern: iconPattern,
      residence: residence,
      comment: comment,
      createdAt: createdAt
    },
  }).catch(err => {
    const result = {
      status: 500,
      body: err,
      message: "登録に失敗しました"
    }
    console.error(result);
    throw result;
  })

  const result = {
    status: 201,
    body: response,
    message: "登録に成功しました"
  }
  console.log(result);

  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')!;

  await prisma.profiles.delete({
    where: {
      id: id,
    },
  });

  const profiles = await getAllprofiles();
  return NextResponse.json(profiles);
}

async function getAllprofiles() {
  const profiles = await prisma.profiles.findMany();
  return profiles;
}