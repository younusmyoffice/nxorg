<template > 
  <div id="Slider"  v-for="i in [currentIndex]" :key="i">
      
<section class="nxo-block slide-bg-img p-0 " :style="{backgroundImage:`url(${currentImg.im})`, width:'100%',  height:'670px'  }">
  <div class="container " > 

      <transition-group name="fade" tag="div">
        <!-- <div>
            <a v-for="i in [currentIndex]" :key="i"
            @click="goto(currentIndex)">
            {{currentIndex + 1}}
            </a>
        </div>    -->
        
      <!-- original working code -->


      <!-- <div  class="slide" v-for="i in [currentIndex]" :key="i">
        <div class="container">
             <img class="imgsz" :src="currentImg.im" />
            <div class="text-block">
                <h4>{{currentImg.title}}</h4>
                <p >{{currentImg.text}}</p>
                <button>Hire me</button>
            </div>
            <div class="health360-block">
                <img :src="currentImg.hm"/>
                <h4>Nature</h4>
                <p>What a beautiful sunrise</p>
            </div>
        </div> 
          
      </div> -->

      
      <!-- orriginal demo code end -->
           <!-- <img  :src="list.im" /> -->
        <!-- <div>{{i.im}}</div> -->
        <!-- <img src="@/assets/images/home.png"/> -->
        <!-- <img :src="'@'+currentImg.src"/> -->
        <!-- blk 1 -->
             
          <!-- <div  class="row flex-lg-row-reverse align-items-center g-5 py-6"> -->
            <!-- <div class="row text-center justify-content-center">
               <div class="col-12">
               <h1 class="display-5 fw-bold lh-1 mb-3"><strong>{{currentImg.ctitle}}</strong></h1>
                  <div class="row-60"></div>
               <h6 class="lead"> {{currentImg.ctext}} </h6><br>
               </div>
            </div> -->
           
            <!-- <div class="col-10 col-sm-8 col-lg-6 row text-center justify-content-center">
              <img :src="currentImg.hm" height="40px" width="10px" class="d-block mx-lg-auto img-fluid"  loading="lazy">
            </div> -->
            <!-- <div class="row text-center justify-content-center">
               <div class="col">
                    <h1 class="display-5 fw-bold lh-1 mb-3 text-center justify-content-center"><strong>{{currentImg.ctitle}}</strong></h1>
                        <div class="row-60"></div>
                    <h6 class="lead"> {{currentImg.ctext}} </h6><br>
               </div>
            </div> -->
            <!-- <div class="containerslide  ">
               <div class="row text-center justify-content-center  ">
                    <h1 ><strong>{{currentImg.ctitle}}</strong></h1>
                    <div class="row-53"></div>
                    <h6 class="lead "> {{currentImg.ctext}} </h6>
               </div>
               
            </div>

            <div class="col-10 col-sm-8 col-lg-6 row justify-content-left">
          
              <h1 height="99" class="display-5 fw-bold lh-1 mb-3"><strong>{{currentImg.title}}</strong></h1> -->
              <!-- <div class="row-50"></div><br> -->
              
              <!-- <h6 class="lead justify-content-center"> {{currentImg.text}} </h6><br>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start"> -->
                <!-- <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Explore</button> -->
<!--                 
              </div>
            </div>
          </div> -->
<!-- new block -->
            <!-- <div class="row text-center c-text-pos ">
              <div class="col-12">
                <h1 class="display-5 fw-bold lh-1 mb-3" >{{currentImg.ctitle}}</h1>
                <p class="h2"><em>{{currentImg.ctext}}</em></p>
              </div>
            </div>  -->

