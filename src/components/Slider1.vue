<template > 
  <div id="Slider1"  v-for="i in [currentIndex]" :key="i">
      
<!-- 
 -->
  <!-- <div  v-for="j in 1" :key="j"> -->
        <div v-if="currentIndex===0">
          <section class="nxo-block p-0   " :style="{backgroundImage:`url(${currentImg.im})`, width:'100%' ,height: '600px' }">
            <div class="container " > 

                <transition-group name="fade" tag="div">
                  
                    <div class="row align-items-center">
                  
                        <div class="col-12 col-md-12 col-lg-6 col-xl-5 pt-0">
                          <h1>{{currentImg.title}}</h1>
                          <p class="lead mb-5">{{currentImg.text}}</p>

                      </div>
                        
                        <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                          <img alt="image" class="img-fluid" :src="currentImg.hm">
                        </div>

                    </div>
                </transition-group>

            </div>
          </section>

        </div>
        <div v-else-if="currentIndex===1">
            <section class="nxo-block p-0   " :style="{backgroundImage:`url(${currentImg.im})`, width:'100%' ,height: '600px' }">
              <div class="container " > 

                  <transition-group name="fade" tag="div">
                    
                      <div class="row align-items-center">
                    
                          <div class="col-12 col-md-12 col-lg-6 col-xl-5 pt-0">
                            <h1>{{currentImg.title}}</h1>
                            <p class="lead mb-5"> {{currentImg.text}}</p>

                        </div>
                          
                          <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                            <img alt="image" class="img-fluid" :src="currentImg.hm">
                          </div>

                      </div>
                  </transition-group>

              </div>
            </section>
          </div>
        <div v-else>

              <section class="nxo-block pt-5" :style="{backgroundImage:`url(${currentImg.im})`, width:'100%' ,height: '600px' }">
                <div class="container " > 

                    <transition-group name="fade" tag="div">
                      
                        <div class="row align-items-center">
                      
                            <div class="col-12 col-md-12 col-lg-6 col-xl-5 pt-0">
                              <h1>{{currentImg.title}}</h1>
                              <p class="lead mb-5">{{currentImg.text}}</p>

                          </div>
                            
                            <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                              <img alt="image" class="img-fluid" :src="currentImg.hm">
                            </div>

                        </div>
                        <div class="row text-center  ">
                            <div class="col-12">
                              <h1 class="display-5 fw-bold lh-1 mb-3"> {{currentImg.ctitle}}  </h1>
                              <p class="h2"><em> {{currentImg.ctext}}</em></p>
                            </div>
                        </div>
                    </transition-group>

                </div>
              </section>
            </div>
        <div currentIndex="currentIndex===0"></div>
<!-- </div> -->
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
    <!-- <a class="prev" @click="prev" href="#">&#10094; <i class="fa fa-chevron-left" aria-hidden="true"></i></a>
    <a class="next" @click="next" href="#">&#10095; <i class="fa fa-chevron-right" aria-hidden="true"></i></a> -->
  </div>
</template>
<script>
export default {
  name: "Slider1",
  data() {
    return {
      list: [
        {id:1, title:"Nutrition for healthy life", ctitle:"", text:"Be a part of an exciting journey of helping stay healthy and grow wealthy", ctext:"",  im:"./images/nx_main3.jpg", hm:"./images/hero/hero1.svg", mm:""},
        {id:2, title:"Your Health And Business Success is Our Goal,",ctitle:"", text:"Nextage Organics Invites You To An Incredible Healthy And Business Journey. ", ctext:"",  im:"./images/nx_main3.jpg", hm:"./images/hero/hero2.png " , mm:""},
        {id:3, title:"HERBOVATION",ctitle:"HERBOVATION", text:"A New Direction to Great Nutrition", ctext:"A New Direction to Great Nutrition",  im:"./images/slide3new1.png", hm:"./images/empty1.png", mm:""}
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

/* @import "../styles/blocks/blocks.css";
@import "../styles/blocks/bootstrap.min.css"; */

.container_slide {
  position: relative;
  font-family: Arial;
}

.text-blockz {
  position: absolute;
  width:50%;
  height:auto;
  /* top: 20px;
  left: 20px; */
  /* background-color: black; */
  color: rgb(51, 46, 46);
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  top: 20%;
  left: 20%;
  transform: translate(-20%, -20%);
}
.health360-blockz{
  position: absolute;
  width:50%;
  height:auto;
  /* top: 20px;
  right: 20px; */
  /* background-color: black; */
  color: rgb(51, 46, 46);
  padding-left: 20px;
  padding-right: 20px;
}

/* .text-blockz button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.text-blockz button:hover {
  background-color: #555;
  color: white;
} */


.slidez{
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/S1.png."); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* display:inline-block; */
  /* height: 50%; */
}
.imgszz{
     /* width: 100%; */
     /* height: 700px; */
  /* overflow:hidden; */
}

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
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  /* top:calc(50% - 25px); */
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

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centeredt {
  position: absolute;
  top: 100px;
  /* left: 50%; */
  transform: translate(-50%, -50%);
}
/* .centeredp {
  position: absolute;
  top: 200px;
  left: 300px;
  transform: translate(-50%, -50%);
} */

</style>
 