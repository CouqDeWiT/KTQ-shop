import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './data';
import { useStateValue } from "./StateProvider";
const SingleProduct =() =>{
        let{id} = useParams();
        let singleProduct = products.find((item) => item.id ===id);
    return(
        <>
        <div class="banner-top">
            <div class="container">
                <h3 >Lorem</h3>
                <h4><a href="index.html">Home</a><label>/</label>Lorem</h4>
                <div class="clearfix"> </div>
            </div>
        </div>
                <div class="single">
                    <div class="container">
                        <div class="single-top-main">
                            <div class="col-md-5 single-top">
                                <div class="single-w3agile">    
                                    <div id="picture-frame">
                                        <img src={singleProduct.image} class="img-responsive"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 single-top-left ">
								<div class="single-right">
				<h3>{singleProduct.title}</h3>	
				<div class="pr-single">
				<p class="reduced "><del>$10.00</del>${singleProduct.price}</p>
				</div>
				<div class="block block-w3">
					<div class="starbox small ghosting"> </div>
				</div>
				<p class="in-pa">{singleProduct.detail}</p>		   	
				<ul class="social-top">
					<li><a href="#" class="icon facebook"><i class="fa fa-facebook" aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon twitter"><i class="fa fa-twitter" aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon pinterest"><i class="fa fa-pinterest-p" aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i><span></span></a></li>
				</ul>
			<div class="clearfix"> </div>
			</div>
			</div>
		    <div class="clearfix"> </div>
	    </div>				
	</div>
</div>       
        </>
    )
}
export default SingleProduct;