<!-- block1 -->

                <!-- <div class="   c-text-pos  ">
                    <div class=" ">
                      <h1 class="display-5 fw-bold lh-1 mb-3" >{{currentImg.ctitle}}</h1>
                      <p class="lead"><em>{{currentImg.ctext}}</em></p>
                     
                    </div>
                </div>  -->

                <div class="row    ">
                    <div class="col-12  c-text-pos">
                      <h1 class="display-5 fw-bold lh-1 mb-3" >{{currentImg.ctitle}}</h1>
                      <p class="lead"><em>{{currentImg.ctext}}</em></p>
                    </div>
                    <div class="row-51"></div>

                    <div class=" col-9 c-img-pos ">
                        <img   alt="image" width="100%" height="460px" class="" :src="currentImg.mm" >
                    </div>
                </div> 

           
                <div class="row align-items-center c-text">
            

                  <div class="col-12 col-md-12 col-lg-6 col-xl-5  ">
                    <h1>{{currentImg.title}}</h1>
                      <div class="row-51"></div>
                    <p class="lead mb-5">{{currentImg.text}}</p>
                  </div>
              
                  <div class="col-7 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                    <img alt="image" width="60px" height="60px" class="img-fluid slide-img" :src="currentImg.hm" >
                  </div>

                </div>
            <!--   block1 end -->

            <!-- block 2 -->
             <!-- <div class="   c-text-pos  ">
                    <div class=" ">
                      <h1 class="display-5 fw-bold lh-1 mb-3" >{{currentImg.ctitle}}</h1>
                      <p class="lead"><em>{{currentImg.ctext}}</em></p>
                    </div>
                </div> 

          <div class="container align-items-center justify-content-center d-flex">
            <div class="row align-items-center text-left">
              <div class="col-12 col-sm-6">
                 <img alt="image" width="60px" height="60px" class=" slide-img" :src="currentImg.hm" >
              </div>

              <div class="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
               <h1>{{currentImg.title}}</h1>
                      <div class="row-51"></div>
                    <p class="lead mb-5">{{currentImg.text}}</p>
                 
              </div>
            </div>
          </div> -->

          <!-- block2 end -->


          <!-- <div class="row align-items-center">

              
            <div class="col-12 col-md-12 col-lg-6 col-xl-5">
              <h1>{{currentImg.title}} </h1>
              <p class="lead mb-5">{{currentImg.text}}</p>

              <p class="mt-4 mb-5"><a class="btn btn-primary btn-lg px-4 me-md-2" href="https://www.nextage.com">Explore</a></p>

              <p>Follow us on</p>
              <p>
                <a href="https://www.nextage.com" class="mx-2 text-secondary"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.nextage.com" class="mx-2 text-secondary"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.nextage.com" class="mx-2 text-secondary"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.nextage.com" class="mx-2 text-secondary"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                <a href="https://www.nextage.com" class="mx-2 text-secondary"><i class="fab fa-google" aria-hidden="true"></i></a>
              </p>
            </div>
             <div class="row text-center justify-content-center">
                <div class="col-12">
                  <h1 class="display-5 fw-bold lh-1 mb-3"><strong>{{currentImg.ctitle}}</strong></h1>
                      <div class="row-60"></div>
                  <h6 class="lead"> {{currentImg.ctext}} </h6><br>
                   <p class="mt-4 mb-5"><a class="btn btn-primary btn-lg px-4 me-md-2" href="https://www.nextage.com">Explore</a></p>
                </div>
              </div>
            <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
              
                <img class="img-fluid" :src="currentImg.hm" />
            </div>
          </div> -->
          

            <!-- <div v-for="i in list1" :key="i.id">
                <div >
                    <img  :src="i.im" />
                    <div >
                            <div class="text-block">
                                <h4>{{i.text}}</h4>
                                <p >{{i.title}}</p>
                                <button>Explore</button>
                            </div>
                            <div class="health360-block">
                                <img class="imgsz" :src="i.hm" />
                            </div>
                    </div>
                </div> 
                
           </div> -->
    </transition-group>



  </div>
