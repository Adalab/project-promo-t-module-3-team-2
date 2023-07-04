import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <button>
        <Link to="/main">EMPEZAR</Link>
      </button>
    </div>
  );
}

export default Home;
