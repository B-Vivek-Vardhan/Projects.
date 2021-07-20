 var veg = 160;
    var baby = 200;
    var spring = 170;
    var shanghai = 220;
    var chilli = 60;
    var mushroom = 260;
    var panner = 280;
    var ginger = 220;

    var chicken = 260;
var chman= 260;
var chmaj= 270;
var chillich= 270;
var ginch = 260;
var thaich= 280;
var chlolli = 220;
var chillipra = 220;
var loosepr = 210;
var apollf = 230;
var ginf = 230;

var kveg = 190;
var kpan = 190;
var pantm = 220;
var pancb = 220;
var tomod =140;
var meh = 140;


var mch= 220;
var kadch= 230;
var gonch= 240;
var buttch= 240;
var chtikk= 240;
var chtikk= 250;
var mutkema = 270;
var pracur= 270;
var eggbur= 140;
var eggm = 160;


var bfk = 200;
var dbc = 200;
var rvc = 230;
var fbc = 230;
var cfc = 240;



    var total = 0;
    var check = 1;
    var gw;
    var sfood;
    var quantity;
    var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);

    function getMe() {
      sfood = document.querySelector("#sf").value;
      quantity = parseFloat(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      if (Number.isNaN(quantity) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (quantity<0) {
        alert("Negative value!! @stupid");
        check = 0;
      }
      else{
        check = 1;
      }
      if (check == 1) {
     
        switch (sfood) {
          case "Veg Manchurian":
            var st = veg * quantity;
            
            gw.value += "Veg Manchurian  " + quantity + "  = " + st + " rs\r";
            total += st;
            quantity.value = "";
            break;
          case "Baby Corn Manchurian":
            var at = baby * quantity;
            gw.value += "Baby Corn Manchurian  " + quantity + "  = " + at + " rs\r";
            total += at;
            quantity.value = "";
            break;
          case "Spring Rolls":
            var gr = spring * quantity;
            gw.value += "Spring Rolls   " + quantity + "   = " + gr + " rs\r";
            total += gr;
            quantity.value = "";
            break;
          case "Shanghai Rolls":
            var ga = shanghai * quantity;
            gw.value += "Shanghai Rolls   " + quantity + "   = " + ga + " RS\r";
            total += ga;
            quantity.value = "";
            break;
          case "Chilli Mushroom":
            var pomy = chilli * quantity;
            gw.value += "Chilli Mushroom   " + quantity + "   = " + pomy + " rs\r";
            total += pomy;
            quantity.value = "";
            break;
          case "Mushroom 65":
            var mu = mushroom * quantity;
            gw.value += "Mushroom 65    " + quantity + "   = " + mu + " rs\r";
            total += mu;
            quantity.value = "";
            break;
            case "Ginger Paneer":
            var gi = ginger * quantity;
            gw.value += "Ginger Paneer    " + quantity + "  = " + gi + " rs\r";
            total += gi;
            quantity.value = "";
            break;

            case "Chicken 65":
            var ab= chicken * quantity;
            gw.value += "Chicken 65  " + quantity + "  = " + ab+ " rs\r";
            total += ab;
            quantity.value = "";
            break;

          case "Chicken Manchurian Dry":
            var ac= chman * quantity;
            gw.value += "Chicken Manchurian Dry  " + quantity + "  = " + ac + " rs\r";
            total += ac;
            quantity.value = "";
            break;
case "Chicken Majestic":
            var ad= chmaj* quantity;
            gw.value += "Chicken Majestic  " + quantity + "  = " + ad+ " rs\r";
            total += ad;
            quantity.value = "";
            break;

          case "Chilli Chicken":
            var ae= chillich* quantity;
            gw.value += "Chilli Chicken  " + quantity + "  = " + ae + " rs\r";
            total += ae;
            quantity.value = "";
            break;
case "Ginger Chicken":
            var af= ginch* quantity;
            gw.value += "Ginger Chicken  " + quantity + "  = " + af+ " rs\r";
            total += af;
            quantity.value = "";
            break;

          case "Thai Chicken":
            var ag= thaich* quantity;
            gw.value += "Thai Chicken  " + quantity + "  = " + ag + " rs\r";
            total += ag;
            quantity.value = "";
            break;
case "Chicken Lollipop":
            var ah= chlolli* quantity;
            gw.value += "Chicken Lollipop  " + quantity + "  = " + ah+ " rs\r";
            total += ah;
            quantity.value = "";
            break;

          case "Chilli Prawns":
            var ah= chillipra* quantity;
            gw.value += "Chilli Prawns  " + quantity + "  = " + ah + " rs\r";
            total += ah;
            quantity.value = "";
            break;
case "Loose Prawns":
            var ai= loosepr* quantity;
            gw.value += "Loose Prawns  " + quantity + "  = " + ai+ " rs\r";
            total += ai;
            quantity.value = "";
            break;

          case "Apollo Fish":
            var aj= apollf* quantity;
            gw.value += "Apollo Fish  " + quantity + "  = " + aj + " rs\r";
            total += aj;
            quantity.value = "";
            break;
case "Ginger Fish":
            var ak= ginf* quantity;
            gw.value += "Ginger Fish  " + quantity + "  = " + ak+ " rs\r";
            total += ak;
            quantity.value = "";
            break;


            case "Kadai Veg":
            var za = kveg * quantity;
            gw.value += "Kadai Veg  " + quantity + "  = " + za + " rs\r";
            total += za;
            quantity.value = "";
            break;
            
          case "Kadai Panee":
            var zb = kpan * quantity;
            gw.value += "Kadai Panee  " + quantity + "  = " + zb + " rs\r";
            total += zb;
            quantity.value = "";
            break;
            
          case "Paneer Tikka Masa":
            var zc = pantm * quantity;
            gw.value += "Paneer Tikka Masa  " + quantity + "  = " + zc + " rs\r";
            total += zc;
            quantity.value = "";
            break;
            
          case "Paneer Corn Burj":
            var zd = pancb * quantity;
            gw.value += "Paneer Corn Burj  " + quantity + "  = " + zd + " rs\r";
            total += zd;
            quantity.value = "";
            break;
            
          case "Tomato Dal":
            var ze = tomod * quantity;
            gw.value += "Tomato Dal  " + quantity + "  = " + ze + " rs\r";
            total += ze;
            quantity.value = "";
            break;
            
            
          case "Mehti Da":
            var zf = meh * quantity;
            gw.value += "Mehti Da  " + quantity + "  = " + zf + " rs\r";
            total += zf;
            quantity.value = "";
            break;


            case "Masala Chicken":
            var ba = mch* quantity;
            gw.value += "Masala Chicken  " + quantity + "  = " + ba + " rs\r";
            total += ba;
            quantity.value = "";
            break;

          case "Kadhai Chicken":
            var bb = kadch* quantity;
            gw.value += "Kadhai Chicken  " + quantity + "  = " + bb+ " rs\r";
            total += bb;
            quantity.value = "";
            break;
case "Gongura Chicken":
            var bc = gonch* quantity;
            gw.value += "Gongura Chicken  " + quantity + "  = " + bc+ " rs\r";
            total += bc;
            quantity.value = "";
            break;

          case "Butter Chicken":
            var bd = buttch* quantity;
            gw.value += "Butter Chicken  " + quantity + "  = " + bd+ " rs\r";
            total += bd;
            quantity.value = "";
            break;
case "Chicken Tikka Masala":
            var be= chtikk* quantity;
            gw.value += "Veg Manchurian  " + quantity + "  = " + be+ " rs\r";
            total += be;
            quantity.value = "";
            break;

          case "Chicken Tikka Masala":
            var bf = chtikk* quantity;
            gw.value += "Chicken Tikka Masala  " + quantity + "  = " + bf+ " rs\r";
            total += bf;
            quantity.value = "";
            break;
case "Mutton Keema Masala":
            var bg = mutkema* quantity;
            gw.value += "Mutton Keema Masala  " + quantity + "  = " + bg+ " rs\r";
            total += bg;
            quantity.value = "";
            break;

          case "Prawns Curry":
            var bh = pracur* quantity;
            gw.value += "Prawns Curry  " + quantity + "  = " + bh+ " rs\r";
            total += bh;
            quantity.value = "";
            break;
case "Egg Burji":
            var bi = eggbur* quantity;
            gw.value += "Egg Burji  " + quantity + "  = " + bi+ " rs\r";
            total += bi;
            quantity.value = "";
            break;

          case "Egg Masala":
            var bj = eggm* quantity;
            gw.value += "Egg Masala  " + quantity + "  = " + bj+ " rs\r";
            total += bj;
            quantity.value = "";
            break;



            case "Black Forest Cake":
            var ya = bfk * quantity;
            gw.value += "Black Forest Cake  " + quantity + "  = " + ya + " rs\r";
            total += ya;
            quantity.value = "";
            break;
            
          case "Delicious Butterscotch Cake":
            var yb = dbc * quantity;
            gw.value += "Delicious Butterscotch Cake  " + quantity + "  = " + yb + " rs\r";
            total += yb;
            quantity.value = "";
            break;
            
          case "Red Velvet Cake":
            var yc = rvc * quantity;
            gw.value += "Red Velvet Cake  " + quantity + "  = " + yc + " rs\r";
            total += yc;
            quantity.value = "";
            break;
            
          case "Fudge Brownie Cake":
            var yd = fbc * quantity;
            gw.value += "Fudge Brownie Cake  " + quantity + "  = " + yd + " rs\r";
            total += yd;
            quantity.value = "";
            break;
            
          case "Chocolate Flakes Cake":
            var ye = cfc * quantity;
            gw.value += "Chocolate Flakes Cake  " + quantity + "  = " + ye + " rs\r";
            total += ye;
            quantity.value = "";
            break;

          
            
            
        }

      }
    }

    function checkOut() {
      gw.value += "---------------------------------------------------------------\r";
      gw.value += "                                                              \r";
      
      gw.value += "Your Total Bill Is = " + total + " rs Thank You! :)\r";
      
      gw.value += "                                                              \r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }
