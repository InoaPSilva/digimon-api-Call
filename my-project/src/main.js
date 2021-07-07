import React, { Component } from "react"
import './main.css';

export class Main extends Component {

    constructor(props){
        super(props)
        
        this.state = {
                val: '',
                data: []

        }
    }

// Catando as info na API
    fetchData = () => {
    return fetch("https://digimon-api.vercel.app/api/digimon/name/" + this.state.val)
        .then((response) => response.json())
        .then((data) => {
            this.setState ({data: data[0]})

        });
        
    }

// Armazena o valor na variavel
    valHandle = ( a ) =>{
        this.setState({
            val : a.target.value
        })
    }
// executa algo quando o submit for clicado
    submitHandle = ( a ) =>{
        // Impede que a pagina dê reload 
        a.preventDefault();
    }

  render(){
  return (

      <section>
        <form onSubmit={this.submitHandle} className="flex container mx-auto py-8">
          <input className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" 
          type="text"
          value = {this.state.val}
          placeholder="Search..."
          onChange={this.valHandle}/>
          <input onClick={this.fetchData} type="submit" className="mx-5 px-8 h-14 my-1 rounded bg-gray-100 hover:bg-gray-500 hover:text-white" placeholder="pesquisar"/>           
        </form>
        <section> 
            <p>Name: {this.state.data.name}</p>
            <p>level: {this.state.data.level}</p>
            <img src={this.state.data.img}/>            
        </section>
      </section>


        );
    }
}

