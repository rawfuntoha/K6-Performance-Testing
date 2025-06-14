import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  const res = http.get('https://test.k6.io');

  // Optionally log timings (not needed for summary)
  console.log(`Sending: ${res.timings.sending} ms`);
  console.log(`Waiting: ${res.timings.waiting} ms`);
  console.log(`Receiving: ${res.timings.receiving} ms`);

  sleep(1);
}