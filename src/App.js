import React, { Component } from 'react'
import './styles.css'


class App extends Component {


    constructor(props) {
        super(props)
        this.state = {
            textoFrase : ""
        }


        //Bind para chamar a função
        this.quebraBiscoito = this.quebraBiscoito.bind(this)

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


    //funções
    quebraBiscoito(){
        let state = this.state
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state)
    }



    render (){
        return(
            <div className="container">
                <h1>Biscoito da Sorte</h1>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">{this.setState.textoFrase}</h3>
            </div>

        )
    }
}


class Botao extends Component {


    render() {
        return(
            <div>
                <button className="button" onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>   
        )
    }


}



export default App


