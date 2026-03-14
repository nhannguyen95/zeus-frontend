import { NextResponse } from 'next/server';
import { topics } from '@/app/lib/mock/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ topicId: string }> }
) {
  const { topicId } = await params;
  const topic = topics.find((t) => t.id === topicId || t.slug === topicId);
  
  if (!topic) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
  }
  
  return NextResponse.json(topic);
}
