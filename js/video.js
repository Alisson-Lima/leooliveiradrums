const thumb = document.querySelector(".video");

thumb.addEventListener("click", ()=>{
    thumb.innerHTML = `
        <iframe width="100%" height="100%" style="border-radius: 16px;" src="https://www.youtube.com/embed/WthTWqZc8Jk" title="ME ATRAIU | Gabriela Rocha | DRUM COVER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
});