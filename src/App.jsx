import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { supabase } from './createClient';
import router from 'routes';

export default function App() {
  useEffect(() => {
    const heartbeat = async () => {
      try {
        const { data, error } = await supabase
          .from('users_master')
          .select('id_master')
          .limit(1);

        if (error) {
          console.error(
            `[Heartbeat] ❌ Failed - ${new Date().toLocaleString()}`,
            error.message
          );
        } else {
          console.log(
            `[Heartbeat] ✅ Success - ${new Date().toLocaleString()}`,
            data
          );
        }
      } catch (err) {
        console.error(
          `[Heartbeat] ❌ Exception - ${new Date().toLocaleString()}`,
          err
        );
      }
    };

    console.log('[Heartbeat] Started');

    // Run immediately
    heartbeat();

    // Repeat every 15 minutes
    const interval = setInterval(heartbeat, 15 * 60 * 1000);

    return () => {
      clearInterval(interval);
      console.log('[Heartbeat] Stopped');
    };
  }, []);

  return <RouterProvider router={router} />;
}
