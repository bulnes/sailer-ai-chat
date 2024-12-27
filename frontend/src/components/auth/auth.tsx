import { createRef, FormEvent, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_PARTICIPANT_KEY } from "../../constants";
import { ChatContext } from "../../context/chat-context";
import { SignIn } from "./signin/signin";
import { Welcome } from "./welcome/welcome";

export function Auth() {
  const { participants, setParticipants } = useContext(ChatContext);

  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [currentParticipant, setCurrentParticipant] = useState("");

  const signInInput = createRef<HTMLInputElement>();

  function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = signInInput.current?.value || "";

    if (name) {
      sessionStorage.setItem(LOCAL_STORAGE_PARTICIPANT_KEY, name);
      setCurrentParticipant(name);

      const newParticipants = [...participants, name];
      setParticipants(newParticipants);
    }

    setShowModal(false);
    setShowWelcome(true);
  }

  useEffect(() => {
    const currentParticipant =
      sessionStorage.getItem(LOCAL_STORAGE_PARTICIPANT_KEY) || "";

    if (currentParticipant) {
      setCurrentParticipant(currentParticipant);
      setShowWelcome(true);
    } else {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      signInInput.current?.focus();
    }
  }, [signInInput, showModal]);

  return (
    <>
      {showWelcome && <Welcome participant={currentParticipant} />}

      {showModal && (
        <SignIn
          showModal={true}
          handleSignIn={handleSignIn}
          signInInput={signInInput}
        />
      )}
    </>
  );
}
