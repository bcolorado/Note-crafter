import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NewNote } from './assets/Components/NewNote';
import './App.css';

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export const App = () => {
  return (
    <Container
      className="my-4 p-4"
      style={{
        backgroundColor: '#f9f9ed',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
