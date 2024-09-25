import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const titulo = "Estudando JSX!"

  const url = 'https://via.placeholder.com/150'

  function soma(a, b) {
    return a + b
  }

  return (
    <div className={styles.page}>
      <h1>{titulo}</h1>
      <input type="text" placeholder="digite alguma coisa..."/>
      <input type="submit" name="enviar" />
      
      <p>Construindo nossas paginas</p>
      <h2>{soma(8, 9)}</h2>

      <img src={url} alt="Imagem dos animes" />
    </div>
  );
}