</section>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
    <!-- <a class="prev" @click="prev" href="#">&#10094; <i class="fa fa-chevron-left" aria-hidden="true"></i></a>
    <a class="next" @click="next" href="#">&#10095; <i class="fa fa-chevron-right" aria-hidden="true"></i></a> -->
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      list: [
        {title:"Nutrition for healthy life", ctitle:"", text:"Be a part of an exciting journey of helping stay healthy and grow wealthy", ctext:"",  im:"./images/nx_main3.jpg", hm:"./images/hero/hero1.svg", mm:"./images/slideempty.png"},
        {title:"Your Health And Business Success is Our Goal,",ctitle:"", text:"Nextage Organics Invites You To An Incredible Healthy And Business Journey. ", ctext:"",  im:"./images/nx_main3.jpg", hm:"./images/hero/hero2.png " , mm:"./images/slideempty.png"},
        // {title:"",ctitle:"HERBOVATION", text:"", ctext:"A New Direction to Great Nutrition",  im:"./images/slide3new1.png", hm:"./images/slideempty.png", mm:"./images/slideempty.png"},
        {title:"",ctitle:"HERBOVATION", text:"", ctext:"A New Direction to Great Nutrition",  im:"./images/nx_main3.jpg", hm:"./images/slideempty.png", mm:"./images/slide3new2.png"}
      ],

    // list1: [
    //     {id:1, text: "Be a part of an exciting journey of helping stay healthy and grow wealthy", title: "Nutrition for healthy life", im:"./images/S1.png", hm:"./images/hero/hero1.png"},
    //     {id:2, text: "bslide2", title: "healthy life", im:"./images/S1.png" ,hm:"./images/hero/hero2.png"},
    //     {id:3, text: "no", title: "plain", im:"./images/hero/hero3.png", hm:"./images/hero/hero3.png" }
    //   ],
      
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
      
    },
    prev: function() {
      this.currentIndex -= 1;
    }

  },

  computed: {
    currentImg: function() {
      return this.list[Math.abs(this.currentIndex) % this.list.length];
    },
    // currenttext: function() {
    //   return this.list1[Math.abs(this.currentIndex) % this.list1.length];
    // }

  }
};
</script>
<style scoped>

@import "../styles/blocks/blocks.css";
@import "../styles/blocks/bootstrap.min.css";



 

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
  display:inline-block;
  
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
height:auto;
width:100%;
}
.slide-bg-img{
/* width:'100%';
height: '650px'; */
}
.slide-img{
 /* width:"50px" ;
 height:"50px"; */
 /* height:auto;
width:100%; */
/* max-width: 500px; */
  

}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  top:calc(50% - 25px);
  vertical-align: baseline;
  width: auto;
  padding: 5px;
  color: rgb(177, 33, 33);
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius:  100px 100px 100px 100px ;
  text-decoration: none;
  user-select: none;
   /* padding:5px 10px; */
        /* background-color:rgba(0,0,0,0.5); */
        /* border:1px solid transparent; */
        /* margin:5px 10px; */
        /* color:#FFF; */
        /* height:50px;/ */
        /* width:50px; */
        /* position:absolute; */
        /* margin-top:-25px;
        z-index:2; */
}
/* Position the "next button" to the right */
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(32, 255, 81, 0.9);
}

.containerslide {
  position: relative;
  text-align: center;
  color: rgb(54, 54, 54);
}
 
/* .centeredp {
  position: absolute;
  top: 200px;
  left: 300px;
  transform: translate(-50%, -50%);
} */

.c-text{
  font-size:5vw;

}
.c-center-text{
  align-content: center;
  text-align: center;
}
.c-text-pos{
  /* font-size:5vw; */
  position: absolute;
  align-content: center;
  text-align: center;
  top:  25%;
  bottom: auto;
  left: 50%;
  /* left: 50%; */
  /* transform: translateY(-50%); */
  transform: translate(-50%, -50%);
}

.c-img-pos{
  /* font-size:5vw; */
  position: absolute;
  align-content: center;
  /* text-align: center; */
  /* height:auto;
  width: 100%; */
  top:  30%;
  bottom: auto;
  left: 50%;
  /* left: 50%; */
  transform: translateX(-50%);
  /* transform: translate(-50%, -50%); */
}




@media only screen and (max-width: 620px) {
  /* For mobile phones: */
  .c-img-pos, .c-text-pos {
    width: 100%;
  }
}
</style>
 