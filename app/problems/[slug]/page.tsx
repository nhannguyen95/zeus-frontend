import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Problem, Topic } from '@/app/lib/models';
import { getAllProblems, getProblemBySlug, getTopicById } from '@/app/lib/mock/data';

export async function generateStaticParams() {
  const problems = await getAllProblems();
  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}

async function getProblem(slug: string): Promise<Problem | undefined> {
  return getProblemBySlug(slug);
}

async function getTopic(topicId: string): Promise<Topic | undefined> {
  return getTopicById(topicId);
}

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = await getProblem(slug);

  if (!problem) {
    notFound();
  }

  const topic = await getTopic(problem.topicId);

  return (
    <main>
      <nav>
        {topic ? (
          <Link href={`/topics/${topic.slug}`}>← Back to {topic.title}</Link>
        ) : (
          <Link href="/">← Back to Topics</Link>
        )}
      </nav>

      <article>
        <header>
          <h1>{problem.title}</h1>
          <p>
            <strong>Difficulty:</strong> {problem.difficulty}
          </p>
        </header>

        <section>
          <h2>Description</h2>
          <p>{problem.description}</p>
        </section>
      </article>
    </main>
  );
}
