'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import Link from 'next/link';

export default function Sandbox() {
  const router = useRouter();
  const { user, loading } = useUser();

  const handleStart = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    // Authenticated user: start sandbox (do nothing for now)
  };

  if (loading) {
    return <p>Loading sandbox environment...</p>;
  }

  return (
    <section>
      <header>
        <h2>Interactive Sandbox</h2>
      </header>

      <div>
        {user ? (
          <button type="button" onClick={handleStart}>
            Start Sandbox
          </button>
        ) : (
          <Link href="/login">Login to start sandbox</Link>
        )}
      </div>

      <section>
        <h3>Terminal</h3>
        <pre>Terminal placeholder...</pre>
      </section>
    </section>
  );
}
