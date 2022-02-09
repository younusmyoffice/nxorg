<template>
  <section
    id="Bmibmrcal"
    class="nxo-block   "
    style="background-color: #f4fef5;"
  >
    <div class="bg-gray">
      <div class="container">
        <div class="row-50"></div>

        <div class="row text-center justify-content-center">
          <div class="col-8">
            <h1><strong>Free fitness check for you</strong></h1>
            <p>Know your nutritional status</p>
          </div>
        </div>
      </div>

      <div class="container bg-r">
        <div class="row-50"></div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <div class="row-50"></div>
            <h2>Your Fitness Result</h2>
            <!-- <p class="text-large">Support, Sales, and Account Management services are currently available in English</p> -->
            <!-- bmi code -->
            <div class="row mt-4">
              <div class="col">
                <table class="styled-table resultContainer">
                  <thead>
                    <tr>
                      <th>Particulars</th>
                      <th>
                        <span class="row text-center justify-content-center"
                          >Values</span
                        >
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        BMI <br /><span class="nx_green">Body Mass Index</span>
                      </td>
                      <td>
                        <h6>
                          <strong
                            ><span
                              class="row text-center justify-content-center"
                              >{{ bmi }}</span
                            ></strong
                          >
                        </h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        BMR <br /><span class="nx_green"
                          >Basal Metabolic Rate</span
                        >
                      </td>
                      <td>
                        <h6>
                          <strong
                            ><span
                              class="row text-center justify-content-center"
                              >{{ bmr }} kcal / day</span
                            ></strong
                          >
                        </h6>
                      </td>
                    </tr>
                    <!-- <tr  >
                                    <td>Status &nbsp;&nbsp;&nbsp; <br><span class="nx_green">Current Body Condition</span></td>
                                    <td><h6><strong><span class="status"></span><strong></h6></td>
                                </tr> -->
                    <tr>
                      <td>
                        Normal Weight <br />
                        <span class="nx_green">Healthy Weight</span>
                      </td>
                      <td>
                        <h6>
                          <strong
                            ><span
                              class="nx_green row text-center justify-content-center"
                              >Range 18.5 - 24 Bmi
                            </span></strong
                          >
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        You body condition is <br /><span
                          class="nx_green"
                        ></span>
                      </td>
                      <!-- <td><h6><strong><span class="text-center row justify-content-center"><div  v-html="msg" ></div></span></strong></h6></td> -->
                      <!-- <td><h6><strong><span class="text-center row justify-content-center"><div  v-bind="msg<24? 'r' :'g'"></div></span></strong></h6></td> -->
                      <td>
                        <h6>
                          <strong
                            ><span
                              class="text-center row justify-content-center"
                            >
                              <div class="b" v-if="bmi <= 0"></div>
                              <div class="b" v-else-if="bmi <= 18.5">
                                Very low body weight
                              </div>
                              <div class="g" v-else-if="bmi <= 24">
                                Healthy Weight
                              </div>
                              <div class="o" v-else-if="bmi <= 30">
                                Over Weight
                              </div>
                              <div class="red" v-else-if="bmi <= 35">
                                Over weight obese stage 1
                              </div>
                              <div class="red" v-else-if="bmi <= 40">
                                Over weight obese stage 2
                              </div>
                              <div class="red" v-else>
                                Over weight obese stage 3
                              </div>
                            </span></strong
                          >
                        </h6>
                      </td>
                    </tr>
                     

                    <!-- and so on... -->
                  </tbody>
                </table> 
                
 

              </div>
            </div>
            <!-- bmi -->
                <p>
                  <span class="text-center row justify-content-center">
                      <div v-if="bmi <= 0"></div>
                      <div v-else-if="bmi <= 18.5">
                        Your body is vey low on weight. Your body is
                        <span class="red">undernutritioned</span> your
                        body requires nourishment and nutrition.<br><strong>This means that you need rouhgly <span class="red">{{bmr}}</span> calories a day to maintain healthy weight.</strong>
                      </div>
                      <div v-else-if="bmi <= 24">
                        Your body has
                        <span class="g">Healthy Weight</span>
                      </div>
                      <div v-else-if="bmi <= 30">
                        Your body is Over Weight which is the starting
                        phase of the <span class="o">obese</span>.<br> <strong>This means that you need rouhgly <span class="red">{{bmr}}</span> calories a day to maintain your current weight.</strong>
                      </div>
                      <div v-else-if="bmi <= 35">
                        Your body is Over weight
                        <span class="o">obese stage 1</span>,
                        <span class="red"> precautions</span> need to be
                        taken.<br><strong>This means that you need rouhgly <span class="red">{{bmr}}</span> calories a day to maintain healthy weight.</strong>
                      </div>
                      <div v-else-if="bmi <= 40">
                        Your body is Over weight
                        <span class="o">obese stage 2</span>, your body
                        requires <span class="red"> help</span>.<br><strong>This means that you need rouhgly <span class="red">{{bmr}}</span> calories a day to maintain healthy weight.</strong>
                      </div>
                      <div v-else>
                        your body is Over weight
                        <span class="o">obese stage 3</span>,
                        <span class="red">
                          critically in a danger zone</span
                        >. Health risks will increase.<br> <strong>This means that you need rouhgly <span class="red">{{bmr}}</span> calories a day to maintain healthy weight.</strong>
                      </div>
                    </span>
                </p>
               

          </div>
          

          <div class="col-12 col-md-6 ml-auto">
            <form @submit.prevent="calculate">
              <div class="row-50"></div>
              <h2>Enter Details here</h2>
              <div class="row-51"></div>
              <div
                class="static"
                v-bind:class="{ active: isActive, 'text-danger': hasError }"
              >
                {{ err }}
              </div>

              <div class="row mt-4">
                <div class="col">
                  <input style="width: 70%; margin: auto; border-width: 2px; border-color: #71bf44; border-radius: 5px; margin-top: 12px;"
                    v-model.number="height"
                    step="0.01"
                    placeholder="Height in feet"
                    id="heightInFeet"
                    class="form-control"
                    type="number"
                    required
                  />
                  <p class="u i"></p>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <input style="width: 70%; margin: auto; border-width: 2px; border-color: #71bf44; border-radius: 5px; margin-top: 12px;"
                    v-model.number="weight"
                    step="0.01"
                    placeholder="Weight in Kgs"
                    id="weight"
                    class="form-control"
                    type="number"
                    required
                  />
                  <p class="u i"></p>
                </div>
              </div>
              <div class="row mt-4" >
                <div class="col">
                  <input style="width: 70%; margin: auto; border-width: 2px; border-color: #71bf44; border-radius: 5px; margin-top: 12px;"
                    v-model.number="age"
                    placeholder="Age"
                    id="age"
                    class="form-control"
                    type="number"
                    required
                  />
                  <p class="u i"></p>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <!-- <input
                    v-model.number="age"
                    placeholder="Age"
                    id="age"
                    class="form-control"
                    type="number"
                    required
                  /> -->
                  <!-- <p class="u i"></p> -->
                  <!-- <div class="row mt-4">
                  <label for="cars">Choose Your Daily Activity</label> -->
                  <select v-model="act"  id="act" class="form-control" placeholder="Daily Activity"
                    style="width: 70%; margin: auto; border-width: 2px; border-color: #71bf44; border-radius: 5px;  " required>  
                    <option value="" disabled selected hidden>Daily Activity</option>
                    <option value="0" id="0">Basal Metabolic Rate (BMR)</option>
                    <option value="1" id="1">Little/No exercise</option>
                    <option value="2" id="2">Low activity (exercise 1-3 times/week)</option>
                    <option value="3" id="3">Active (daily exercise or intense exercise 3-4 times/week)</option>
                    <option value="4" id="4">High activity (intense exercise 6-7 times/week)</option>
                    <option value="5" id="5">Very high activity (very intense exercise daily, or physical job)</option>
                  </select>
                  <!-- </div> -->


                </div>
              </div>

              <div class="row mt-4 text-center justify-content-center">
                <!-- <h1>Choose gender</h1> -->
                <div class="col">
                  <div class="form-check">
                    <input
                      placeholder="female"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      v-model="gender"
                      value="female"
                      required
                      checked
                    />
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>
                </div>

                <div class="col">
                  <div class="form-check">
                    <input
                      placeholder="male"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      v-model="gender"
                      value="male"
                      required
                    />
                    <label class="form-check-label" for="male"> Male </label>
                  </div>
                </div>
              </div>
              <!-- bmi error output -->

              <div class="row mt-4 text-center justify-content-center">
                <div class="col">
                  <button
                    type="submit"
                    @click="calculate()"
                    class="btn btn-primary submitButton button"
                    value="Measure"
                  >
                    calculate
                  </button>
                </div>
              </div>
              <div class="row-50"></div>

              <!-- bmi output -->
            </form>
          </div>
        </div>
      </div>

    </div>
    
  </section>
