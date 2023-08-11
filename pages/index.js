import Link from "next/link";

function Home() {
  return (
    <>
      <div className="main">
        <h1>Backend Developer</h1>
      </div>

      <h2>Projetos:</h2>
      <Link href="/clonetabnews">
        Clone do tabnews (ainda está sendo desenvolvido)
      </Link>
    </>
  );
}

export default Home;
