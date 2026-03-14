import { topics, problems } from '../../lib/mock/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

async function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}

async function getProblemsByTopicId(topicId: string) {
  return problems.filter((p) => p.topicId === topicId);
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
                {problem.title}
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
