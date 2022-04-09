var scope = {
    first: "Accessibility or visibility of variables.",
    second:"Types are Global Scope, Local Scope, Block Scope.",
    third:"Global Scope: Variables are declared in Global Space.",
    fourth:"Local Scope: Variables are declared inside function.",
    fifth:"Block Scope: Variables are declared inside block using lets or const."
}

var hoisting = {
    first: "Deceleration of variable and function before actually executing the program.",
    second:"It is just creating the list of the variables and function.",
    third:"It doesn't care about variable values.",
    fourth:"All it wants to know what variables are present in a program.",
    fifth:"It stores the value of variable as undefined initially.",
}

var constructor_functions = {
    first: "special function that creates and initializes an object instance of a class.",
    second:"a constructor gets called when an object is created using the new keyword.",
    third:"The purpose of a constructor is to create a new object and set values for any existing object properties.",
    fourth:"In JavaScript, multiple objects can be created in a constructor.",
}

var prototype = {
    first:"It is like a blueprint.",
    second:"An original object from which a new object is created.",
    third:"In Js prototype can also have a prototype.",
    fourth:"Hence it creates chain of prototype.",
}


localStorage.setItem("scope", JSON.stringify(scope));
localStorage.setItem("hoisting", JSON.stringify(hoisting));
localStorage.setItem("constructor functions", JSON.stringify(constructor_functions));
localStorage.setItem("prototype", JSON.stringify(prototype));



document.querySelector("#scope").addEventListener("click",function(){
    var sco = JSON.parse(localStorage.getItem("scope"));

    var x = document.querySelector(".one")
    x.style.boxShadow  = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var ul = document.createElement("ul");

    var h1 = document.createElement("h1");
    h1.innerText = "Scope";

    var first = document.createElement("li");
    first.innerText = sco.first;

    var second = document.createElement("li");
    second.innerText = sco.second;

    var third = document.createElement("li");
    third.innerText = sco.third;

    var fourth = document.createElement("li");
    fourth.innerText = sco.fourth;

    var fifth = document.createElement("li");
    fifth.innerText = sco.fifth;

    ul.append(first, second, third, fourth, fifth);

    var video = document.createElement("video");
    video.controls =  true;

    var source = document.createElement("source");
    source.src = "/DAY1/video/prob2.mp4";
    source.type = "video/mp4";
    video.append(source);
    

    document.querySelector(".one").append(h1, ul,video);
    document.querySelector(".two").innerText = null;
    document.querySelector(".two").style.boxShadow = "none";
    document.querySelector(".three").innerText = null;
    document.querySelector(".three").style.boxShadow = "none";
    document.querySelector(".four").innerText = null;
    document.querySelector(".four").style.boxShadow = "none";
});



document.querySelector("#hoisting").addEventListener("click",function(){

    var host = JSON.parse(localStorage.getItem("hoisting"));

    var x = document.querySelector(".two")
    x.style.boxShadow  = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var ul = document.createElement("ul");

    var h1 = document.createElement("h1");
    h1.innerText = "Hoisting";

    var first = document.createElement("li");
    first.innerText = host.first;

    var second = document.createElement("li");
    second.innerText = host.second;

    var third = document.createElement("li");
    third.innerText = host.third;

    var fourth = document.createElement("li");
    fourth.innerText = host.fourth;

    var fifth = document.createElement("li");
    fifth.innerText = host.fifth;

    ul.append(first, second, third, fourth, fifth);

    var video = document.createElement("video");
    video.controls =  true;

    var source = document.createElement("source");
    source.src = "/DAY1/video/prob2.mp4";
    source.type = "video/mp4";
    video.append(source);

    document.querySelector(".two").append(h1, ul, video);
    document.querySelector(".one").innerText = null;
    document.querySelector(".one").style.boxShadow = "none";
    document.querySelector(".three").innerText = null;
    document.querySelector(".three").style.boxShadow = "none";
    document.querySelector(".four").innerText = null;
    document.querySelector(".four").style.boxShadow = "none";
});



document.querySelector("#constructor_functions").addEventListener("click",function(){

    var cons = JSON.parse(localStorage.getItem("constructor functions"));

    var x = document.querySelector(".three")
    x.style.boxShadow  = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var ul = document.createElement("ul");

    var h1 = document.createElement("h1");
    h1.innerText = "Constructor Functions";

    var first = document.createElement("li");
    first.innerText = cons.first;

    var second = document.createElement("li");
    second.innerText = cons.second;

    var third = document.createElement("li");
    third.innerText = cons.third;

    var fourth = document.createElement("li");
    fourth.innerText = cons.fourth;


    ul.append(first, second, third, fourth);

    var video = document.createElement("video");
    video.controls =  true;

    var source = document.createElement("source");
    source.src = "/DAY1/video/prob2.mp4";
    source.type = "video/mp4";
    video.append(source);

    document.querySelector(".three").append(h1, ul, video);
    document.querySelector(".one").innerText = null;
    document.querySelector(".one").style.boxShadow = "none";
    document.querySelector(".two").innerText = null;
    document.querySelector(".two").style.boxShadow = "none";
    document.querySelector(".four").innerText = null;
    document.querySelector(".four").style.boxShadow = "none";
});

document.querySelector("#prototype").addEventListener("click",function(){

    var proto = JSON.parse(localStorage.getItem("prototype"));

    var x = document.querySelector(".four")
    x.style.boxShadow  = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var ul = document.createElement("ul");

    var h1 = document.createElement("h1");
    h1.innerText = "Prototype";

    var first = document.createElement("li");
    first.innerText = proto.first;

    var second = document.createElement("li");
    second.innerText = proto.second;

    var third = document.createElement("li");
    third.innerText = proto.third;

    var fourth = document.createElement("li");
    fourth.innerText = proto.fourth;


    ul.append(first, second, third, fourth);

    var video = document.createElement("video");
    video.controls =  true;

    var source = document.createElement("source");
    source.src = "/DAY1/video/prob2.mp4";
    source.type = "video/mp4";
    video.append(source);

    document.querySelector(".four").append(h1, ul, video);
    document.querySelector(".one").innerText = null;
    document.querySelector(".one").style.boxShadow = "none";
    document.querySelector(".two").innerText = null;
    document.querySelector(".two").style.boxShadow = "none";
    document.querySelector(".three").innerText = null;
    document.querySelector(".three").style.boxShadow = "none";
});