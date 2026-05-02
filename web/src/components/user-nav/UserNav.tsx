'use client';

import { useUser } from '@/hooks/useUser';
import Link from 'next/link';
import { useDisplayedName } from './hooks';

export default function UserNav() {
  const { user, loading, signOut } = useUser();
  const displayedName = useDisplayedName();

  if (loading) return null;

  if (!user) {
    return (
      <nav>
        <Link href="/login">Log in</Link>
      </nav>
    );
  }

  return (
    <nav>
      <span>Hi, {displayedName}</span>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </nav>
  );
}
