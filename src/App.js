import React, { useState, useEffect, createContext } from "react";
import ExamWrapper from "./containers/ExamWrapper";
import { questionsList as questionsListFromAssets } from "./assets/kat_b_pl";
import "./App.css";
export const QuestionsContext = createContext();

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [mode, setexamMode] = useState("makeExam");

  useEffect(() => {
    setTimeout(() => {
      setQuestions(questionsListFromAssets);
    }, 1);
  }, [questions]);

  return (
    <QuestionsContext.Provider
      value={{ questions: [...questions], setQuestions }}
    >
      {mode === "makeExam" && <ExamWrapper />}
    </QuestionsContext.Provider>
  );
};

export default App;
