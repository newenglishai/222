import { useRef, useEffect, useState } from 'react';
import { client } from '../api/client';
import { useAuthStore } from '../store/authStore';
import "@edgespark/client/styles.css";

export function LoginPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const authRenderedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);
  const { setUser } = useAuthStore();

  useEffect(() => {
    client.auth.getSession().then(session => {
      if (session.data?.user) {
        setUser({
          id: session.data.user.id,
          email: session.data.user.email,
          name: session.data.user.name || '',
        });
      } else {
        setIsReady(true);
      }
    });
  }, [setUser]);

  useEffect(() => {
    if (!isReady || authRenderedRef.current || !containerRef.current) return;
    authRenderedRef.current = true;

    client.auth.renderAuthUI(containerRef.current, {
      redirectTo: '/',
      onLogin: (user) => {
        setUser({ id: user.id, email: user.email, name: user.name || '' });
      },
    });
  }, [isReady, setUser]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[420px]">
        <div ref={containerRef} />
      </div>
    </div>
  );
}
