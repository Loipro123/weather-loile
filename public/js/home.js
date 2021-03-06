const submit = document.getElementById('submitId');
const search = document.getElementById('searchId');
const weather = document.getElementById('weatherId');
const reset = document.getElementById('resetId');
const background = document.getElementById('backgroundId');
const nation = document.getElementById('nation');
const state = document.getElementById('state');
const city = document.getElementById('city');
const loading = document.getElementById('loadingId');
const rain = document.getElementById('rain');
const degree = document.getElementById('degree');
const cloud = document.getElementById('cloud');
const message = document.getElementById('message');
// const headerId = document.getElementById('headerId');



submit.addEventListener('click', () => {
   if ( city.value.trim()=== "" || state.value.trim()=== "" || nation.value.trim()=== "") {
       alert('You need to provide full information of the address');
   }
   else {
    const address = city.value + ',' + state.value + ',' + nation.value;
    console.log(address);
    search.style.display = 'none';
    loading.style.display = 'block';
    fetch('/weather?address=' + address).then((respone) => {
         respone.json().then((data) => {
             if (data.error) {
                 console.log(data.error);
             }else {
                //  headerId.style.display = 'none';
                 loading.style.display = 'none';
                 weather.style.display = 'block';
                 rain.innerHTML = (data.result.rain * 100).toFixed(2) + ' %';
                 degree.innerHTML = data.result.degree + ' &deg;F';
                 cloud.innerHTML = (data.result.cloud * 100).toFixed(2) + ' %';
                 message.innerHTML = data.result.message + ' ' + data.result.placename;
             }
         });
    })
   }
});

reset.addEventListener('click', () => {
    weather.style.display = 'none';
    search.style.display = 'flex';
    // headerId.style.display = 'block';
    city.value = "";
    nation.value = "";
    state.value ="";
})