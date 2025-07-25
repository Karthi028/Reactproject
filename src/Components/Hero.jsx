import { useEffect, useState } from "react"
import './Hero.css'



const Hero = ({ cart, setcart }) => {

    const [items, setitems] = useState([]);

    const fetchdata = async () => {
        let data = await fetch('https://fakestoreapi.com/products')
        setitems(await data.json())

    }

    useEffect(() => {
        fetchdata()
    }, [])

    let images = items.map((item) => {
        return <div className='card' style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-around',marginTop:'10px' }} key={item.id}>

            <img src={item.image} />
            <div className="price">
                <p className="title">{item.title}</p>
                <p>{item.price}</p>
            </div>
            <button className="border" onClick={() => {
                const findduplicate = cart.some((car) => car.id === item.id);
                if (findduplicate) {
                    alert("Item already added to the cart");
                }
                else {
                    setcart([...cart, item])
                };

            }}>Cart</button>

        </div>
    })

    return (
        <>
            <div className="cards">{images}</div>
            
        </>

    )
}

export default Hero