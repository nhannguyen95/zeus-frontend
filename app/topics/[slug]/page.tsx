import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Topic, Problem } from '@/app/lib/models';
import { getAllTopics, getTopicBySlug, getProblemsByTopic } from '@/app/lib/mock/data';

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

async function getTopic(slug: string): Promise<Topic | undefined> {
  return getTopicBySlug(slug);
}

async function getProblemsByTopicId(topicId: string): Promise<Problem[]> {
  return getProblemsByTopic(topicId);
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = await getTopic(slug);

  if (!topic) {
    notFound();
  }

  const topicProblems = await getProblemsByTopicId(topic.id);

  return (
    <main>
      <header>
        <Link href="/">← Back to Topics</Link>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </header>

      <section>
        <h2>Available Problems</h2>
        {topicProblems.length > 0 ? (
          <ul aria-label="Problems List">
              {topicProblems.map((problem) => (
                <li key={problem.id}>
                  <Link href={`/problems/${problem.slug}`}>
                    {problem.title}
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <p>No problems found for this topic yet.</p>
        )}
      </section>
    </main>
  );
}
