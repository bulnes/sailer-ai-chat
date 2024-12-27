import axios from "axios";
import { BASE_CHAT_SERVICE_URL } from "../constants";

const connection = axios.create({
  baseURL: BASE_CHAT_SERVICE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

async function createNewChat(participantsIds: string[]) {
  const request = await connection.post("/chats", {
    participants: participantsIds,
  });

  return request.data;
}

async function listAllChats() {
  const request = await connection.get("/chats");

  return request.data;
}

async function getMessagesFromChat(chatID: string) {
  const request = await connection.get(`/chats/${chatID}/messages`);

  return request.data;

}

async function sendMessageToChat(chatID: string, participantId: string, message: string) {
  const request = await connection.post(`/chats/${chatID}/messages`, {
    "user_id": participantId,
    "type": "text",
    "content": message,
  });

  return request.data;

}

async function updateUserPresence(chatId: string, participantId: string, status = 'online') {
  const request = await connection.post(`/chats/${chatId}/presence`, {
    "user_id": participantId,
    "status": status
  });

  return request.data;
}

async function markChatAsRead(chatID: string, participantId: string) {
  const request = await connection.post(`/chats/${chatID}/read`, {
    "user_id": participantId,
  });

  return request.data;
}

export {
  createNewChat, getMessagesFromChat, listAllChats, markChatAsRead, sendMessageToChat, updateUserPresence
};

