import React, {useState} from 'react'
import Products from '../components/Products'
import AddProduct from './AddProduct'



const AdminDashboard = () => {


const [active, setActive] = useState("manageProduct")



return (

<div className="Admindash"> 

<button onClick = {() => setActive("manageProduct")}> Update  and Delete </button>
<button onClick = {() => setActive("AddAProduct")}> Add a product  </button>



<div> 
{ active === "manageProduct" &&  <Products title="Delete a product"/>  }
{ active === "AddAProduct" &&  <AddProduct title ="Add a product "/> }
</div>




</div>


)
}

export default AdminDashboard