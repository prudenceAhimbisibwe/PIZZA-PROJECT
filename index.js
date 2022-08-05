function Pizza(size, crust, topping, quantity,total){
    this.mySize = size;
    this.myCrust = crust;
    this.myTop = topping;
    this.myQuantity = quantity;
    this.mytotal = total;
}
//prototype
Pizza.prototype.totalCost = function(){
    return (mySize + myCrust + myTop)*(myQuantity)
}


//User interface
//submit button
$(document).ready(function(){
    $("#send").click(function(event){
        event.preventDefault();

        var mquantity = document.getElementById("quantity").value;

        if(mquantity == ""){
            alert("choose the quantity")
        }
        else{
            $("#send").hide();
            $(".checkout").show();
            $(".display").slideDown();
            $("#home").slideDown();
            $("#grand").slideDown();
            $("#neworder").hide();
        }

        function getSize(){
            var sizeCost = document.getElementById("pizza").value;
            return parseInt(sizeCost) 
        }
        function getCrust(){
            var crustCost = document.getElementById("crust").value;
            return parseInt(crustCost) 
        }
        function getNumber(){
            var myNumber = document.getElementById("quantity").value;
            return parseInt(myNumber) 
        }
        
        function getTopping() {
            var myTopping = document.getElementById("topping").value;
            return parseInt(myTopping);
          }
        //   var gOrder = 1;
        //   var gCost = 0;
          
       // Object for new customer;

        var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
        
        // Total cost for the new customer:
        var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
        // alert("Your charges are " + totalCost)
        // let newCost = 0;
        // var newCost = newCost + totalCost
        $(".display").append("<h3> You have ordered " + newCustomer.myQuantity +" Pizza and your Total Bill is: " + totalCost +"</h3>")
    });

    //delivery location
    $("#home").click(function(){
        $("#grand").hide();
        $(".display").hide();
        $(".checkout").hide();
        $(".userdeliver").show();
        $("#neworder").hide();
    });

    // checkout button details
    $("#grand").click(function(){
        $("#home").hide();
        $(".display").show();
        $(".checkout").hide();
        $(".userdeliver").hide();
        $("#neworder").show();
    });
    //new order
    $("#neworder").click(function(){
        $("#home").hide();
        $(".display").hide();
        $(".checkout").hide();
        $(".userdeliver").hide();
        $("#neworder").hide();
        $("#myForm").trigger("reset")
        $("#send").show();
        $(".grandorder").hide();

    });
        //final order button 
        $("#finalorder").click(function(event){
            event.preventDefault();
            $("#home").hide();
            $(".display").hide();
            $(".checkout").hide();
            // $(".userdeliver").hide();

            function getSize(){
                var sizeCost = document.getElementById("pizza").value;
                return parseInt(sizeCost) 
            }
            function getCrust(){
                var crustCost = document.getElementById("crust").value;
                return parseInt(crustCost) 
            }
            function getNumber(){
                var myNumber = document.getElementById("quantity").value;
                return parseInt(myNumber) 
            }
            
            function getTopping() {
                var myTopping = document.getElementById("topping").value;
                return parseInt(myTopping);
              }
              
           // Object for new customer;
    
            var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
            
            // Total cost for the new customer:
            var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
            // alert("Your charges are " + totalCost)
            // $(".display").append("<h3> Your Total Bill is: " + totalCost +"</h3>")
            
            // confirm("The delivery amount is 180 ")
            
            var grandTotal = totalCost+180;
    
            // console.log("Your final bill is: " + grandTotal);
            let customer = $("input#name").val();
            let phone = $("input#phone").val();
            let area = $("input#place").val();
    
            if ($("input#name").val() && $("input#phone").val() && $("input#place").val()!=""){
      
                $(".grandorder").append('<h3>'+ customer +" "+ "of contact" , phone + "You have ordered " + newCustomer.myQuantity +" pizza, for " + totalCost + " We have recieved your order and it will be delivered to you at "+area+ ". Prepare sh. "+grandTotal +'<h3>');
                 // $("#totalbill").hide();
                 $(".grandorder").slideDown(1000);
                 $(".userdeliver").hide();
                 $("#neworder").show();
              }
              else {
                alert("Please fill in the details for delivery!");
                $(".userdeliver").show();
                // $("button#final-order").show();
              }
            
        });
        
});
            
