import styles from "./page.module.css"

export default function () {
    const url = "https://via.placeholder.com/200"

    return (
        <div className={styles.login}>
            <fieldset>
                {/* <legend>Usando fieldset</legend> */}

                <h1>Login</h1>
                
                <input type="text" placeholder="Digite seu usuário" />
                <input type="password" placeholder="Digite sua senha" />
                <button>Acessar</button>
                <hr />
                <a href="">Esqueci a senha!</a>
            </fieldset>
            {/* <img src={url} alt="" /> */}
        </div>
    );
}