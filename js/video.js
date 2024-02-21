const thumb = document.querySelector(".video");

thumb.addEventListener("click", ()=>{
    thumb.innerHTML = `
    <iframe width="100%" height="100%" style="border-radius: 16px" src="https://www.youtube.com/embed/JCD-b2SVQNg?si=_b9-PNPjtqxj3KS3&amp;start=1" title="CURSO DE RUDIMENTOS NA PRÁTICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
});