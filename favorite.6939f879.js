var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("9fLg1"),n("cQGr2");var s=n("eLqhd");const r=function(e,t){const o=document.querySelectorAll(".read"),n=(new Date).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"}).replaceAll(".","/");o.forEach((o=>{if(e.target===o){const e={category:o.closest(".set").childNodes[3].childNodes[5].innerText,photo:o.closest(".set").childNodes[3].firstElementChild.src,date:o.closest(".wrapper").firstElementChild.innerText,url:o.href,title:o.closest(".set").childNodes[5].innerText,abstract:o.closest(".set").childNodes[7].innerText,id:o.closest(".set").dataset.id,readDate:n};for(const o of t)if(o.id===e.id)return;const r=o.closest(".set").firstElementChild,i=o.closest(".set").childNodes[3].childNodes[3];r.classList.remove("noActive-over"),r.classList.add("active-over"),i.classList.remove("noActive-rmBtn"),i.classList.add("active-rmBtn"),t.push(e),(0,s.setStorage)("readNews",t)}}))},i=function(e){e();const t=document.querySelectorAll(".set"),o=(0,s.getStorage)("readNews");o&&t.forEach((e=>{for(let t=0;t<o.length;t++){const n=o[t];if(e.dataset.id===n.id){const t=e.childNodes[3].childNodes[3],o=e.firstElementChild;o.classList.add("active-over"),o.classList.remove("noActive-over"),t.classList.remove("noActive-rmBtn"),t.classList.add("active-rmBtn")}}}))};s=n("eLqhd");var d=n("6eyJa"),a=n("icTnc");let c=[];c=(0,s.getStorage)("readNews")?[...(0,s.getStorage)("readNews")]:[];const l=document.querySelector(".list-news");let u=localStorage.getItem("ID-SAVE-FAVORITE"),f=JSON.parse(u)||[];function h(){f.map((e=>{l.querySelectorAll(".set").forEach((t=>{t.dataset.id===e.id&&(t.querySelector(".js-button_favorites").setAttribute("checked","true"),t.querySelector(".js-button_favorites").classList.add("add"),t.querySelector(".icon").classList.add("add"),t.querySelector("lable").innerHTML="Remove from favorite")}))}))}l.addEventListener("click",(e=>{!function(e){if(!e.target.classList.contains("button"))return;if(e.target.classList.contains("add")){const o=+f.findIndex((t=>t.idLenght===+e.target.attributes[2].value));f.splice(o,1),localStorage.setItem("ID-SAVE-FAVORITE",JSON.stringify(f)),e.target.parentNode.parentNode.parentNode.remove(),t=f,console.log(t),a.notFound.classList.add("not-found-hidden"),t.length||a.notFound.classList.remove("not-found-hidden")}var t;0===l.children.length&&a.notFound.classList.remove("not-found-hidden")}(e),r(e,c)})),function(e){if(f.length){let t=e.map((({url:e,media:t,title:o,abstract:n,date:s,photo:r,id:i,idLenght:a,category:c})=>(0,d.markUpPage)(r,o,n,s,e,c,i,a))).join("");l.insertAdjacentHTML("beforeend",t)}else a.notFound.classList.remove("not-found-hidden")}(f),i(h);var m=n("iQIUW");a=n("icTnc"),s=n("eLqhd"),d=n("6eyJa");a.searchForm.addEventListener("submit",(function(e){e.preventDefault();const t=e.target.search.value.trim().toLowerCase();if(!t)return function(e){if(window.matchMedia("(max-width: 767px)").matches)return;m.Notify.info(e)}("What would you like to find?");(function(e){let t="ID-SAVE-FAVORITE";const o=document.querySelector(".list-news");o.innerHTML="";const n=(0,s.getStorage)(t).filter((t=>t.title.toLowerCase().includes(e)));r=n,a.notFound.classList.add("not-found-hidden"),r.length||a.notFound.classList.remove("not-found-hidden"),function(e,t){const o=e.map((({photo:e,title:t,abstract:o,date:n,url:s,category:r,id:i,idLenght:a})=>(0,d.markUpPage)(e,t,o,n,s,r,i,a))).join("");t.innerHTML=o}(n,o),i((()=>h()));var r})(t),e.currentTarget.reset()})),n("dTjbJ");
//# sourceMappingURL=favorite.6939f879.js.map
