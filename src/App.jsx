import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h1>birthday reminder </h1>

        {people.map((person) => {
          const { id, name, date, image } = person;
          return (
            <article key={id}>
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <h5>{name}</h5>
                <p className="date">{date}</p>
              </div>
            </article>
          );
        })}
        <button
          type="button"
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
