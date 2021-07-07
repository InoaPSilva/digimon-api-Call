import React, { Component } from "react"
import './main.css';

export class Main extends Component {

    constructor(props){
        super(props)
        
        this.state = {
                val: ''
            
        }
    }
    data = []

// Catando as info na API
    fetchData = () => {
    return fetch("https://digimon-api.vercel.app/api/digimon/name/" + this.state.val)
        .then((response) => response.json())
        .then((data) => {
            this.data = data[0]
            console.warn(this.data)
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
        alert(`${this.state.val}`);
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
            {this.data.name}
            {this.data.img}
            {this.data.level}
        </section>
      </section>


        );
    }
}

