// import seeded random number generator code
// https://github.com/davidbau/seedrandom/blob/released/seedrandom.min.js
!function(a,b){function c(c,j,k){var n=[];j=1==j?{entropy:!0}:j||{};var s=g(f(j.entropy?[c,i(a)]:null==c?h():c,3),n),t=new d(n),u=function(){for(var a=t.g(m),b=p,c=0;q>a;)a=(a+c)*l,b*=l,c=t.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b};return u.int32=function(){return 0|t.g(4)},u.quick=function(){return t.g(4)/4294967296},u["double"]=u,g(i(t.S),a),(j.pass||k||function(a,c,d,f){return f&&(f.S&&e(f,t),a.state=function(){return e(t,{})}),d?(b[o]=a,c):a})(u,s,"global"in j?j.global:this==b,j.state)}function d(a){var b,c=a.length,d=this,e=0,f=d.i=d.j=0,g=d.S=[];for(c||(a=[c++]);l>e;)g[e]=e++;for(e=0;l>e;e++)g[e]=g[f=s&f+a[e%c]+(b=g[e])],g[f]=b;(d.g=function(a){for(var b,c=0,e=d.i,f=d.j,g=d.S;a--;)b=g[e=s&e+1],c=c*l+g[s&(g[e]=g[f=s&f+b])+(g[f]=b)];return d.i=e,d.j=f,c})(l)}function e(a,b){return b.i=a.i,b.j=a.j,b.S=a.S.slice(),b}function f(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(f(a[c],b-1))}catch(g){}return d.length?d:"string"==e?a:a+"\0"}function g(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return i(b)}function h(){try{if(j)return i(j.randomBytes(l));var b=new Uint8Array(l);return(k.crypto||k.msCrypto).getRandomValues(b),i(b)}catch(c){var d=k.navigator,e=d&&d.plugins;return[+new Date,k,e,k.screen,i(a)]}}function i(a){return String.fromCharCode.apply(0,a)}var j,k=this,l=256,m=6,n=52,o="random",p=b.pow(l,m),q=b.pow(2,n),r=2*q,s=l-1;if(b["seed"+o]=c,g(b.random(),a),"object"==typeof module&&module.exports){module.exports=c;try{j=require("crypto")}catch(t){}}else"function"==typeof define&&define.amd&&define(function(){return c})}([],Math);

// seed random number generator from embedded data fields
// conjoint profile 1
Math.seedrandom('${e://Field/seed1}');
// conjoint profile 2
//Math.seedrandom('${e://Field/seed2}');
// conjoint profile 3
//Math.seedrandom('${e://Field/seed3}');
// conjoint profile 4
//Math.seedrandom('${e://Field/seed4}');
// conjoint profile 5
//Math.seedrandom('${e://Field/seed5}');

// Functions for setting race and religion approximately proportionately
function getViolence(){
  // 90% no change; 10% black; 15% hispanic; 10% asian
  var n = Math.floor(Math.random()*100);
  if (n<10) {
    var out = 1;
  } else {
    var out = 0;
  }
  var vviolence = [0, 10];
  return vviolence[out];
}

// Create Variables for Traits associated with each dimension.
// var v1 = [0, 10];
// var v2 = [0, 10];
// var v3 = [0, 10];
// 198000

var v1_a = getViolence();
var v1_b = getViolence();

var v1_a_n = v1_a/100*198000;
var v1_a_p = v1_a.toString()+ '%';
var v1_a_t = v1_a_n.toLocaleString('en')+' ('+v1_a.toString()+ '%)';
var v1_b_n = v1_b/100*198000;
var v1_b_p = v1_b.toString()+ '%';
var v1_b_t = v1_b_n.toLocaleString('en')+' ('+v1_b.toString()+ '%)';
// 164000

var v2_a = getViolence();
var v2_b = getViolence();

var v2_a_n = v2_a/100*164000;
var v2_a_p = v2_a.toString()+ '%';
var v2_a_t = v2_a_n.toLocaleString('en')+' ('+v2_a.toString()+ '%)';
var v2_b_n = v2_b/100*164000;
var v2_b_p = v2_b.toString()+ '%';
var v2_b_t = v2_b_n.toLocaleString('en')+' ('+v2_b.toString()+ '%)';

// Robbery
var v3 = [0, 10, 25, 50];
var v3_a = v3[Math.floor(Math.random()*v3.length)];
var v3_b = v3[Math.floor(Math.random()*v3.length)];

var v3_a_n = v3_a/100*174000;
var v3_a_p = v3_a.toString()+ '%';
var v3_a_t = v3_a_n.toLocaleString('en')+' ('+v3_a.toString()+ '%)';
var v3_b_n = v3_b/100*174000;
var v3_b_p = v3_b.toString()+ '%';
var v3_b_t = v3_b_n.toLocaleString('en')+' ('+v3_b.toString()+ '%)';
//Assault
var v4 = [0, 10, 25, 50];
var v4_a = v4[Math.floor(Math.random()*v4.length)];
var v4_b = v4[Math.floor(Math.random()*v4.length)];

