import { FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface SignInProps {
  showModal: boolean;
  handleSignIn: (event: FormEvent<HTMLFormElement>) => void;
  signInInput: React.RefObject<HTMLInputElement>;
}

export function SignIn({ showModal, handleSignIn, signInInput }: SignInProps) {
  return (
    <Modal show={showModal} centered backdrop="static">
      <Modal.Header>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="signInForm" onSubmit={handleSignIn}>
          <Form.Group controlId="signInInput">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex.: john-doe"
              required
              pattern="[a-z0-9-]+"
              ref={signInInput}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="signInForm">
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
