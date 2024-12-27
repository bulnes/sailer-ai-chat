export interface ChatContextInterface {
  currentParticipant: string;
  setCurrentParticipant: (currentParticipant: string) => void;
  participants: string[];
  setParticipants: (participants: string[]) => void;
}