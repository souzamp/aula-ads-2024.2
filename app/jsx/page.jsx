import React, { Fragment } from "react"

import Titulo from '../../src/components/Titulo'

export default function Jsx() {
    /*
    Outras formas de fragmentar nosso código
    <> </>
    ou
    <div> </div>
    */
    return (
        <React.Fragment>
            <Titulo titulo="JSX | Aula pratica" paragrafo="Estudando JSX com Bebel"/>
        </React.Fragment>
    );
}