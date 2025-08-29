// Mapeo automático de 200 subdominios a sus landings correspondientes
// Puedes usar este objeto en tu app Express

const landingPages = {
  // ...
};

for (let i = 1; i <= 200; i++) {
  landingPages[`my-personal-card${i}.tudominio.com`] = `/landing${i}.html`;
}

module.exports = landingPages;
