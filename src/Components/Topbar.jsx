const Topbar = ({items}) => {
 function cartitems(){
  const carts = document.getElementById('cart');
  const main = document.getElementById('mains');
  const diss = document.getElementById('carthidden');
  diss.style.display = 'block';
  main.style.filter='blur(8px)'
  carts.style.display = 'flex';
  
 }

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:'1px 1px 20px grey',borderRadius:'20px',padding:'10px',marginTop:'10px'}}>
    <h1 style={{marginLeft:'10px'}}>Fashion</h1>
    <button style={{width:'100px',height:'30px',fontSize:'20px',fontWeight:'600',marginRight:'10px',boxShadow:"1px 1px 5px grey",border:'none',borderRadius:'5px'}} onClick={cartitems}><span></span><span style={{color:'red',fontSize:'24px'}}>{items.length}</span>Cart</button>
    </div>
    
  )
}

export default Topbar