import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export const WelcomeBanner = () => {
  const { user } = useUser();
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (user) {
      setShowMsg(true);
      const timer = setTimeout(() => {
        setShowMsg(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!showMsg || !user) {
    return null;
  }

  return (
    <div className="text-center p-3 bg-light shadow-sm mb-3 border rounded sticky-top" style={{ color: "#3B7CD3" }}>
      👋 Welcome back, <strong>{user.username || "Investor"}</strong>! Let's make smart investments today.
    </div>
  )
};
