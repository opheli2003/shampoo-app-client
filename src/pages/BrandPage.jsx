import React from "react"
import {Link} from "react-router-dom"
const BrandPage =() => {



return(



    <div className="card">
<div>  
<p>Vous vous rendez compte qu'il y aura bientôt plus de plastique que de poissons dans l'océan... Alors qu'avec e-shampoo, on peut réduire ses déchets plastiques de 3kg par foyer par an !</p>
</div>
<br />

<div>  
<h3> Bye-bye plastique à usage unique </h3>
<div>  
<br />
<h4> Découvrez nos produits à recharger </h4>
</div>
</div>
<br />
<Link to="/categories">
<button className="btn btn-outline" data-bs-toggle="button"> Je decouvre   </button>  </Link>


    </div>
    
)


}

export default BrandPage;