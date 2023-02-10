const app = Vue.createApp({
  data: function() {
    return {
      greeting: 'Hello Vue 3!',
      isVisible: false,
    }
  },

  methods: {
    toggleBox(){
      this.isVisible  = !this.isVisible;
    },
    greet(greeting){
      console.log(greeting);
    }
  },
});
  
app.component('login-form', {
  template:`
    <form @submit.prevent="handleSubmit">
      <h2>{{title}}</h2>
        <custom-input class="form-control" id="Email" :label="emailLabel" />

        <custom-input class="form-control" id="Password"  :label="passwordLabel"/>

      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
  `,
  components: ['custom-input'],
  data(){
    return{
      title: 'Login Form',
      Email: '',
      Password: '',
      emailLabel: 'Email',
      passwordLabel: 'Password',
    }
  },
  methods: {
    handleSubmit(){
      console.log("submitted! :", this.Email, this.Password);
    }
  }
});

app.component('custom-input', {
  template: `
    <label>
      {{label}}
      <input type="text" v-model="inputValue">
    </label>
  `,
  props: ['label'],
  computed: {
    inputValue: {
      get(){

      },
      set(){

      }
    }
  }
  // data(){
  //   return{
  //     inputVakue: ''
  //   }
  // }
});

app.mount('#app');