var Objects = {
  "Alappuzha": {
    "Ambalapuzha": [], "Chengannur": [], "Chengannur": [], "Karthikappally": [], "Kuttanad": [], "Kuttanad": []
  },
  "Ernakulam": {
    "Aluva": [],"Kanayannur": [], "Kochi": [], "Kothamangalam": [], "Kunnathunad": [], "Muvattupuzha": [], "North Paravur": []
  },
  "Idukki":{
    "Devikulam":[],"Peermade":[],"Udumbanchola":[],"Painavu":[],"Thodupuzha":[]
  },
  "Kannur":{
    "Thalassery":[],"Iritty":[],"Kannur":[],"Taliparamba":[],"Payyanur":[]
  },
  "Kasaragod":{
    "Manjeshwaram":[],"Kasaragod":[],"Vellarikundu":[],"Hosdurg":[]
  },
  "Kollam":{
    "Paravur":[],"Karunagappally":[],"Kunnathur":[],"Kottarakkara":[],"Punalur":[],"Pathanapuram":[]
  },
  "Kottayam":{
    "Changanasserry":[],"Kanjirappally":[],"Vaikom":[],"Meenachil":[]
  },
  "Kozhikode":{
    "Kozhikode":[],"Koyilandy":[],"Vatakara":[]
  },
  "Malappuram":{
    "Nilambur":[],"Manjeri":[],"Kondotty":[],"Perinthalmanna":[],"Ponnani":[],"Tirur":[],"Tirurangadi":[]
  },
}
window.onload = function() {
  var inputDistrict = document.getElementById("inputDistrict");
  var inputArea = document.getElementById("inputArea");
  for (var x in Objects) {
    inputDistrict.options[inputDistrict.options.length] = new Option(x, x);
  }
  inputDistrict.onchange = function() {
 //empty Chapters- and Topics- dropdowns
 inputArea.length = 1;
    //display correct values
    for (var y in Objects[this.value]) {
      inputArea.options[inputArea.options.length] = new Option(y, y);
    }
  }
  }