var v4_a_n = v4_a/100*182000;
var v4_a_p = v4_a.toString()+ '%';
var v4_a_t = v4_a_n.toLocaleString('en')+' ('+v4_a.toString()+ '%)';
var v4_b_n = v4_b/100*182000;
var v4_b_p = v4_b.toString()+ '%';
var v4_b_t = v4_b_n.toLocaleString('en')+' ('+v4_b.toString()+ '%)';

// Burglary
var p1 = [0, 25, 50, 75, 100];
var p1_a = p1[Math.floor(Math.random()*p1.length)];
var p1_b = p1[Math.floor(Math.random()*p1.length)];

var p1_a_n = p1_a/100*128000;
var p1_a_p = p1_a.toString()+ '%';
var p1_a_t = p1_a_n.toLocaleString('en')+' ('+p1_a.toString()+ '%)';
var p1_b_n = p1_b/100*128000;
var p1_b_p = p1_b.toString()+ '%';
var p1_b_t = p1_b_n.toLocaleString('en')+' ('+p1_b.toString()+ '%)';
// Theft
var p2 = [0, 25, 50, 75, 100];
var p2_a = p2[Math.floor(Math.random()*p2.length)];
var p2_b = p2[Math.floor(Math.random()*p2.length)];

var p2_a_n = p2_a/100*58000;
var p2_a_p = p2_a.toString()+ '%';
var p2_a_t = p2_a_n.toLocaleString('en')+' ('+p2_a.toString()+ '%)';
var p2_b_n = p2_b/100*58000;
var p2_b_p = p2_b.toString()+ '%';
var p2_b_t = p2_b_n.toLocaleString('en')+' ('+p2_b.toString()+ '%)';
// Other Property
var p3 = [0, 25, 50, 75, 100];
var p3_a = p3[Math.floor(Math.random()*p3.length)];
var p3_b = p3[Math.floor(Math.random()*p3.length)];

var p3_a_n = p3_a/100*27000;
var p3_a_p = p3_a.toString()+ '%';
var p3_a_t = p3_a_n.toLocaleString('en')+' ('+p3_a.toString()+ '%)';
var p3_b_n = p3_b/100*27000;
var p3_b_p = p3_b.toString()+ '%';
var p3_b_t = p3_b_n.toLocaleString('en')+' ('+p3_b.toString()+ '%)';
// Drug possession
var d1 = [0, 25, 50, 75, 100];
var d1_a = d1[Math.floor(Math.random()*d1.length)];
var d1_b = d1[Math.floor(Math.random()*d1.length)];

var d1_a_n = d1_a/100*45000;
var d1_a_p = d1_a.toString()+ '%';
var d1_a_t = d1_a_n.toLocaleString('en')+' ('+d1_a.toString()+ '%)';
var d1_b_n = d1_b/100*45000;
var d1_b_p = d1_b.toString()+ '%';
var d1_b_t = d1_b_n.toLocaleString('en')+' ('+d1_b.toString()+ '%)';
// Other drug offenses
var d2 = [0, 25, 50, 75, 100];
var d2_a = d2[Math.floor(Math.random()*d2.length)];
var d2_b = d2[Math.floor(Math.random()*d2.length)];

var d2_a_n = d2_a/100*155000;
var d2_a_p = d2_a.toString()+ '%';
var d2_a_t = d2_a_n.toLocaleString('en')+' ('+d2_a.toString()+ '%)';
var d2_b_n = d2_b/100*155000;
var d2_b_p = d2_b.toString()+ '%';
var d2_b_t = d2_b_n.toLocaleString('en')+' ('+d2_b.toString()+ '%)';
// DUI
var o1 = [0, 25, 50, 75, 100];
var o1_a = o1[Math.floor(Math.random()*o1.length)];
var o1_b = o1[Math.floor(Math.random()*o1.length)];

var o1_a_n = o1_a/100*26000;
var o1_a_p = o1_a.toString()+ '%';
var o1_a_t = o1_a_n.toLocaleString('en')+' ('+o1_a.toString()+ '%)';
var o1_b_n = o1_b/100*26000;
var o1_b_p = o1_b.toString()+ '%';
var o1_b_t = o1_b_n.toLocaleString('en')+' ('+o1_b.toString()+ '%)';
// Weapons
var o2 = [0, 25, 50, 75, 100];
var o2_a = o2[Math.floor(Math.random()*o2.length)];
var o2_b = o2[Math.floor(Math.random()*o2.length)];

var o2_a_n = o2_a/100*51000;
var o2_a_p = o2_a.toString()+ '%';
var o2_a_t = o2_a_n.toLocaleString('en')+' ('+o2_a.toString()+ '%)';
var o2_b_n = o2_b/100*51000;
var o2_b_p = o2_b.toString()+ '%';
var o2_b_t = o2_b_n.toLocaleString('en')+' ('+o2_b.toString()+ '%)';

// 0ther
var o3 = [0, 25, 50, 75, 100];
var o3_a = o3[Math.floor(Math.random()*o3.length)];
var o3_b = o3[Math.floor(Math.random()*o3.length)];

