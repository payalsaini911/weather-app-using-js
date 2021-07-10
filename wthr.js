const inputField = document.querySelector('.inputField');
var addbtn = document.querySelector('.add_btn');
const loc = document.querySelector('.location');
const temp = document.querySelector('.temp');

function addToLocalStorage(inputCity) {
    localStorage.setItem('inputCity', JSON.stringify(inputCity));
  }
  
const API_Key="4aac1b0116d4b0bb0b6a07861273626b";


window.onload = function() {
  var data= localStorage.getItem('inputCity');
  // ...
  data=JSON.parse(data);
  loc.innerHTML=`
  <ul>
      <li class="city">${data[0][0]}</li>
  </ul>`
  temp.innerHTML= `
            <ul>
                <li class="temp">${data[0][1]}°c</li>
            </ul>`
}
let inputCity = [];
addbtn.addEventListener('click', (event) => {
    event.preventDefault();
     cityName = inputField.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            inputField.value = " ";
            loc.innerHTML = `
                                <ul>
                                    <li class="city">${data.name}</li>
                                </ul>
                                `; 
                               
            temp.innerHTML= `
            <ul>
                <li class="temp">${data.main.temp}°c</li>
            </ul>
            `;
            let values=[]
            values.push(cityName)
            values.push(data.main.temp);
            inputCity.push(values);
            addToLocalStorage(inputCity);
            addToLocalStorage(inputCity);
        });
        
        
});