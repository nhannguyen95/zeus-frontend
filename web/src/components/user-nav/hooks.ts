import { useUser } from '@/hooks/useUser';

export function useDisplayedName(): string {
    const { user } = useUser();
    return user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || 'there';
}