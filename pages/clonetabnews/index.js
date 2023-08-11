import Link from "next/link";

function Home() {
  return (
    <>
      <p>
        este projeto é no momento uma cópia do
        <Link href="https://www.tabnews.com.br/"> Tabnews</Link> e está sendo
        feito passo a passo no <Link href="https://curso.dev/">Curso.dev</Link>
      </p>
      <p>
        Depois de entender todo o processo de como é feito o DNS hospedado essa
        aplicação e criado o dominio no registro eu finalmente consegui ter uma
        mensagem que pode ser lida por você :)
      </p>
      <p>o projeto ainda está em andamento...</p>
      <p>
        por enquanto já foi feito o ambiente de desenvolvimento, o host, deploy.
      </p>
    </>
  );
}

export default Home;
