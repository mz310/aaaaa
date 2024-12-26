const brands = [
    {
      id: 1,
      name: "Lotte",
      image: "images/lottelogo.png",
      products: [
        { type: "4 Pack", price: "8,000₮", image: "images/choco4pack.png" },
        { type: "6 Pack", price: "12,000₮", image: "images/choco6pack.jpg" },
        { type: "12 Pack", price: "20,000₮", image: "images/choco12pack.jpg" },
      ],
    },
    {
      id: 2,
      name: "Piasten",
      image: "images/piastenlogo.jpg",
      products: [
        { type: "125 граммтай ", price: "15,000₮", image: "images/shoco125gr.jpg" },
        { type: "250 граммтай", price: "25,000₮", image: "images/shoco.jpg" },
        { type: "Big Ben", price: "8,000₮", image: "images/bigben.jpg" },
      ],
    },
    {
      id: 3,
      name: "Budweiser Beer",
      image: "images/budlogo.png",
      products: [
        { type: "500ml bottle", price: "5,000₮", image: "images/bud05.jpg" },
        { type: "330ml Bottle", price: "4,000₮", image: "images/bud033.jpg" },
        { type: "dark 500ml bottle", price: "6,000₮", image: "images/buddark05.png" },
      ],
    },
    {
      id: 4,
      name: "Parle",
      image: "images/parle.png",
      products: [
        { type: "Poppins", price: "5,000₮", image: "images/poppins.jpg" },
        { type: "Big Fap", price: "12,000₮", image: "images/bigfap.jpg" },
        { type: "Fap strawberry", price: "2,000₮", image: "images/fabstraw.jpg" },
      ],
    },
  ];
  
  // Render Brand Cards
  function renderBrands() {
    const brandsContainer = document.getElementById("brands");
    brandsContainer.innerHTML = "";
  
    brands.forEach((brand) => {
      brandsContainer.innerHTML += `
        <div class="brand-card" onclick="renderProducts(${brand.id})">
          <img src="${brand.image}" alt="${brand.name}">
          <h3>${brand.name}</h3>
        </div>
      `;
    });
  }
  
  // Render Product Variants
  function renderProducts(brandId) {
    const brand = brands.find((b) => b.id === brandId);
    if (!brand) return;
  
    const brandsContainer = document.getElementById("brands");
    brandsContainer.innerHTML = `
      <div class="variant-section">
        <h2>${brand.name.toUpperCase()}</h2>
        <div class="variants">
          ${brand.products
            .map(
              (product) => `
            <div class="variant">
              <img src="${product.image}" alt="${product.type}">
              <h3>${product.type}</h3>
              <p>${product.price}</p>
            </div>
          `
            )
            .join("")}
        </div>
        <button class="back-button" onclick="renderBrands()">Буцах</button>
      </div>
    `;
  }
  
  // Initial Render
  renderBrands();
  