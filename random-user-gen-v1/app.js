const app = Vue.createApp({
    //vue data
    data() {
      return {
        firstName : 'Laiman',
        lastName : 'Kassama',
        email : 'lai@gmail.com',
        gender : 'male',
        picture : 'https://akassama.com/wp-content/uploads/2021/09/NewProfilePic-scaled-e1631125829695-768x768.jpg',
      }
    },

    //vue methods
    methods:{
      getUser(){
        this.gender = this.getRandomGender(),
        this.firstName = this.getRandomNames(this.gender, "fn"),
        this.lastName = this.getRandomNames(this.gender, "ln"),
        this.email = this.generateEmail(this.firstName, this.lastName),
        this.picture = 'https://randomuser.me/api/portraits/'+this.setGenderImageDirective(this.gender)+'/'+this.getRandomInt(1, 100)+'.jpg'
      },

      //get random number 1-100
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      },

      //get random gender
      getRandomGender(){
        var genders = Array("male", "female");
        return genders[Math.floor(Math.random()*genders.length)];
      },

      //set gender directive
      setGenderImageDirective(gender){
        return gender == 'male' ? 'men' : 'women';
      },

      //get random names
      getRandomNames(gender, name_type){
        //if first names
        if(name_type == 'fn'){
          var fn_lists = Array("Lai", "Ous", "Oms", "Bob", "Maha");
          if(gender == 'female')
          {
            fn_lists = Array("Lisa", "Mam", "Fatu", "Anna", "Jai");
          }
          return fn_lists[Math.floor(Math.random()*fn_lists.length)];
        }

        var ln_lists = Array("Kasman", "Ceesay", "John", "Bah", "Jagne");

        return ln_lists[Math.floor(Math.random()*ln_lists.length)];
      },

      //generate email
      generateEmail(f_name, l_name){
        var domains = Array("yahoo", "gmail", "outlook", "zoho", "yandex");
        var domain = domains[Math.floor(Math.random()*domains.length)];

        return f_name.toLowerCase()+l_name.toLowerCase()+"@"+domain+".com";
      }


    },

  })
  
  app.mount('#app')