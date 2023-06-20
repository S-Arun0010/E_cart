import React,{useState,useEffect} from 'react';
import './Styles/cart.css';
import img1 from "./images/empty-cart.svg";
const Cart =({cart,setCart,handleChange})=>
{
    const [totalprice,setprice] = useState(0);
    const handleRemove=(id) =>
    {
        const arr = cart.filter((item) => item.id!== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice =() =>
    {
        let  ans=0;
        cart.map((item) => (ans +=item.quantity  *  item.price));
        setprice(ans);
    };
    useEffect(() =>
    {
       handlePrice();
    });
    const cartprice = () =>
    {
    if(totalprice > 0)
    {
        return (
        <div className="total">
                <span>Total</span>
                <span> - {totalprice} $ </span>
                </div>);  
    }
    else
    {
    return (
        <div className="noitems" >
            <div>
           <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  
            <span>My Order List</span>
            </div>
            <div>
                <img src={img1}></img>
                <p>Oops!! Currently there are no items in your cart.</p>
                <p>Please <a href="">Click</a> here to purchace.</p>
            </div>

                </div>
                );
    };
    }
    
    return(
        <section>
            {
                cart.map((item) =>
                (
                    <div className="continer">
                        
                        <div className="cartcontent">
                        <div className="cartimage">
                            <img src={item.img} /> 
                        </div>
                        <div>
                        <p>{item.title}</p>
                        </div>
                        <div className='change button'>
                            <button onClick={()=> handleChange(item , +1)}>+</button>
                            <button>{item.quantity}</button>
                            <button onClick={()=> handleChange(item,-1)}>-</button>
                        </div>
                        <div className='changeprice'>
                            <span id="price">{item.price * item.quantity}</span>
                            <button onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                    </div>   
                ) )  }
                 
                { cartprice()} 
                
                   
        </section>
       
    );

};

export default Cart;