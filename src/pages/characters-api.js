import axios from "axios";

axios.defaults.baseURL = "https://genshin.jmp.blue";

export const getCharacterIdsList = async () => {
  const response = await axios.get("/characters");
  return response.data;
};

export const getCharacterById = async (characterId) => {
  const response = await axios.get(`/characters/${characterId}`);
  return response.data;
};

export const getCharacterIcon = async (characterId) => {
  const response = await axios.get(`/characters/${characterId}/icon`);
  return response.data;
};
