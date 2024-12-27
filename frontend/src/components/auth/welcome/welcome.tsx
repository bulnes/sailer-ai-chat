import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

interface WelcomeProps {
  participant: string;
}

export function Welcome({ participant }: WelcomeProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={showWelcome} animation={true} bg={"info"}>
        <Toast.Body>
          <p>
            Welcome, <strong>{participant}</strong>! It's nice to see you here.
          </p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
