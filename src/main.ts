import './style.css'

// import './solid/01-srp';
// import './solid/01-srp';
// import './solid/02-open-close-a';
// import './solid/02-no-open-close-a';
// import './solid/03-liskov-a';
// import './solid/03-no-liskov-a';
// import './solid/04-no-segregation';
// import './solid/04-segregation';
// import './solid/05-dependency-a';
// import './solid/05-no-dependency-a';

// import './design-patterns/singleton.js';
// import './design-patterns/decorator.ts';
import './design-patterns/observer';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

