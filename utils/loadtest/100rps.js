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