var o3_a_n = o3_a/100*84000;
var o3_a_p = o3_a.toString()+ '%';
var o3_a_t = o3_a_n.toLocaleString('en')+' ('+o3_a.toString()+ '%)';
var o3_b_n = o3_b/100*84000;
var o3_b_p = o3_b.toString()+ '%';
var o3_b_t = o3_b_n.toLocaleString('en')+' ('+o3_b.toString()+ '%)';

var tot_a = v1_a_n + v2_a_n + v3_a_n + v4_a_n + p1_a_n + p2_a_n + p3_a_n + d1_a_n + d2_a_n + o1_a_n + o2_a_n + o3_a_n;
var tot_a_n = tot_a.toLocaleString('en');

var tot_b = v1_b_n + v2_b_n + v3_b_n + v4_b_n + p1_b_n + p2_b_n + p3_b_n + d1_b_n + d2_b_n + o1_b_n + o2_b_n + o3_b_n;
var tot_b_n = tot_b.toLocaleString('en');
// var voccupation = ["State Governor", "U.S. Senator", "Member of Congress", "CEO"];
// if (Math.random() >= 0.5) {
//     var vparty = ["Republican", "Democrat"];
// } else {
//     var vparty = ["Democrat", "Republican"];
// }
// var vmilitary = ["Served", "Did not serve"];
// var veduc = ["Community college", "State university", "Small college", "Ivy League university"];
// var vopinion = ["Strongly oppose", "Moderately oppose", "Slightly oppose", "Neither Support Nor Oppose", "Slightly support", "Moderately support", "Strongly support"];

// // Functions for setting race and religion approximately proportionately
// function getRace(){
//   // 60% non-hispanic white; 15% black; 15% hispanic; 10% asian
//   var n = Math.floor(Math.random()*100);
//   if (n<10) {
//     var out = 3;
//   } else if (n <25) {
//     var out = 2;
//   } else if (n<40) {
//     var out = 1;
//   } else {
//     var out = 0;
//   }
//   var vrace = ["White", "African American", "Hispanic", "Asian American"];
//   return vrace[out];
// }
// function getReligion(){
//   // 20% evangelical; 20% mainline; 20% catholic; 10% jewish; 10% muslim; 20% none
//   var n = Math.floor(Math.random()*100);
//   if (n<20) {
//     var out = 5;
//   } else if (n<30) {
//     var out = 4;
//   } else if (n<40) {
//     var out = 3;
//   } else if (n<60) {
//     var out = 2;
//   } else if (n<80) {
//     var out = 1;
//   } else {
//     var out = 0;
//   }
//   var vreligion = ["Evangelical protestant", "Mainline protestant", "Catholic", "Jewish", "Muslim", "None"];
//   return vreligion[out];
// }

// Use math.random to randomly select traits for each dimension for candidate A
traits_a = [v1_a_t,
            v2_a_t,
            v3_a_t,
            v4_a_t,
            p1_a_t,
            p2_a_t,
            p3_a_t,
            d1_a_t,
            d2_a_t,
            o1_a_t,
            o2_a_t,
            o3_a_t,
            tot_a_n];

traits_b = [v1_b_t,
            v2_b_t,
            v3_b_t,
            v4_b_t,
            p1_b_t,
            p2_b_t,
            p3_b_t,
            d1_b_t,
            d2_b_t,
            o1_b_t,
            o2_b_t,
            o3_b_t, 
            tot_b_n];



// (Math.floor(Math.random() * (75 - 35 + 1)) + 35).toString(),
//             vsex[Math.floor(Math.random()*vsex.length)],
//             getRace(),
//             getReligion(),
//             voccupation[Math.floor(Math.random()*voccupation.length)],
//             vparty[0],
//             vmilitary[Math.floor(Math.random()*vmilitary.length)],
//             veduc[Math.floor(Math.random()*veduc.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)] ];

// // Use math.random to randomly select traits for each dimension for candidate B
// traits_b = [(Math.floor(Math.random() * (75 - 35 + 1)) + 35).toString(),
//             vsex[Math.floor(Math.random()*vsex.length)],
//             getRace(),
//             getReligion(),
//             voccupation[Math.floor(Math.random()*voccupation.length)],
//             vparty[1],
//             vmilitary[Math.floor(Math.random()*vmilitary.length)],
//             veduc[Math.floor(Math.random()*veduc.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)],
//             vopinion[Math.floor(Math.random()*vopinion.length)] ];

// Create list of variables to use when setting attributes
// Create list of variables to use when setting attributes
a_list = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13"]; 
b_list = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13"]; 

// set html values in conjoint table
for(i=0;i<13;i++){
    document.getElementById(a_list[i]).innerHTML = traits_a[i];
    document.getElementById(b_list[i]).innerHTML = traits_b[i];
}

// store values as embedded data fields
Qualtrics.SurveyEngine.setEmbeddedData('traits1a', traits_a.join("|"));
Qualtrics.SurveyEngine.setEmbeddedData('traits1b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits2a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits2b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits3a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits3b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits4a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits4b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits5a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits5b', traits_b.join("|"));
