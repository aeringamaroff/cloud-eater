import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./assets/notes";

function App() {
  return (
    <>
      <Header />

      {notes.map((note) => {
        return <Note key={note.id} title={note.title} content={note.content} />;
      })}

      <Footer />
    </>
  );
}

export default App;
