'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Drop-in replacement for MUI's useMediaQuery, so the landing page doesn't have
 * to pull in @mui/material for a single call.
 *
 * Matches MUI's SSR behaviour: returns false during server render and on the
 * first client render, then settles to the real value after hydration.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query]
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
