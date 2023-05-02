/* THE FOLLOWING CODE IS FOR THE WEATHER-DASHBOARD APP - 
 /* Weather Dashboard functionality in Steps: 
    Step 1: Used and removed $(document).ready(() {} within the script tag below to test page funtionality of jQuery event and call functions -->
    Step 2: event.preventDefault added to submit button to prevent the default behavior of the page or the reloading of page(s) -->
    Step 3: After adding event.preventDefault(), as a form handler used JS to create variables to get the weather value and icon of each city element -->
    Step 4: Call to open the openweathermap api to get data for web page using jQuery ajax .get method */
    
    $("#city-form").submit(function(event){ 
      event.preventDefault();
  
      var cityName = $("#city-name").val();
      getWeather(cityName);  
      
      /* var kelvin = $("#temp").val();
      getWeather(kelvin); */
  
      /* var celsius = kelvin - 273;
      let fahrenheit = Math.floor(celsius * (9/5) + 32); */
  });
  
  /* api added to call weather by city */
  async function getWeather(city){
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=d11771b7ba65e99baa089a03cbd1362b", function(data){
        console.log(data);
  
          $("#city").html(data.main.name);
          $("#description").html(data.weather[0].description);
          $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
          $("#temp").html("Temperatue: " + data.main.temp + " °F");
          $("#humidity").html("Humidity: " + data.main.humidity + "%");
          $("#speed").html("Wind Speed: " + data.wind.speed + " mph");
          
          var status = data.weather[0].main.toLowerCase()
      
          if (status.includes("rain") || status.includes("snow"))  {
            $("#climbing_conditions").html("Poor");
          } else if ((data.main.humidity - data.wind.speed * 4.5) >= 40) {
            $("#climbing_conditions").html("Poor");
          } else if (-5 <= (data.main.humidity - data.wind.speed * 4.5) && (data.main.humidity - data.wind.speed * 4.5) < 40) {
            $("#climbing_conditions").html("Fair");
          } else {
            $("#climbing_conditions").html("Perfect");
          }
      });
      /* api added to call 5-day forecast */
      $.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=d11771b7ba65e99baa089a03cbd1362b", function(data){
      console.log(data);

  /* adding variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity */
  /* DAY ONE */
    var dayOne = moment().format("M/D/YYYY");
    var dayOneIcon = data.list[0].weather[0].icon;
    var dayOneTemp = data.list[0].main.temp + " °F";
    var dayOneTempFar = (dayOneTemp - 273.15) * 1.8 + 32;
    var dayOneHum = data.list[0].main.humidity + "%";
    
    var dayOnespeed = data.list[0].wind.speed
    
    var status1 = data.list[0].weather[0].main.toLowerCase()
      
    if (status1.includes("rain") || status1.includes("snow"))  {
      $("#climbing_conditions1").html("Poor");
    } 
    
    if ((dayOneHum - dayOnespeed * 4.5) >= 40) {
      $("#climbing-conditions1").html("Climbing: Poor");
    } else if (-5 <= (dayOneHum - dayOnespeed * 4.5) && (dayOneHum - dayOnespeed * 4.5) < 40) {
      $("#climbing-conditions1").html("Climbing: Fair");
    } else {
      $("#climbing-conditions1").html("Climbing: Perfect");
    }

  /* DISPLAY and APPEND DAY ONE DATA */
    var dayOneDateEl = $("<p>").text("Date: " + dayOne);
    var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
    var dayOneHumEl = $("<p>").text("Humidity: " + dayOneHum);
  
      $(".dayOne").append(dayOneDateEl);
      $(".dayOne").append(dayOneTempEl);
      $(".dayOne").append(dayOneHumEl);

      var dayOneIcon = data.list[0].weather[0].icon;
      var dayOneImage = "http://openweathermap.org/img/wn/" + dayOneIcon + ".png";
      var dayOneImageSrc = $("<img>").attr("src", dayOneImage);
      $("#dayOneImg").html(dayOneImageSrc);
  
  /* DAY TWO */
    var dayTwo = moment().add(1, "days").format("M/D/YYYY");
    var dayTwoIcon = data.list[8].weather[0].icon;
    var dayTwoImage = "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png";
    var dayTwoImageSrc = $("<img>").attr("src", dayTwoImage);
    var dayTwoTemp = data.list[8].main.temp + " °F";
    var dayTwoTempFar = (dayTwoTemp - 273.15) * 1.8 + 32;
    var dayTwoTempFixed = dayTwoTempFar.toFixed(1); 
    var dayTwoHum = data.list[8].main.humidity + "%";

    var dayTwoSpeed = data.list[8].wind.speed
    if ((dayTwoHum - dayTwoSpeed * 4.5) >= 40) {
      $("#climbing-conditions2").html("Climbing: Poor");
    } else if (-5 <= (dayTwoHum - dayTwoSpeed * 4.5) && (dayTwoHum - dayTwoSpeed * 4.5) < 40) {
      $("#climbing-conditions2").html("Climbing: Fair");
    } else {
      $("#climbing-conditions2").html("Climbing: Perfect");
    }
  
  /* DISPLAY and APPEND DAY TWO DATA */
    var dayTwoDateEl = $("<p>").text("Date: " + dayTwo);
    var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
    var dayTwoHumEl = $("<p>").text("Humidity: " + dayTwoHum);
      
      $(".dayTwo").append(dayTwoDateEl);
      $(".dayTwo").append(dayTwoTempEl);
      $(".dayTwo").append(dayTwoHumEl);
      $("#dayTwoImg").html(dayTwoImageSrc);
  
  /* DAY THREE */
    var dayThree = moment().add(2, "days").format("M/D/YYYY");
    var dayThreeIcon = data.list[16].weather[0].icon;
    var dayThreeImage = "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png";
    var dayThreeImageSrc = $("<img>").attr("src", dayThreeImage);
    var dayThreeTemp = data.list[16].main.temp + " °F";
    var dayThreeTempFar = (dayThreeTemp - 273.15) * 1.8 + 32;
    var dayThreeTempFixed = dayThreeTempFar.toFixed(1); 
    var dayThreeHum = data.list[16].main.humidity + "%";

    var dayThreeSpeed = data.list[16].wind.speed
    if ((dayThreeHum - dayThreeSpeed * 4.5) >= 40) {
      $("#climbing-conditions3").html("Climbing: Poor");
    } else if (-5 <= (dayThreeHum - dayThreeSpeed * 4.5) && (dayThreeHum - dayThreeSpeed * 4.5) < 40) {
      $("#climbing-conditions3").html("Climbing: Fair");
    } else {
      $("#climbing-conditions3").html("Climbing: Perfect");
    }
  
  /* DISPLAY and APPEND DAY THREE DATA */
    var dayThreeDateEl = $("<p>").text("Date: " + dayThree);
    var dayThreeImageEl = $("<p>").text(dayThreeIcon);
    var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
    var dayThreeHumEl = $("<p>").text("Humidity: " + dayThreeHum);
  
      $(".dayThree").append(dayThreeDateEl);
      $(".dayThree").append(dayThreeTempEl);
      $(".dayThree").append(dayThreeHumEl);
      $("#dayThreeImg").html(dayThreeImageSrc);

  
  /* DAY FOUR */
    var dayFour = moment().add(3, "days").format("M/D/YYYY");
    var dayFourIcon = data.list[24].weather[0].icon;
    var dayFourImage = "http://openweathermap.org/img/wn/" + dayFourIcon + ".png";
    var dayFourImageSrc = $("<img>").attr("src", dayFourImage);
    var dayFourTemp = data.list[24].main.temp + " °F";
    var dayFourTempFar = (dayFourTemp - 273.15) * 1.8 + 32;
    var dayFourTempFixed = dayFourTempFar.toFixed(1); 
    var dayFourHum = data.list[24].main.humidity + "%";

    var dayFourSpeed = data.list[24].wind.speed
    if ((dayFourHum - dayFourSpeed * 4.5) >= 40) {
      $("#climbing-conditions4").html("Climbing: Poor");
    } else if (-5 <= (dayFourHum - dayFourSpeed * 4.5) && (dayFourHum - dayFourSpeed * 4.5) < 40) {
      $("#climbing-conditions4").html("Climbing: Fair");
    } else {
      $("#climbing-conditions4").html("Climbing: Perfect");
    }
  
  /* DISPLAY and APPEND DAY FOUR DATA */
    var dayFourDateEl = $("<p>").text("Date: " + dayFour);
    var dayFourImageEl = $("<p>").text(dayFourIcon);
    var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
    var dayFourHumEl = $("<p>").text("Humidity: " + dayFourHum);
  
      $(".dayFour").append(dayFourDateEl);
      $(".dayFour").append(dayFourTempEl);
      $(".dayFour").append(dayFourHumEl);
      $("#dayFourImg").html(dayFourImageSrc);
  
  /* DAY FIVE */
    var dayFive = moment().add(4, "days").format("M/D/YYYY");
    var dayFiveIcon = data.list[32].weather[0].icon;
    var dayFiveImage = "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png";
    var dayFiveImageSrc = $("<img>").attr("src", dayFiveImage);
    var dayFiveTemp = data.list[32].main.temp + " °F";
    var dayFiveTempFar = (dayFiveTemp - 273.15) * 1.8 + 32;
    var dayFiveTempFixed = dayFiveTempFar.toFixed(1); 
    var dayFiveHum = data.list[32].main.humidity + "%";

    var dayFiveSpeed = data.list[32].wind.speed
    if ((dayFiveHum - dayFiveSpeed * 4.5) >= 40) {
      $("#climbing-conditions5").html("Climbing: Poor");
    } else if (-5 <= (dayFiveHum - dayFiveSpeed * 4.5) && (dayFiveHum - dayFiveSpeed * 4.5) < 40) {
      $("#climbing-conditions5").html("Climbing: Fair");
    } else {
      $("#climbing-conditions5").html("Climbing: Perfect");
    }
  
  /* DISPLAY and APPEND DAY FIVE DATA */
    var dayFiveDateEl = $("<p>").text("Date: " + dayFive);
    var dayFiveImageEl = $("<p>").text(dayFiveIcon);
    var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
    var dayFiveHumEl = $("<p>").text("Humidity: " + dayFiveHum);
  
      $(".dayFive").append(dayFiveDateEl);
      $(".dayFive").append(dayFiveTempEl);
      $(".dayFive").append(dayFiveHumEl);
      $("#dayFiveImg").html(dayFiveImageSrc);

  })
  }
  /* added moment.js for current day's date */
    var currentDate = moment().format('M/D/YYYY');
    var mainDate = document.getElementById('currentDay');
    date.innerHTML = currentDate;
  
    
      /* Create additional functions within above script or preferably script.js: 
          - to store Recent Searches in localStorage
          - to display icons for Current Weather Conditions and 5-Day Forecast */
  
    
  /* KEEP FOR FUTURE REFERRENCE!!!!
    $(document).ready(function(){
      var latPush = [""];
      var lonPush = [""];
  ​
      function displayRecentSearch();
      var recentSeraches = getCityFromLocalStorage();
      localStorage.getItem("resentSearches");
      var recentSearches
      }); */
  