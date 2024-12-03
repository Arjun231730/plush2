document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.querySelector('.products');
  const products = [
      { name: 'Gold Earrings', price: '1500', imageUrl: 'https://source.unsplash.com/250x250/?gold-earrings' },
      { name: 'Silver Necklace', price: '2000', imageUrl: 'https://source.unsplash.com/250x250/?silver-necklace' },
      { name: 'Gold Earrings', price: '1500', imageUrl: 'https://source.unsplash.com/250x250/?gold-earrings' },
      { name: 'Silver Necklace', price: '2000', imageUrl: 'https://source.unsplash.com/250x250/?silver-necklace' },
      { name: 'Diamond Bracelet', price: '3000', imageUrl: 'https://source.unsplash.com/250x250/?diamond-bracelet' },
      { name: 'Pearl Earrings', price: 'Rs. 1500', image: 'https://loremflickr.com/320/240/earrings' },
      { name: 'Gold Necklace', price: 'Rs. 2500', image: 'https://loremflickr.com/320/240/necklace' },
      { name: 'Silver Bracelet', price: 'Rs. 1800', image: 'https://loremflickr.com/320/240/bracelet' },
      { name: 'Diamond Ring', price: 'Rs. 7500', image: 'https://loremflickr.com/320/240/ring' },
      { name: 'Crystal Pendant', price: 'Rs. 3200', image: 'https://loremflickr.com/320/240/pendant' },
      { name: 'Stud Earrings', price: 'Rs. 1200', image: 'https://loremflickr.com/320/240/earrings' },
      { name: 'Choker Necklace', price: 'Rs. 2200', image: 'https://loremflickr.com/320/240/choker' },
      { name: 'Hoop Earrings', price: 'Rs. 1500', image: 'https://loremflickr.com/320/240/hoops' },
      { name: 'Beaded Anklet', price: 'Rs. 900', image: 'https://loremflickr.com/320/240/anklet' },
      { name: 'Charm Bracelet', price: 'Rs. 2000', image: 'https://loremflickr.com/320/240/charm' },
      { name: 'Emerald Necklace', price: 'Rs. 5000', image: 'https://loremflickr.com/320/240/emerald' },
      { name: 'Pearl Ring', price: 'Rs. 2800', image: 'https://loremflickr.com/320/240/ring' },
      { name: 'Sapphire Earrings', price: 'Rs. 4500', image: 'https://loremflickr.com/320/240/sapphire' },
      { name: 'Gold Bangles', price: 'Rs. 3500', image: 'https://loremflickr.com/320/240/bangles' },
      { name: 'Ruby Pendant', price: 'Rs. 6000', image: 'https://loremflickr.com/320/240/ruby' },
      { name: 'Leather Bracelet', price: 'Rs. 1500', image: 'https://loremflickr.com/320/240/leather' },
      { name: 'Diamond Pendant', price: 'Rs. 8000', image: 'https://loremflickr.com/320/240/diamond' },
      { name: 'Gold Cufflinks', price: 'Rs. 4000', image: 'https://loremflickr.com/320/240/cufflinks' },
      { name: 'Silver Anklet', price: 'Rs. 1000', image: 'https://loremflickr.com/320/240/silver' },
      { name: 'Gemstone Ring', price: 'Rs. 3500', image: 'https://loremflickr.com/320/240/gemstone' },
      { name: 'Crystal Earrings', price: 'Rs. 2000', image: 'https://loremflickr.com/320/240/crystal' },
      { name: 'Gold Pendant', price: 'Rs. 2800', image: 'https://loremflickr.com/320/240/gold' },
      { name: 'Chain Necklace', price: 'Rs. 2500', image: 'https://loremflickr.com/320/240/chain' },
      { name: 'Platinum Ring', price: 'Rs. 9000', image: 'https://loremflickr.com/320/240/platinum' },
      { name: 'Silver Cufflinks', price: 'Rs. 2000', image: 'https://loremflickr.com/320/240/silver' },
      { name: 'Rose Gold Bracelet', price: 'Rs. 4000', image: 'https://loremflickr.com/320/240/rosegold' },
      { name: 'Turquoise Necklace', price: 'Rs. 3700', image: 'https://loremflickr.com/320/240/turquoise' },
      { name: 'Amethyst Earrings', price: 'Rs. 2200', image: 'https://loremflickr.com/320/240/amethyst' },
      { name: 'Opal Ring', price: 'Rs. 4500', image: 'https://loremflickr.com/320/240/opal' },
      { name: 'Gold Watch', price: 'Rs. 12000', image: 'https://loremflickr.com/320/240/watch' },
      { name: 'Silver Pendant', price: 'Rs. 2000', image: 'https://loremflickr.com/320/240/silver' },
      { name: 'Pearl Choker', price: 'Rs. 3000', image: 'https://loremflickr.com/320/240/pearl' },
      { name: 'Gold Earrings', price: 'Rs. 3200', image: 'https://loremflickr.com/320/240/earrings' },
      { name: 'Crystal Bracelet', price: 'Rs. 1800', image: 'https://loremflickr.com/320/240/crystal' },
      { name: 'Topaz Necklace', price: 'Rs. 4000', image: 'https://loremflickr.com/320/240/topaz' },
      { name: 'Moonstone Ring', price: 'Rs. 2700', image: 'https://loremflickr.com/320/240/moonstone' },
      { name: 'Gold Brooch', price: 'Rs. 3500', image: 'https://loremflickr.com/320/240/brooch' },
      { name: 'Sterling Silver Ring', price: 'Rs. 3000', image: 'https://loremflickr.com/320/240/sterling' },
      { name: 'Amber Pendant', price: 'Rs. 3100', image: 'https://loremflickr.com/320/240/amber' },
      { name: 'Aquamarine Earrings', price: 'Rs. 3700', image: 'https://loremflickr.com/320/240/aquamarine' },
      { name: 'Gold Anklet', price: 'Rs. 5000', image: 'https://loremflickr.com/320/240/anklet' },
      { name: 'Silver Hoop Earrings', price: 'Rs. 1500', image: 'https://loremflickr.com/320/240/silver' },
      { name: 'Zircon Pendant', price: 'Rs. 2800', image: 'https://loremflickr.com/320/240/zircon' },
      { name: 'Gold Chain', price: 'Rs. 3300', image: 'https://loremflickr.com/320/240/chain' },
      { name: 'Ruby Earrings', price: 'Rs. 4400', image: 'https://loremflickr.com/320/240/ruby' },
      { name: 'Emerald Brooch', price: 'Rs. 4900', image: 'https://loremflickr.com/320/240/emerald' },
      { name: 'Sapphire Ring', price: 'Rs. 7000', image: 'https://loremflickr.com/320/240/sapphire' },
      { name: 'Garnet Necklace', price: 'Rs. 3800', image: 'https://loremflickr.com/320/240/garnet' },
      { name: 'Onyx Bracelet', price: 'Rs. 2300', image: 'https://loremflickr.com/320/240/onyx' }
  ];

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rs. ${product.price}</p>
        <button>Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
});
});
