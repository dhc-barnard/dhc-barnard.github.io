function updateOutput() {
  // calculator
  // get form
  var form = document.getElementById("calc");
  // get output
  var out_carbon = form.elements["carbon"];
  var out_water = form.elements["water"];
  var out_land = form.elements["land"];
  // platform values
  var out_carbon_netflix = form.elements["carbon_netflix"];
  var out_water_netflix = form.elements["water_netflix"];
  var out_land_netflix = form.elements["land_netflix"];

  var out_carbon_hulu = form.elements["carbon_hulu"];
  var out_water_hulu = form.elements["water_hulu"];
  var out_land_hulu = form.elements["land_hulu"];

  var out_carbon_amazon = form.elements["carbon_amazon"];
  var out_water_amazon = form.elements["water_amazon"];
  var out_land_amazon = form.elements["land_amazon"];

  var out_carbon_youtube = form.elements["carbon_youtube"];
  var out_water_youtube = form.elements["water_youtube"];
  var out_land_youtube = form.elements["land_youtube"];

  // replace all instances of parseFloat with parseInt if needing to force integers
  var num1 = parseFloat(form.elements["Netflix"].value);
  var num2 = parseFloat(form.elements["Hulu"].value);
  var num3 = parseFloat(form.elements["Amazon"].value);
  var num4 = parseFloat(form.elements["Youtube"].value);

  // get platform values
  out_carbon_netflix.value = num1*440.565004;
  out_water_netflix.value = num1*244.9319554;
  out_land_netflix.value = num1*139.8782652;

  out_carbon_hulu.value = num2*453.1525755;
  out_water_hulu.value = num2*251.9300112;
  out_land_hulu.value = num2*143.874787;

  out_carbon_amazon.value = num3*440.565004;
  out_water_amazon.value = num3*244.9319554;
  out_land_amazon.value = num3*139.8782652;

  out_carbon_youtube.value = num4*1005.746966;
  out_water_youtube.value = num4*559.1446639;
  out_land_youtube.value = num4*319.3220968;

  // final outputs
  out_carbon.value = (parseFloat(out_carbon_netflix.value*0.001) + parseFloat(out_carbon_hulu.value*0.001)
  + parseFloat(out_carbon_amazon.value*0.001) + parseFloat(out_carbon_youtube.value*0.001)).toFixed(2);
  out_water.value = (parseFloat(out_water_netflix.value)
  + parseFloat(out_water_amazon.value) + parseFloat(out_water_youtube.value)).toFixed(2);
  out_land.value = (parseFloat(out_land_netflix.value) + parseFloat(out_land_hulu.value)
  + parseFloat(out_land_amazon.value) + parseFloat(out_land_youtube.value)).toFixed(2);
}
