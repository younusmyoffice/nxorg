

<template>
    
<div id='Bmibmrcal'>
    <div class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }">{{err}}
    </div>
      <!-- <div v-text="err"></div> -->
      <!-- <div v-html="err"></div> -->
            <form @submit.prevent="calculate">
            
              <div>
                <label>height in feet</label>
                <input v-model.number="height" placeholder="enter your height in feet"/>
              </div>
              <div>
                <label>Weught in kg</label>
                <input v-model.number="weight" />
              </div>
              <div>
                <label>Age</label>
                <input v-model.number="age" />
              </div>
              <p>Chooose gender</p>
              <div>
                <label for="male">Male</label>
                <input type ="radio" id="male" v-model="gender" value="male"   />
                <label for="female">Female</label>
                <input type ="radio" id="female" v-model="gender" value="female"  />
              
                    <!-- <label for="male">Male</label>
                <input type ="radio" id="male" v-model="gender" v-bind:value="a" />
                <label for="female">Female</label>
                <input type ="radio" id="female" v-model="gender" v-bind:value="b" /> -->
              
              </div>
            
              <button type="submit" @click = "calculate()">calculate</button>
            </form>
            <!-- <p>bmi: {{ bmi }}</p> -->
            <span>bmi: {{ bmi }}</span>
            <span>bmr: {{ bmr }}</span>
            <!-- <div class="static"
            v-bind:class="{ active: isActive, 'text-danger': hasError }">{{msg}}</div> -->
         <div  v-html="msg"></div>
    <!-- <div v-html="fill"></div> -->
  </div>
</template>
<script>
export default {
  name: "Bmibmrcal",
  data() {
    return {
      height: null,
      weight: null,
      age:null,
      gender:null,
      bmi: null,
      bmr:null,
      color:"red",
      err:null,
      msg:"",
       isActive: false,
      hasError: true,
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
      color: 'red',
      fontSize: '13px'
    }
   
   };
   
  },
  computed: {
    formValid() {
      const { height, weight, age } = this;
      return +height > 0 && +weight > 0 && +age > 0;
    },
  },
  methods: {
    calculate() {
      if (!this.formValid) {
        // data() {
          return{
          
        },
        // },
        this.err ="please fill all the required fields";
      }
      const { height, weight, age, gender} = this;
      var bmiv=weight / (height/3.281) ** 2;
      this.bmi = parseFloat(bmiv).toFixed(0); //12.23
      //  male BMR = 66.47 + ( 13.75 * weight in kg ) + ( 5.003 * height in cm ) - ( 6.755 * age in years )
      // female BMR = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years )
      // weight kg height in cm age in years
      //  const { height, weight, age } = this;
       if (this.gender == "male"){
          // this.bmr = 66.47 ;
          var bmrmale=66.47  + ( 13.75 * weight) + ( 5.003 * (height*30.48)) - ( 6.755 * age);
          this.bmr =parseFloat(bmrmale).toFixed(0); //12.23
          
       }else{
          // this.bmr = 4 ;
          var bmrfemale= 655.1 + ( 9.563 * weight ) + ( 1.85 * (height*30.48)) - ( 4.676 * age );
          this.bmr= parseFloat(bmrfemale).toFixed(0);
       }
      // this.bmrmale = 66.47 + ( 13.75 * weight in kg ) + ( 5.003 * height in cm ) - ( 6.755 * age in years );
      // this.bmrfemale = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years );
      // this.bmr = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years );
      const { bmi} = this;
      if (this.bmi < 18.5){
          // this.bmr = 66.47 ;
         
            this.msg="Critically low weight";
        
          
       }else if (this.bmi <= 24){
          this.msg="Critically low weight";
          
          
       }else if (this.bmi <= 30){
          this.msg="Critically low weight";

       }else if (this.bmi <= 35){
          
           this.msg= "Over weight First degree obese";
        
       }else if (this.bmi <= 40){
          
           this.msg= "Over weight second degree obese";
     
       }else {
          
          // this.msg=<div v-bind:style="styleObject">Over weight third degree obese</div>;
          //  obese3 :"<p  v-bind:style="{color:red}">Over weight third degree obese</p>"
       
       }
       
    
    },
  },
};
</script>