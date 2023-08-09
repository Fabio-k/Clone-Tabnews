import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Aspirante a Backend Developer</h1>
      <h2>Projetos:</h2>
      <li>
        <ul>
          <Link to="/clonetabnews">clone tabnews</Link>
        </ul>
      </li>
    </>
  );
}

export default Home;
