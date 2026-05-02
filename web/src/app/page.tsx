import Link from 'next/link';
import { Topic } from '@/lib/models';
import { getAllTopics } from '@/lib/mock/data';
import UserNav from '@/components/user-nav';

async function getTopics(): Promise<Topic[]> {
  return getAllTopics();
}

export default async function Home() {
  const topicsData = await getTopics();

  return (
    <main>
      <header>
        <h1>DevOps Learning Tracks</h1>
        <p>Master industry-standard tools with hands-on challenges.</p>
        <UserNav />
      </header>

      <section>
        <h2>Available Topics</h2>
        <ul aria-label="Topics List">
          {topicsData.map((topic) => (
            <li key={topic.id}>
              <strong><Link href={`/topics/${topic.slug}`}>{topic.title}</Link></strong>: {topic.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
