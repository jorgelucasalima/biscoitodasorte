import React, { Component } from 'react'
import './styles.css'


class App extends Component {


    constructor(props) {
        super(props)
        this.state = {}


        //Array das frases
        this.frases = [
            'A vida é uma bosta',
            'Sua vida vai melhorar no por do sol de Marte',
            'Sim, eu não sei',
            'Boa sorte porque você vai precisar',
            'Gera bacteria',
            'Obvio que você se lascou, olha pra você',
            'Tu é lindo demais'
     ]

    }

    render (){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao/>
                <h3 className="textoFrase">Frase numero 1 aleatoria..</h3>
            </div>

        )
    }
}


class Botao extends Component {


    render() {
        return(
            <div>
                <button>Abrir Biscoito</button>
            </div>   
        )
    }


}



export default App


