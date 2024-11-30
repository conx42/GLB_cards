const models = [
  { title: "Model 1", image: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", usdz: "model1.usdz" },
  { title: "Model 2", image: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", usdz: "model2.usdz" },
];

const container = document.querySelector('body');

models.forEach((model) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <img src="${model.image}" alt="${model.title}">
      <h3>${model.title}</h3>
      <a href="${model.usdz}" rel="ar">View in AR</a>
  `;
  container.appendChild(card);
});
