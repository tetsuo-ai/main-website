import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public/hackathon/TetsuoAI-slides.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="TetsuoAI-slides.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
} 