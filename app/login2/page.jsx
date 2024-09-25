import styles from "./page.module.css"

export default function Login2() {
    return (
        <div className={styles.main}>
            <fieldset className={styles.main}>
                <legend>Login</legend>
                <h1>Login</h1>
                <input type="text" placeholder="Digite seu Usuário" />
                <input type="password" placeholder="Digite sua Senha" />
                <button>Acessar</button>
                <hr />
                <a href="">Esqueceu a senha</a>
            </fieldset>
        </div >
    );
}