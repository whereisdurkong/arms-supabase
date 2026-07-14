import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { supabase } from './createClient';
import router from 'routes';

export default function App() {
  useEffect(() => {
    const heartbeat = async () => {
      await supabase.from('users_master').select('id_master').limit(1);
    };

    heartbeat();

    const interval = setInterval(heartbeat, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return <RouterProvider router={router} />;
}
