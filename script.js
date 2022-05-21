const myJson = "http://myjson.dit.upm.es/api/bins/donb";

fetch(myJson)
    .then(response => response.json())
    .then(data => appendData(data))
    .catch(err => {console.log('error: ' + err)})

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i=0; i<9; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
            '<div class="container-list">' + 
                '<img class="img-profile" src='+ data[i].profile_image_url + '/>'+
                '<div class="head-profile"><h3>' + data[i].name + '</h3>'+
                '<i style="font-size:24px" class="fa">&#xf073; &nbsp;</i>&nbsp;9:00 AM - 8:00 PM'+
                '<div style="text-align: right;margin-top: -2.3em;color: #134B8A;"><b style="font-size:25px">&bull; </b> 4.5</div>'+
                '<br><br><div class="img-detail-head-profile">'+
                    '<img class="img-radian-left img-profile-detail" src='+ data[i].images +'/>'+
                    '<img class="img-profile-detail" src=' + data[i].images + '/>'+
                    '<img class="img-radian-right img-profile-detail" src=' + data[i].images + '/></div></div>';
        mainContainer.appendChild(div);
    }

    var mainContainer = document.getElementById("myData3");
    for (var i=9; i<18; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
            '<div class="container-list">' + 
                '<img class="img-profile" src='+ data[i].profile_image_url + '/>'+
                '<div class="head-profile"><h3>' + data[i].name + '</h3>'+
                '<i style="font-size:24px" class="fa">&#xf073; &nbsp;</i>&nbsp;9:00 AM - 8:00 PM'+
                '<div style="text-align: right;margin-top: -2.3em;color: #134B8A;"><b style="font-size:25px">&bull; </b> 4.5</div>'+
                '<br><br><div class="img-detail-head-profile">'+
                    '<img class="img-radian-left img-profile-detail" src='+ data[i].images +'/>'+
                    '<img class="img-profile-detail" src=' + data[i].images + '/>'+
                    '<img class="img-radian-right img-profile-detail" src=' + data[i].images + '/></div></div>';
        mainContainer.appendChild(div);
    }

    var mainContainer = document.getElementById("myData4");
    for (var i=18; i<27; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
            '<div class="container-list">' + 
                '<img class="img-profile" src='+ data[i].profile_image_url + '/>'+
                '<div class="head-profile"><h3>' + data[i].name + '</h3>'+
                '<i style="font-size:24px" class="fa">&#xf073; &nbsp;</i>&nbsp;9:00 AM - 8:00 PM'+
                '<div style="text-align: right;margin-top: -2.3em;color: #134B8A;"><b style="font-size:25px">&bull; </b> 4.5</div>'+
                '<br><br><div class="img-detail-head-profile">'+
                    '<img class="img-radian-left img-profile-detail" src='+ data[i].images +'/>'+
                    '<img class="img-profile-detail" src=' + data[i].images + '/>'+
                    '<img class="img-radian-right img-profile-detail" src=' + data[i].images + '/></div></div>';
        mainContainer.appendChild(div);
    }

    var mainContainer = document.getElementById("myData2");
    for (var i=27; i<36; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
            '<div class="container-list">' + 
                '<img class="img-profile" src='+ data[i].profile_image_url + '/>'+
                '<div class="head-profile"><h3>' + data[i].name + '</h3>'+
                '<i style="font-size:24px" class="fa">&#xf073; &nbsp;</i>&nbsp;9:00 AM - 8:00 PM'+
                '<div style="text-align: right;margin-top: -2.3em;color: #134B8A;"><b style="font-size:25px">&bull; </b> 4.5</div>'+
                '<br><br><div class="img-detail-head-profile">'+
                    '<img class="img-radian-left img-profile-detail" src='+ data[i].images +'/>'+
                    '<img class="img-profile-detail" src=' + data[i].images + '/>'+
                    '<img class="img-radian-right img-profile-detail" src=' + data[i].images + '/></div></div>';
        mainContainer.appendChild(div);
    }
}

/*function openContent(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("but-content-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}*/