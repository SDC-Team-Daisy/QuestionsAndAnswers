import http from 'k6/http';
import { sleep } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  vus: 100,
  duration: '15s',
}

const url = 'http://localhost:3000/qa/questions?product_id=1';

export default function() {
  const res = http.get(url);
  sleep(1);
}