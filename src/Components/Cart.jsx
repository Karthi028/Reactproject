const Cart = ({items,setitems,setcart}) => {

  function remover(id){

    const newarray = items.filter((item)=>{
      return item.id !== id;
    });
    
    setitems(newarray);
    setcart(newarray);
    
  }



 function dissapear(){
  const carts = document.getElementById('cart');
  const main = document.getElementById('mains');
  const diss = document.getElementById('carthidden');
  diss.style.display = 'none';
  main.style.filter='';
  carts.style.display = 'none'; 
 }

 const cartitems = items.map((item)=>{
        return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <div key={item.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'15px'}}>
          <img src={item.image} style={{width:'100px',height:'100px',marginLeft:'20px',borderRadius:'10px',padding:'5px',boxShadow:'1px 1px 5px grey'}} />
          <div style={{display:'flex',flexDirection:"column",justifyContent:'center'}}>
          <p style={{overflowWrap:"break-word",whiteSpace:'normal',fontSize:'15px',marginLeft:'20px'}}>{item.title}</p>
          <p style={{marginLeft:'20px',fontWeight:'600'}}>${item.price}</p>
          </div>
          </div>
          <div>
          <button style={{marginRight:'20px',marginLeft:'10px',padding:'7px',border:'1.5px solid red',backgroundColor:'white',borderRadius:'10px'}} onClick={()=>{remover(item.id)}}>Remove</button>
        </div>
        </div>
       });



  return (
    <>
    <div id="carthidden" style={{display:'none',position:"absolute",top:'0px',left:'0px',width:'100vw',height:'500vh'}} onClick={dissapear}>
    </div>
    <div id="cart" style={{position:"absolute",top:'10%',left:'15%',width:'70%',height:'auto',display:'none',boxShadow:'1px 1px 5px grey',borderRadius:'10px',background:'white',flexDirection:'column',gap:'30px',overflow:'auto',marginBottom:'10px'}}>
      <h1 style={{textAlign:"center",marginTop:'10px'}}>Cart Items</h1>
  
      {cartitems}
  
    
    </div>
    </>
  )
}

export default Cart;