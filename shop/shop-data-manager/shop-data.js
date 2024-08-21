function cardCode(title, desc, img) {
    code = `<div class="card" style="width: 18rem">
            <img src="images/${img}" style="object-fit: cover; height: 55%" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title" style="font-family: var(--card-title-font)">${title}</h5>
                <p class="card-text" style="font-family: var(--card-desc-font)">${desc}</p>
                <div class="d-flex justify-content-end"><a href="#" class="btn buy-btn">Buy Now</a></div>
            </div>
        </div>`;
    return code;
}

async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

window.onload = async() => {
    const cardsContainer = document.querySelector("body");

    url = "/shop/shop-data-manager/products.json";
    data = await fetchData(url);

    Object.keys(data).forEach(section => {
        section 
    })
    

};
