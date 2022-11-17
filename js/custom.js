function button_click(){
    console.log('i got clicked')
    {
        var x = document.getElementById("nav_manu_01");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    
}