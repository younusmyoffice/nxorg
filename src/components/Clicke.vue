<template>
    <div id="c">
        <!-- <p>ho</p> -->
        <!-- <p v-if="show">hi</p>
        <p v-else>byi</p>
        <button v-on:click="f">
click
        </button> -->





        <!-- Header Section -->
	<header class="header">
		<div class="headcontainer">
			<section class="wrapper" >
				<div class="header-item-left">
					<a href="./"><img src="./assets/logo_dark.png" class="brand"></a>
				</div>
				<!-- Navbar Section -->
				<div class="header-item-center">
					<div class="overlay"></div>
					<nav class="menu" id="menu">
						<div class="menu-mobile-header">
							<button type="button" class="menu-mobile-arrow"><i class="ion ion-ios-arrow-back"></i></button>
							<div class="menu-mobile-title"></div>
							<button type="button" class="menu-mobile-close"><i class="ion ion-ios-close"></i></button>
						</div>
						<ul class="menu-section">
							<!-- <li class="menu-item"><a href="#">Home</a></li> -->
							<li class="menu-item-has-children">
								<a href="#">Products <i class="bi bi-chevron-down"></i></a>
								<div class="menu-subs menu-mega menu-column-4">
									<div class="list-item text-center">
										<a href="./products">
											<img src="./images/products/nx_d_chocoi.png" loading="lazy" height="2" alt="Product Images">
											<h4 class="title">Daily Nutrition Mango </h4>
										</a>
									</div>
									<div class="list-item text-center">
										<a href="./products">
											<img src="./images/products/nx_d_strawi.png" loading="lazy" alt="Product Images">
											<h4 class="title">Daily Nutrition Strawberry</h4>
										</a>
									</div>
									<div class="list-item text-center">
										<a href="./products">
											<img src="./images/products/nx_d_moringai.png" loading="lazy" alt="Product Images">
											<h4 class="title">Recovery Nutrition  </h4>
										</a>
									</div>
									<div class="list-item text-center">
										<a href="./products">
											<img src="./images/products/nx_d_pistai.png" loading="lazy" alt="Product Images">
											<h4 class="title">Daily protein </h4>
										</a>
									</div>
								</div>
							</li>
							<li class="menu-item-has-children">
								<a href="#">Company <i class="ion ion-ios-arrow-down"></i></a>
								<div class="menu-subs menu-mega menu-column-3">
									<div class="list-item">
										<h4 class="title">About</h4>
										<ul>
											<li><a href="./about">Our Story</a></li>
											<li><a href="./about">What's Nextage Organics?</a></li>
											<li><a href="./about">Customer Success</a></li>
											<li><a href="/health">Health Counseling</a></li>
										</ul>
										<!-- <h4 class="title">Kid's Fashion</h4>
										<ul>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
										</ul> -->
									</div>
									<div class="list-item">
										<h4 class="title">Our values & culture</h4>
										<ul>
											<li><a href="./values">Equality </a></li>
											<!-- <li><a href="./values">Innovation</a></li> -->
											<li><a href="./values">safety Policy</a></li>
											<li><a href="./values">Journey </a></li>
											<li><a href="./gallery">Gallery </a></li>
										</ul>
										<!-- <h4 class="title">Health & Beauty</h4>
										<ul>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
										</ul> -->
									</div>
									<!-- <div class="list-item">
										<h4 class="title">Home & Lifestyle</h4>
										<ul>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
											<li><a href="#">Product List</a></li>
										</ul>
									</div> -->
									<div class="list-item">
										<img src="./images/h1.png" loading="lazy" alt="Product Images">
									</div>
								</div>
							</li>
							<li class="menu-item-has-children">
								<a href="#">Business Opportunity &#10095;</a>
								<div class="menu-subs menu-column-1">
									<ul>
										<!-- <li><a href="./business">Register</a></li> -->
										<li><a href="./business">Business Flow</a></li>
										<li><a href="./business">Earnings</a></li>
										<li><a href="./business">Privacy Policy</a></li>
									</ul>
								</div>
							</li>
							<!-- <li class="menu-item"><a href="#">Business Opportunity</a></li> -->
							<li class="menu-item"><a href="./contact">Contact Us</a></li>
							<!-- <li class="menu-item" style="float:right;">	<button type="button" class="btn btn-outline-success">Login</button></li> -->
							
							<!-- <div class="login_button-right">
								<button type="button" class="btn btn-outline-success">Login</button>
                   				 <button type="button" class="btn btn-outline-success">Sign Up</button>
							</div> -->
							<!-- <button type="button" class="btn btn-outline-success"><a href="https://app.nextageorg.com/member">Login</a></button>&nbsp;&nbsp;&nbsp;
                   	<button type="button" class="btn btn-success"><a href="https://app.nextageorg.com/member/register"></a>Sign Up</button>  -->
					
							
						</ul>
						
						
						
					</nav>
				</div>
				<div class="header-item-center2 ">
				<div class="overlay"></div>
					 <!-- <a href="#" class="menu-icon"><i class="ion ion-md-search"></i></a>
					<a href="#" class="menu-icon"><i class="ion ion-md-heart"></i></a>
					<a href="#" class="menu-icon"><i class="ion ion-md-cart"></i></a> 
					<button class=".login_button-right button1">Login</button>  -->
					 <!-- <button type="button" class="btn btn-outline-success">Login</button>&nbsp;&nbsp;&nbsp;
                   				 <button type="button" class="btn btn-outline-success">Sign Up</button>  -->
								<!-- <nav class="menu" id="menu">

									<button type="button" class="btn btn-outline-success"><a href="https://app.nextageorg.com/member">Login</a></button>&nbsp;&nbsp;&nbsp;
									<button type="button" class="btn btn-success"><a href="https://app.nextageorg.com/member/register"></a>Sign Up</button> 
		
								</nav>			 -->
					
				</div>
				

				<div class="header-item-right">
					<nav class="menu" id="menu">

						<button type="button" class="btn btn-outline-success"><a  href="https://app.nextageorg.com/member">Login</a></button>&nbsp;&nbsp;&nbsp;
						<button type="button" class="btn btn-success"><a href="https://app.nextageorg.com/member/register"></a>Sign Up</button> 

					</nav>
					<!-- <a href="#" class="menu-icon"><i class="ion ion-md-search"></i></a>
					<a href="#" class="menu-icon"><i class="ion ion-md-heart"></i></a>
					<a href="#" class="menu-icon"><i class="ion ion-md-cart"></i></a> -->
                    <!-- <button type="button" class="btn btn-outline-success"><a href="https://app.nextageorg.com/member">Login</a></button>&nbsp;&nbsp;&nbsp;
                   	<button type="button" class="btn btn-success"><a href="https://app.nextageorg.com/member/register"></a>Sign Up</button>  -->
					<button type="button" class="menu-mobile-toggle" v-on:click="f">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					
				</div>
				<div v-if="show">
					
					
				</div>
			</section>
		</div>
	</header>


    </div>
</template>
<script>
export default {
    name:"c",
    data()
    {
        return{show:false}
        // return{s:true}
    },
    methods:{
        f()
        {
            this.show=!this.show
        },
        

    }
     
};
</script>

<style scoped>

</style>