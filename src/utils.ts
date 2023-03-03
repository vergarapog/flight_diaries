import { NewDiaryEntry } from "./types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  console.log(object);
  const newEntry: NewDiaryEntry = {
    date: "12-1-2023",
    weather: "windy",
    visibility: "great",
    comment: "Fale",
  };
  return newEntry;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }

  return comment;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export default toNewDiaryEntry;
