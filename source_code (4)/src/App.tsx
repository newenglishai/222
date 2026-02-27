import { useEffect } from 'react';
import { client } from './api/client';
import { useAuthStore } from './store/authStore';
import { LoginPage } from './pages/LoginPage';
import logo from "./assets/youware-bg.png";

function Dashboard() {
  const { user, reset } = useAuthStore();

  async function handleLogout() {
    await client.auth.signOut();
    reset();
  }

  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center relative bg-[#F6F4F1] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="text-center z-10 max-w-4xl mx-auto px-6 py-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
        <h1 className="text-black font-normal leading-tight text-center mb-4 text-4xl sm:text-5xl lg:text-6xl">
          Welcome, {user?.name || user?.email}
        </h1>
        
        <p className="text-black font-normal leading-relaxed text-center max-w-2xl mx-auto text-base sm:text-lg lg:text-xl mb-8">
          You are now logged in to your YouWare application.
        </p>

        <button 
          onClick={handleLogout}
          className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}

function App() {
  const { user, isChecking, setUser, setChecking } = useAuthStore();

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    // Skip network request if user exists locally
    if (useAuthStore.getState().user) {
      setChecking(false);
      return;
    }
    try {
      const session = await client.auth.getSession();
      if (session.data?.user) {
        setUser({
          id: session.data.user.id,
          email: session.data.user.email,
          name: session.data.user.name || '',
        });
      }
    } catch (error) {
      console.error("Failed to restore session:", error);
    } finally {
      setChecking(false);
    }
  }

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F4F1]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginPage />;
}

export default App;
