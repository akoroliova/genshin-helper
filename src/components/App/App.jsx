import { Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout/Layout";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import CharBuilderPage from "../../pages/CharBuilderPage/CharBuilderPage";
import ToDoTodayPage from "../../pages/ToDoTodayPage/ToDoTodayPage";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charbuilder" element={<CharBuilderPage />} />
          <Route path="/tasks" element={<ToDoTodayPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
