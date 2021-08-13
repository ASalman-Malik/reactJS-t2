import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { useState } from "react";
import { Kart } from './Kart';
//import { CenterFocusStrong } from '@material-ui/icons';
function  App() {


  const abckart = [
    { 
      id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    productType: 'Fancy Products',
    offerPrice: '$40.00 - $80.00',    
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tag: "Sale",
    productType: 'Special Item',
    offerPrice:  '$18.00',
    price: '$20.00',
    rating: '⭐⭐⭐⭐⭐',   
    },
    {
      id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tag: 'Sale',
    productType: 'Sale Item',
    offerPrice: '$25.00',
    price: '$50.00',  
    },
    {
      id: 4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    productType: 'Popular Item', 
    offerPrice: '$40.00',
        rating: '⭐⭐⭐⭐⭐'  
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        tag: 'Sale',
        productType: 'Sale Item',
        offerPrice: '$25.00',
        price: '$50.00',

      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        productType: 'Fancy Products',
        offerPrice: '$120.00 - $280.00',    
        },
        {
           id: 7,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          tag: 'Sale',
          productType: 'Special Item',
          offerPrice:  '$18.00',
          price: '$20.00',
          rating: '⭐⭐⭐⭐⭐',   
          },
          {
            id: 8,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            productType: 'Popular Item', 
            offerPrice: '$40.00',
                rating: '⭐⭐⭐⭐⭐'  
              },
  ];

//   constructor(props){ 
//     super(props);
//     this.state = {
//     cart:  0
//   }

//   this.updateState = this.updateState.bind(this);
// }
//   updateState(calculation) 
//   {
//     if(calculation === 'Clicked')
//     {
//       this.setState({cart: this.data + 1})
//     }
//   }
// 
  const [cart, setCart] = useState(0);
  return (
      <div> 
        <h1>{cart}</h1>
        
         <IconButton aria-label="cart">
  <StyledBadge badgeContent={cart} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
      
       <div className={'parent'}>
      {/* <Kart cart={cart} setCart={setCart} /> */}
        
      {abckart.map(({id, image, productType, price, offerPrice, rating}) => 
      (<Kart
      key = {id}
      productImage = {image} 
      product = {productType} 
      price = {price} 
      offerPrice = {offerPrice} 
      rating = {rating} 
      cart = {cart} 
      setCart = {setCart} />))}
      
    </div>
    </div>
  );
  }
// function Vote(props){
//   const [like, setLike] = useState(0);
//   const [dislike, setDislike] = useState(0);
//   console.log("Props",props);
//   return(
//     <div className={'App'}
//     style={{
//       background: like >= dislike ? "smokewhite" : "crimson",
//     }}>
//       <h1 style={{textTransform: "uppercase"}}>{props.brandName} </h1>
//       <h4>{props.model}</h4>
//       <Specification specs={props.specs}/>
      

//       <button onClick={() => setLike(like + 1)}> {like}</button>
//       <button onClick={() => setDislike(dislike + 1)}>{dislike}</button>
      

//     </div>
//   )
// }




export const useStyles = makeStyles({
  root: {
    width: 280,
    height: 400,
    textAlign: 'center',
    marginBottom: 15,
  },
  media: {
    height: 170,
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default App;



// function Users(){
//     return(
//     <div>
//         <h2>USER details</h2>
//         </div>
//     );
// }



// live pratice test


// {users.map({name, image})=> <User userName={user} userImage={imgage}/>)}
// function Users({userName, userImage}){
//     return(
//     <div>
//         <img style={{borderRadius: 50%}} src={userImage}></img>
//         <h2>{userName}</h2>
//         </div>
//     );
// }

//     <AddUser user={userName, userImage}/>
    
    
//     function AddUser({userName, userImage}){
//     return(
//         <div>
//         const [name, setName] = useState("");
//         const [profile, setProfile] = useState("");
        
// <input value={print}
// onChange = {(event)=> setName(event.target.value)}
// type="text"
// placeholder="Name"
// />
  

// <input value={profile}
// onChange = {(event)=> setProfile(event.target.value)}
// type="text"
// placeholder="Name"
// />
//     {profile}
//           {print}
// <button  onClick={()=>setUsers()}/>
        
//         </div>
//     );
    
// }











