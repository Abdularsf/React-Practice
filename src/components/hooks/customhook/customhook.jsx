import { useState, useEffect } from 'react';
// export default function StatusBar() {
//     const [isOnline, setIsOnline] = useState(true);
//     useEffect(() => {
//         function handleOnline() {
//             setIsOnline(true);

//         }
//         function handleOffline() {
//             setIsOnline(false);

//         }
//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);
//         return () => {
//             window.removeEventListener('online', handleOnline); window.removeEventListener('offline', handleOffline);
//         };
//     }, []);
//     return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// using our custom hook

import { useState, useEffect } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; // 👈 Return the value so components can use it
}

//using that custom hook in our component

import { useOnlineStatus } from "./useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}