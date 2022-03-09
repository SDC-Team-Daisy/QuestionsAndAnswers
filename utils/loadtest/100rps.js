import http from 'k6/http';
import { sleep } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  vus: 1000,
  duration: '15s',
}

const id = Math.floor(Math.random() * 1000011);
const url = `http://localhost:3000/qa/questions?product_id=${id}`;

export default function() {
  const res = http.get(url);
  sleep(1);
}


// import http from 'k6/http';
// import { sleep } from 'k6';

// export const options = {
//   vus: 1000,
//   duration: '15s',
// };


// const id = Math.floor(Math.random() * 1000011);
// const urlProduct = `http://localhost:3000/api/products/${id}`
// const urlStyles = `http://localhost:3000/api/products/${id}/styles`

// export default function () {
//   // http.get(url);
//   // sleep(1);
//   const responses = http.batch([
//     ['GET', urlProduct],
//     ['GET', urlStyles]
//   ]);
// }