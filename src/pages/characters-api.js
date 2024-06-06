import axios from "axios";

axios.defaults.baseURL = "https://genshin.jmp.blue";

export const getCharacters = async () => {
  const response = await axios.get("/characters/all");
  return response.data;
};

export const getCharacterById = async (characterId) => {
  const response = await axios.get(`/characters/${characterId}`);
  return response.data;
};

export const getCharacterIcon = async (characterId) => {
  const response = await axios.get(`/characters/${characterId}/icon`, {
    responseType: "blob", // Вказуємо, що відповідь буде у форматі blob
  });
  return response.data;
};
