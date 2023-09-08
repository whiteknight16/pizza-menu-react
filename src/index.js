import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )

}



function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )

}
function Menu() {
    const pizza = pizzaData
    // const pizza = []
    const numPizaas = pizza.length
    return (
        <main main className="menu" >
            <h2>Our Menu</h2>
            {numPizaas > 0 ? (
                <>

                    <p>Authentic Italian cuisine, 6 creative dishes to choose from, All from our in house stone oven, all organic, all delicious.</p>
                    <ul className="pizzas">
                        {/* {pizzaData.map((pizza) => <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} />)} */}
                        {pizza.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                    </ul></>) : (<p>We are still building our menu please check back later 😀</p>)

            }
            {/* <Pizza name='Pizza Fungi' ingredients=' Tomato, mozarella, mushrooms, and onion' photoName="pizzas/funghi.jpg" price={12} /> */}
        </main >
    )

}

function Pizza({ pizzaObj }) {
    // if (props.pizzaObj.soldOut) return null

    return <div className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`} >
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </div>

    </div >
}
function Footer() {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour
    // if (hour >= openHour && hour <= closeHour) {
    //     alert("We are currently open")
    // }
    // else alert("We are currently closed")
    return (
        <footer className="footer">
            {isOpen ? (<div className="order"><p>We're open until {closeHour},come visit us or order online</p><button className="btn">Order Now</button></div>) : (<p className="order">We're closed now and will be open at {openHour} please comeback later 😀</p>)}
        </footer>
    )


}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App /></React.StrictMode>)