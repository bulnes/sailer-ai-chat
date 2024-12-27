export interface ChatContextInterface {
  participants: string[];
  setParticipants: (participants: string[]) => void;
}