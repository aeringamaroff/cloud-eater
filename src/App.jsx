import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./assets/notes";

const renderNote = (note) => {
  return <Note key={note.id} title={note.title} content={note.content} />;
};

function App() {
  return (
    <>
      <Header />

      {notes.map(renderNote)}

      <Footer />
    </>
  );
}

export default App;
