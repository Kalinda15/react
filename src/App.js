import React, { Component } from "react"
import "./App.css"
import Alface from "../src/assets/alface.png"
import Laranja from "../src/assets/laranja.png"
import Cereja from "../src/assets/cereja.png"
import Cenoura from "../src/assets/cenoura.png"
import Manga from "../src/assets/manga.png"
import Limao from "../src/assets/limao.png"
import Beterraba from "../src/assets/beterraba.png"
import Tomate from "../src/assets/tomate.png"
import Carrinho from "../src/assets/carrinho.png"
class App extends Component {
    render() {
        return (
            <section>
                <div className="text">
                <h1>HORTIFRUITI</h1>
                <h2 class="vnw">VnW</h2>
                <h2 class="produtos">Nossos Produtos</h2>
                <div class=" frutas">
                    <figure>
                    <img src={Alface} />
                    </figure>
                    <figure>
                    <img src={Laranja} />
                    </figure>
                    <figure>
                    <img src={Cereja} />
                    </figure>
                    <figure>
                    <img src={Cenoura} />
                    </figure>
                    <figure>
                    <img src={Manga} />
                    </figure>
                    <figure>
                    <img src={Limao} />
                    </figure>
                    <figure>
                    <img src={Beterraba} />
                    </figure>
                    <figure>
                    <img src={Tomate} />
                    </figure>
                </div>
                </div>
                <div class="retangulo">
                <div class="quadrado"><p class='arraste'>Arraste o seu produto aqui para colocar no carrinho</p>
                <figure>
                    <img class="carrinho" src={Carrinho} /></figure>
                </div>
                <div class="unidade">
                    <p class="mais">+</p>
                    <p class="menos">-</p>
                </div>
                </div>
            </section>

        )
    }
}
export default App