</template>

<script>
export default {
  name: "Bmibmrcal",
  data() {
    return {
      height: null,
      weight: null,
      age: null,
      gender: null,
      bmi: null,
      bmr: null,
      act:null,
      // color:"red",
      err: null,
      msg: "",
      isActive: false,
      hasError: true,
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        // color: 'red',
        fontSize: "13px",
        red: "#ff0000",
        orange: "ffae00",
        blue: "#6200ff",
        green: "#009879",
      },
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
        return (
          {},
          // },
          (this.err = "please fill all the required fields")
        );
      }
      const { height, weight, age, gender, act } = this;
      var bmiv = weight / (height / 3.281) ** 2;
      this.bmi = parseFloat(bmiv).toFixed(2); //12.23
      //  male BMR = 66.47 + ( 13.75 * weight in kg ) + ( 5.003 * height in cm ) - ( 6.755 * age in years )
      // female BMR = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years )
      // weight kg height in cm age in years
      //  const { height, weight, age } = this;
      if (this.gender == "male") {
        // this.bmr = 66.47 ;
        if(this.act == '0'){
          var bmrmale =
          66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age;
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }else if(this.act == '1'){
          var bmrmale =
          1.2 * (66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age);
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }
        else if(this.act == '2'){
          var bmrmale =
          1.375 * (66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age);
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }
        else if(this.act == '3'){
          var bmrmale =
          1.55 * (66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age);
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }
        else if(this.act == '4'){
          var bmrmale =
          1.725 * (66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age);
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }
        else if(this.act == '5'){
          var bmrmale =
          1.9 * (66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age);
          this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
        }
        // var bmrmale =
        //   66.47 + 13.75 * weight + 5.003 * (height * 30.48) - 6.755 * age;
        // this.bmr = parseFloat(bmrmale).toFixed(2); //12.23
      } else {
        // this.bmr = 4 ;
        if(this.act == '0'){
          var bmrfemale =
          655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age;
          this.bmr = parseFloat(bmrfemale).toFixed(2);
        }else if(this.act == '1'){
          var bmrfemale =
          1.2 * (655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age);
          this.bmr = parseFloat(bmrfemale).toFixed(2); //12.23
        }
        else if(this.act == '2'){
          var bmrfemale =
          1.375 * (655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age);
          this.bmr = parseFloat(bmrfemale).toFixed(2); //12.23
        }
        else if(this.act == '3'){
          var bmrfemale =
          1.55 * (655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age);
          this.bmr = parseFloat(bmrfemale).toFixed(2); //12.23
        }
        else if(this.act == '4'){
          var bmrfemale =
          1.725 * (655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age);
          this.bmr = parseFloat(bmrfemale).toFixed(2); //12.23
        }
        else if(this.act == '5'){
          var bmrfemale =
          1.9 * (655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age);
          this.bmr = parseFloat(bmrfemale).toFixed(2); //12.23
        }
        
        // var bmrfemale =
        //   655.1 + 9.563 * weight + 1.85 * (height * 30.48) - 4.676 * age;
        // this.bmr = parseFloat(bmrfemale).toFixed(2);
      }
      // this.bmrmale = 66.47 + ( 13.75 * weight in kg ) + ( 5.003 * height in cm ) - ( 6.755 * age in years );
      // this.bmrfemale = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years );
      // this.bmr = 655.1 + ( 9.563 * weight in kg ) + ( 1.85 * height in cm ) - ( 4.676 * age in years );
      // const { bmi} = this;
      // if (this.bmi < 18.5){
      //     // this.bmr = 66.47 ;

      //       this.msg="Critically low weight";

      //  }else if (this.bmi <= 24){
      //     this.msg="Healthy weight";

      //  }else if (this.bmi <= 30){
      //     this.msg="Over weight";

      //  }else if (this.bmi <= 35){

      //      this.msg= "Over weight First degree obese";

      //  }else if (this.bmi <= 40){

      //      this.msg= "Over weight second degree obese";

      //  }else {
      //     this.msg= "Over weight third degree obese";
      //     // this.msg='<div v-bind:style="styleObject">Over weight third degree obese</div>';
      //     //  this.msg= "<b><p  v-bind:style='color:red;'>Over weight third degree obese</p></b>"

      //  }
    },
  },
};
</script>
<style>
/* @import "../styles/blocks/blocks.css";
		@import "../styles/blocks/bootstrap.min.css"; */

.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
}

.styled-table thead tr {
  background-color: #71bf44;
  color: #ffffff;
  text-align: left;
  border-radius: 1em;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
  background-color: #ffffff;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
  /* background-color: #000000; */
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
.g {
  color: #71bf44;
}
.o {
  color: #ffae00;
}
.red {
  color: #ff0000;
}
.b {
  color: #2600ff;
}
</style>
