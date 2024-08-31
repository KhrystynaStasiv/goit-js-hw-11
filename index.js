import{S as f,i as g}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();function u(o){const e="44666739-d0cf1ddb18f9d30146fa54081",r="https://pixabay.com/api/",s=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return console.log(s.toString()),fetch(`${r}?${s}`).then(t=>t.json())}function d(o){return o.map(e=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${e.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${e.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${e.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${e.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const c=document.querySelector(".form"),l=document.querySelector(".gallery"),m=document.querySelector(".loader");function h(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}const y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function n(){g.error({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}function L(o){o&&(h(),c.reset(),l.innerHTML="",u(o).then(e=>{const r=e.hits;r.length?(l.innerHTML=d(r),y.refresh()):n()}).catch(e=>n()).finally(()=>p()))}c.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.search.value;L(e)});
//# sourceMappingURL=index.js.map
