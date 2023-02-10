const app = Vue.createApp({

 //vue methods
 methods:{
    countChars(event){
        //get input value and length
        var charInput = event.target.value;
        var charInputLength = charInput.length;
        console.log("Counting...." + charInputLength);
    },

    countCharacters: function (event) {
        var charInput = event.target.value;
        var charInputLength = charInput.length;
        console.log("Counting...." + charInputLength);
    },

    showTextMessages(event){
        var msgText = event.target.value;
        $("#sms-phone-display").html(msgText);
    },

    ShowSendTo(event){
        var selectedMsgType = event.target.value;
        var showDivId = event.target.getAttribute('data-show-div');
        $(".send-to-div").hide();
        $("#"+showDivId).show();
    }
 }

});
  
app.mount('#app');