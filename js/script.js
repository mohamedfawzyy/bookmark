var siteName =document.getElementById("sitename");
var siteURL=document.getElementById("siteurl");
var saveSites=document.getElementById("sites");
// console.log(siteName,siteURL);
var sites;
(function(){
    if(JSON.parse(localStorage.getItem("sites"))){
        sites=JSON.parse(localStorage.getItem("sites"));
        displaySites();
    }else{
        sites=[];
    }
})();
function addSite(){
    if(regex()){
        var newSite={
            name:siteName.value,
            URL:siteURL.value
          };
          sites.push(newSite);
          localStorage.setItem("sites",JSON.stringify(sites));
          clearInputs();
          displaySites();
    }
    else{
        window.alert("wrong with name or url");
    }
  
}
function displaySites(){
    box='';
    for(var i=0;i<sites.length;i++){
        box +=`
        <div class="site">
        <span>${sites[i].name}</span>
        <a class="btn btn-info" href="${sites[i].URL}" target="_blank">visit</a>
        <button class="btn btn-danger" onclick="deleteSite(${i})">delete</button>
        </div>
        `
    }
    saveSites.innerHTML=box;
}
function deleteSite(index){
    sites.splice(index,1);
    localStorage.setItem("sites",JSON.stringify(sites));
    displaySites();
}
function clearInputs(){
    siteName.value="";
    siteURL.value="";
}

function regex(){
    var regex=/[A-Za-z]{1,}/;
    return (regex.test(siteName.value) && regex.test(siteURL.value));
}