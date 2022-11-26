let boz = document.getElementById("ip");
boz.innerHTML = "Coding is my hobby"

function useData() {
    let url = "https://randomuser.me/api/?results=4"
    console.log('three');
    const request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(request.responseText);
            const responseObject = JSON.parse(this.responseText);
            console.log(responseObject);
            document.getElementById("dangote").addEventListener('mouseover',useData);
            document.getElementById("avatar");
            avatar.src = responseObject.results[0].picture.large;
            document.getElementById("hope").innerHTML=
            JSON.parse(this.responseText).results[0].gender;
            document.getElementById("hopes").innerHTML=
            JSON.parse(this.responseText).results[0].name.title;
            document.getElementById("hopes1").innerHTML=
            JSON.parse(this.responseText).results[0].name.first;
            document.getElementById("hopes2").innerHTML=
            JSON.parse(this.responseText).results[0].name.last;
            document.getElementById("hopes3").innerHTML=
            JSON.parse(this.responseText).results[0].location.street.number;
            document.getElementById("hopes4").innerHTML=
            JSON.parse(this.responseText).results[0].location.street.name;
            document.getElementById("hopes5").innerHTML=
            JSON.parse(this.responseText).results[0].location.city;
            document.getElementById("hopes6").innerHTML=
            JSON.parse(this.responseText).results[0].location.state;
            document.getElementById("hopes7").innerHTML=
            JSON.parse(this.responseText).results[0].location.country;
            document.getElementById("hopes8").innerHTML=
            JSON.parse(this.responseText).results[0].location.postcode;
            document.getElementById("hopes9").innerHTML=
            JSON.parse(this.responseText).results[0].location.coordinates.latitude;
            document.getElementById("hopes10").innerHTML=
            JSON.parse(this.responseText).results[0].location.coordinates.longitude;
            document.getElementById("hopes11").innerHTML=
            JSON.parse(this.responseText).results[0].email;
            document.getElementById("hopes12").innerHTML=
            JSON.parse(this.responseText).results[0].login.uuid;
            document.getElementById("hopes13").innerHTML=
            JSON.parse(this.responseText).results[0].dob.date;
            document.getElementById("hopes14").innerHTML=
            JSON.parse(this.responseText).results[0].phone;
            // another user authentication
            document.getElementById("avatar1");
            avatar1.src = responseObject.results[1].picture.large;
            document.getElementById("hope1").innerHTML=
            JSON.parse(this.responseText).results[1].gender;
            document.getElementById("hope2").innerHTML=
            JSON.parse(this.responseText).results[1].name.title;
            document.getElementById("hope3").innerHTML=
            JSON.parse(this.responseText).results[1].name.first;
            document.getElementById("hope4").innerHTML=
            JSON.parse(this.responseText).results[1].name.last;
            document.getElementById("hope5").innerHTML=
            JSON.parse(this.responseText).results[1].location.street.number;
            document.getElementById("hope6").innerHTML=
            JSON.parse(this.responseText).results[1].location.street.name;
            document.getElementById("hope7").innerHTML=
            JSON.parse(this.responseText).results[1].location.city;
            document.getElementById("hope8").innerHTML=
            JSON.parse(this.responseText).results[1].location.state;
            document.getElementById("hope9").innerHTML=
            JSON.parse(this.responseText).results[1].location.country;
            document.getElementById("hope10").innerHTML=
            JSON.parse(this.responseText).results[1].location.postcode;
            document.getElementById("hope11").innerHTML=
            JSON.parse(this.responseText).results[1].location.coordinates.latitude;
            document.getElementById("hope12").innerHTML=
            JSON.parse(this.responseText).results[1].location.coordinates.longitude;
            document.getElementById("hope13").innerHTML=
            JSON.parse(this.responseText).results[1].email;
            document.getElementById("hope14").innerHTML=
            JSON.parse(this.responseText).results[1].login.uuid;
            document.getElementById("hope15").innerHTML=
            JSON.parse(this.responseText).results[1].dob.date;
            document.getElementById("hope16").innerHTML=
            JSON.parse(this.responseText).results[1].phone;
            // Another user
            document.getElementById("avatar2");
            avatar2.src = responseObject.results[2].picture.large;
            document.getElementById("hole1").innerHTML=
            JSON.parse(this.responseText).results[2].gender;
            document.getElementById("hole2").innerHTML=
            JSON.parse(this.responseText).results[2].name.title;
            document.getElementById("hole3").innerHTML=
            JSON.parse(this.responseText).results[2].name.first;
            document.getElementById("hole4").innerHTML=
            JSON.parse(this.responseText).results[2].name.last;
            document.getElementById("hole5").innerHTML=
            JSON.parse(this.responseText).results[2].location.street.number;
            document.getElementById("hole6").innerHTML=
            JSON.parse(this.responseText).results[2].location.street.name;
            document.getElementById("hole7").innerHTML=
            JSON.parse(this.responseText).results[2].location.city;
            document.getElementById("hole8").innerHTML=
            JSON.parse(this.responseText).results[2].location.state;
            document.getElementById("hole9").innerHTML=
            JSON.parse(this.responseText).results[2].location.country;
            document.getElementById("hole10").innerHTML=
            JSON.parse(this.responseText).results[2].location.postcode;
            document.getElementById("hole11").innerHTML=
            JSON.parse(this.responseText).results[2].location.coordinates.latitude;
            document.getElementById("hole12").innerHTML=
            JSON.parse(this.responseText).results[2].location.coordinates.longitude;
            document.getElementById("hole13").innerHTML=
            JSON.parse(this.responseText).results[2].email;
            document.getElementById("hole14").innerHTML=
            JSON.parse(this.responseText).results[2].login.uuid;
            document.getElementById("hole15").innerHTML=
            JSON.parse(this.responseText).results[2].dob.date;
            document.getElementById("hole16").innerHTML=
            JSON.parse(this.responseText).results[2].phone;
            // Another user too

            document.getElementById("avatar3");
            avatar3.src = responseObject.results[3].picture.large;
            document.getElementById("holle1").innerHTML=
            JSON.parse(this.responseText).results[3].gender;
            document.getElementById("holle2").innerHTML=
            JSON.parse(this.responseText).results[3].name.title;
            document.getElementById("holle3").innerHTML=
            JSON.parse(this.responseText).results[3].name.first;
            document.getElementById("holle4").innerHTML=
            JSON.parse(this.responseText).results[3].name.last;
            document.getElementById("holle5").innerHTML=
            JSON.parse(this.responseText).results[3].location.street.number;
            document.getElementById("holle6").innerHTML=
            JSON.parse(this.responseText).results[3].location.street.name;
            document.getElementById("holle7").innerHTML=
            JSON.parse(this.responseText).results[3].location.city;
            document.getElementById("holle8").innerHTML=
            JSON.parse(this.responseText).results[3].location.state;
            document.getElementById("holle9").innerHTML=
            JSON.parse(this.responseText).results[3].location.country;
            document.getElementById("holle10").innerHTML=
            JSON.parse(this.responseText).results[3].location.postcode;
            document.getElementById("holle11").innerHTML=
            JSON.parse(this.responseText).results[3].location.coordinates.latitude;
            document.getElementById("holle12").innerHTML=
            JSON.parse(this.responseText).results[3].location.coordinates.longitude;
            document.getElementById("holle13").innerHTML=
            JSON.parse(this.responseText).results[3].email;
            document.getElementById("holle14").innerHTML=
            JSON.parse(this.responseText).results[3].login.uuid;
            document.getElementById("holle15").innerHTML=
            JSON.parse(this.responseText).results[3].dob.date;
            document.getElementById("holle16").innerHTML=
            JSON.parse(this.responseText).results[3].phone;



            // for (let i = 0; i < responseObject.results.length; i++) {
            //     console.log(responseObject.results[i].gender);
            //     document.getElementById("hopes").innerHTML = responseObject.results[i].gender;
            // }
            // document.getElementById("hopes").innerHTML = this.responseText;

        }
    }
    request.open('GET', url, true);
    request.send();

}
useData();