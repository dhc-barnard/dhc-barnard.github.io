function updateOutput() {
  // calculator
  // get form
  var form = document.getElementById("calc");
  // get output
  var out_carbon = form.elements["carbon"];
  var out_water = form.elements["water"];
  var out_land = form.elements["land"];
  // platform values
  // netflix
  var out_carbon_netflix = form.elements["carbon_netflix"];
  var out_water_netflix = form.elements["water_netflix"];
  var out_land_netflix = form.elements["land_netflix"];

  // hulu
  var out_carbon_hulu = form.elements["carbon_hulu"];
  var out_water_hulu = form.elements["water_hulu"];
  var out_land_hulu = form.elements["land_hulu"];

  // amazon
  var out_carbon_amazon = form.elements["carbon_amazon"];
  var out_water_amazon = form.elements["water_amazon"];
  var out_land_amazon = form.elements["land_amazon"];

  // youtube
  var out_carbon_youtube = form.elements["carbon_youtube"];
  var out_water_youtube = form.elements["water_youtube"];
  var out_land_youtube = form.elements["land_youtube"];

  // spotify
  var out_carbon_spotify = form.elements["carbon_spotify"];
  var out_water_spotify = form.elements["water_spotify"];
  var out_land_spotify = form.elements["land_spotify"];

  // skype
  var out_carbon_skype = form.elements["carbon_skype"];
  var out_water_skype = form.elements["water_skype"];
  var out_land_skype = form.elements["land_skype"];

  // zoom
  var out_carbon_zoom = form.elements["carbon_zoom"];
  var out_water_zoom = form.elements["water_zoom"];
  var out_land_zoom = form.elements["land_zoom"];

  // webex
  var out_carbon_webex = form.elements["carbon_webex"];
  var out_water_webex = form.elements["water_webex"];
  var out_land_webex = form.elements["land_webex"];

  // facetime
  var out_carbon_facetime = form.elements["carbon_facetime"];
  var out_water_facetime = form.elements["water_facetime"];
  var out_land_facetime = form.elements["land_facetime"];

  // google hangout
  var out_carbon_googlehangout = form.elements["carbon_googlehangout"];
  var out_water_googlehangout = form.elements["water_googlehangout"];
  var out_land_googlehangout = form.elements["land_googlehangout"];

  // google duo
  var out_carbon_googleduo = form.elements["carbon_googleduo"];
  var out_water_googleduo = form.elements["water_googleduo"];
  var out_land_googleduo = form.elements["land_googleduo"];

  // facebook
  var out_carbon_facebook = form.elements["carbon_facebook"];
  var out_water_facebook = form.elements["water_facebook"];
  var out_land_facebook= form.elements["land_facebook"];

  // twitter
  var out_carbon_twitter = form.elements["carbon_twitter"];
  var out_water_twitter = form.elements["water_twitter"];
  var out_land_twitter = form.elements["land_twitter"];

  // instagram
  var out_carbon_instagram = form.elements["carbon_instagram"];
  var out_water_instagram = form.elements["water_instagram"];
  var out_land_instagram = form.elements["land_instagram"];

  // snapchat
  var out_carbon_snapchat = form.elements["carbon_snapchat"];
  var out_water_snapchat = form.elements["water_snapchat"];
  var out_land_snapchat = form.elements["land_snapchat"];

  // tiktok
  var out_carbon_tiktok = form.elements["carbon_tiktok"];
  var out_water_tiktok = form.elements["water_tiktok"];
  var out_land_tiktok = form.elements["land_tiktok"];

  // whatsapp
  var out_carbon_whatsapp = form.elements["carbon_whatsapp"];
  var out_water_whatsapp = form.elements["water_whatsapp"];
  var out_land_whatsapp = form.elements["land_whatsapp"];

  // wechat
  var out_carbon_wechat = form.elements["carbon_wechat"];
  var out_water_wechat = form.elements["water_wechat"];
  var out_land_wechat = form.elements["land_wechat"];

  // online gaming
  var out_carbon_onlinegaming = form.elements["carbon_onlinegaming"];
  var out_water_onlinegaming = form.elements["water_onlinegaming"];
  var out_land_onlinegaming = form.elements["land_onlinegaming"];

  // web surfing
  var out_carbon_websurfing = form.elements["carbon_websurfing"];
  var out_water_websurfing = form.elements["water_websurfing"];
  var out_land_websurfing = form.elements["land_websurfing"];

  // storage values
  // google(personal)
  var out_carbon_googlepersonal = form.elements["carbon_google(personal)"];
  var out_water_googlepersonal = form.elements["water_google(personal)"];
  var out_land_googlepersonal = form.elements["land_google(personal)"];

  // google(work)
  var out_carbon_googlework = form.elements["carbon_google(work)"];
  var out_water_googlework = form.elements["water_google(work)"];
  var out_land_googlework = form.elements["land_google(work)"];

  // hotmail
  var out_carbon_hotmail = form.elements["carbon_hotmail"];
  var out_water_hotmail = form.elements["water_hotmail"];
  var out_land_hotmail = form.elements["land_hotmail"];

  // yahoo
  var out_carbon_yahoo = form.elements["carbon_yahoo"];
  var out_water_yahoo = form.elements["water_yahoo"];
  var out_land_yahoo = form.elements["land_yahoo"];

  // dropbox
  var out_carbon_dropbox = form.elements["carbon_dropbox"];
  var out_water_dropbox = form.elements["water_dropbox"];
  var out_land_dropbox = form.elements["land_dropbox"];

  // box
  var out_carbon_box = form.elements["carbon_box"];
  var out_water_box = form.elements["water_box"];
  var out_land_box = form.elements["land_box"];

  // other
  var out_carbon_other = form.elements["carbon_other"];
  var out_water_other = form.elements["water_other"];
  var out_land_other = form.elements["land_other"];


  // replace all instances of parseFloat with parseInt if needing to force integers
  var num1 = parseFloat(form.elements["Netflix"].value);
  var num2 = parseFloat(form.elements["Hulu"].value);
  var num3 = parseFloat(form.elements["Amazon"].value);
  var num4 = parseFloat(form.elements["Youtube"].value);
  var num5 = parseFloat(form.elements["Spotify"].value);
  var num6 = parseFloat(form.elements["Skype"].value);
  var num7 = parseFloat(form.elements["Zoom"].value);
  var num8 = parseFloat(form.elements["Webex"].value);
  var num9 = parseFloat(form.elements["FaceTime"].value);
  var num10 = parseFloat(form.elements["GoogleHangout"].value);
  var num11 = parseFloat(form.elements["GoogleDuo"].value);
  var num12 = parseFloat(form.elements["Facebook"].value);
  var num13 = parseFloat(form.elements["Twitter"].value);
  var num14 = parseFloat(form.elements["Instagram"].value);
  var num15 = parseFloat(form.elements["Snapchat"].value);
  var num16 = parseFloat(form.elements["TikTok"].value);
  var num17 = parseFloat(form.elements["WhatsApp"].value);
  var num18 = parseFloat(form.elements["WeChat"].value);
  var num19 = parseFloat(form.elements["OnlineGaming"].value);
  var num20 = parseFloat(form.elements["WebSurfing"].value);

  // replace all instances of parseFloat with parseInt if needing to force integers
  var num21 = parseFloat(form.elements["google(personal)"].value);
  var num22 = parseFloat(form.elements["google(work)"].value);
  var num23 = parseFloat(form.elements["hotmail"].value);
  var num24 = parseFloat(form.elements["yahoo"].value);
  var num25 = parseFloat(form.elements["dropbox"].value);
  var num26 = parseFloat(form.elements["box"].value);
  var num27 = parseFloat(form.elements["other"].value);

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

  out_carbon_spotify.value = num5*2.517514308
  out_water_spotify.value = num5*1.399611174;
  out_land_spotify.value = num5*0.799304372;

  out_carbon_skype.value = num6*117.0644153;
  out_water_skype.value = num6*65.08191957;
  out_land_skype.value = num6*37.16765332;

  out_carbon_zoom.value = num7*157.3446443;
  out_water_zoom.value = num7*87.47569835;
  out_land_zoom.value = num7*49.95652328;

  out_carbon_webex.value = num8*162.3796729;
  out_water_webex.value = num8*90.2749207;
  out_land_webex.value = num8*51.55513202;

  out_carbon_facetime.value = num9*11.32881439;
  out_water_facetime.value = num9*6.298250281;
  out_land_facetime.value = num9*3.596869676;

  out_carbon_googlehangout.value = num10*203.918659;
  out_water_googlehangout.value = num10*113.3685051;
  out_land_googlehangout.value = num10*64.74365416;

  out_carbon_googleduo.value = num11*30.2101717;
  out_water_googleduo.value = num11*16.79533408;
  out_land_googleduo.value = num11*9.591652469;

  out_carbon_facebook.value = num12*10.07005723;
  out_water_facebook.value = num12*5.598444694;
  out_land_facebook.value = num12*3.19721749;

  out_carbon_twitter.value = num13*22.65762878;
  out_water_twitter.value = num13*12.59650056;
  out_land_twitter.value = num13*7.193739352;

  out_carbon_instagram.value = num14*6.293785771;
  out_water_instagram.value = num14*3.499027934;
  out_land_instagram.value = num14*1.998260931;

  out_carbon_snapchat.value = num15*10.07005723;
  out_water_snapchat.value = num15*5.598444694;
  out_land_snapchat.value = num15*3.19721749;

  out_carbon_tiktok.value = num16*88.11300079;
  out_water_tiktok.value = num16*48.98639108;
  out_land_tiktok.value = num16*27.97565303;

  out_carbon_whatsapp.value = num17*25.17514308;
  out_water_whatsapp.value = num17*13.99611174;
  out_land_whatsapp.value = num17*7.993043724;

  out_carbon_wechat.value = num18*6.923164348;
  out_water_wechat.value = num18*3.848930727;
  out_land_tiktok.value = num18*2.198087024;

  out_carbon_onlinegaming.value = num19*18.88135731;
  out_water_onlinegaming.value = num19*10.4970838;
  out_land_onlinegaming.value = num19*5.994782793;

  out_carbon_websurfing.value = num20*9.440678657;
  out_water_websurfing.value = num20*5.248541901;
  out_land_websurfing.value = num20*2.997391397;

  // get storage values
  out_carbon_googlepersonal.value = num21*62.93785771;
  out_water_googlepersonal.value = num21*35;
  out_land_googlepersonal.value = num21*20;

  out_carbon_googlework.value = num22*62.93785771;
  out_water_googlework.value = num22*35;
  out_land_googlework.value = num22*20;

  out_carbon_hotmail.value = num23*62.93785771;
  out_water_hotmail.value = num23*35;
  out_land_hotmail.value = num23*20;

  out_carbon_yahoo.value = num24*62.93785771;
  out_water_yahoo.value = num24*35;
  out_land_yahoo.value = num24*20;

  out_carbon_dropbox.value = num25*62.93785771;
  out_water_dropbox.value = num25*35;
  out_land_dropbox.value = num25*20;

  out_carbon_box.value = num26*62.93785771;
  out_water_box.value = num26*35;
  out_land_box.value = num26*20;

  out_carbon_other.value = num27*62.93785771;
  out_water_other.value = num27*35;
  out_land_other.value = num27*20;

  // final outputs
  out_carbon.value = (parseFloat(out_carbon_netflix.value*0.001) + parseFloat(out_carbon_hulu.value*0.001)
  + parseFloat(out_carbon_amazon.value*0.001) + parseFloat(out_carbon_youtube.value*0.001)
  + parseFloat(out_carbon_spotify.value*0.001) + parseFloat(out_carbon_skype.value*0.001)
  + parseFloat(out_carbon_zoom.value*0.001)
  + parseFloat(out_carbon_webex.value*0.001) + parseFloat(out_carbon_facetime.value*0.001)
  + parseFloat(out_carbon_googlehangout.value*0.001) + parseFloat(out_carbon_googleduo.value*0.001)
  + parseFloat(out_carbon_facebook.value*0.001) + parseFloat(out_carbon_twitter.value*0.001)
  + parseFloat(out_carbon_instagram.value*0.001) + parseFloat(out_carbon_snapchat.value*0.001)
  + parseFloat(out_carbon_tiktok.value*0.001) + parseFloat(out_carbon_whatsapp.value*0.001)
  + parseFloat(out_carbon_wechat.value*0.001) + parseFloat(out_carbon_onlinegaming.value*0.001)
  + parseFloat(out_carbon_websurfing.value*0.001)
  + parseFloat(out_carbon_googlepersonal.value*0.001) + parseFloat(out_carbon_googlework.value*0.001)
  + parseFloat(out_carbon_hotmail.value*0.001) + parseFloat(out_carbon_yahoo.value*0.001)
  + parseFloat(out_carbon_dropbox.value*0.001) + parseFloat(out_carbon_box.value*0.001)
  + parseFloat(out_carbon_other.value*0.001)).toFixed(2);
  out_water.value = (parseFloat(out_water_netflix.value) + parseFloat(out_water_hulu.value)
  + parseFloat(out_water_amazon.value) + parseFloat(out_water_youtube.value)
  + parseFloat(out_water_spotify.value) + parseFloat(out_water_skype.value)
  + parseFloat(out_water_zoom.value) + parseFloat(out_water_webex.value)
  + parseFloat(out_water_facetime.value) + parseFloat(out_water_googlehangout.value)
  + parseFloat(out_water_googleduo.value) + parseFloat(out_water_facebook.value)
  + parseFloat(out_water_twitter.value) + parseFloat(out_water_instagram.value)
  + parseFloat(out_water_snapchat.value) + parseFloat(out_water_tiktok.value)
  + parseFloat(out_water_whatsapp.value) + parseFloat(out_water_wechat.value)
  + parseFloat(out_water_onlinegaming.value) + parseFloat(out_water_websurfing.value)
  + parseFloat(out_water_googlepersonal.value) + parseFloat(out_water_googlework.value)
  + parseFloat(out_water_hotmail.value) + parseFloat(out_water_yahoo.value)
  + parseFloat(out_water_dropbox.value) + parseFloat(out_water_box.value)
  + parseFloat(out_water_other.value)).toFixed(2);
  out_land.value = (parseFloat(out_land_netflix.value) + parseFloat(out_land_hulu.value)
  + parseFloat(out_land_amazon.value) + parseFloat(out_land_youtube.value)
  + parseFloat(out_land_spotify.value) + parseFloat(out_land_skype.value)
  + parseFloat(out_land_zoom.value) + parseFloat(out_land_webex.value)
  + parseFloat(out_land_facetime.value) + parseFloat(out_land_googlehangout.value)
  + parseFloat(out_land_googleduo.value) + parseFloat(out_land_facebook.value)
  + parseFloat(out_land_twitter.value) + parseFloat(out_land_instagram.value)
  + parseFloat(out_land_snapchat.value) + parseFloat(out_land_tiktok.value)
  + parseFloat(out_land_whatsapp.value) + parseFloat(out_land_wechat.value)
  + parseFloat(out_land_onlinegaming.value) + parseFloat(out_land_websurfing.value)
  + parseFloat(out_land_googlepersonal.value) + parseFloat(out_land_googlework.value)
  + parseFloat(out_land_hotmail.value) + parseFloat(out_land_yahoo.value)
  + parseFloat(out_land_dropbox.value) + parseFloat(out_land_box.value)
  + parseFloat(out_land_other.value)).toFixed(2);
}
