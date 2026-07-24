// Functional test of demo.html's core flow: record a sale twice with the same
// order id → exactly one deduction, duplicate visibly blocked. Exit 0 = pass.
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('file:///' + resolve('../site/demo.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });

const result = await page.evaluate(async () => {
  const out = {};
  document.querySelector('[data-tab="record"]').click();
  await new Promise(r => setTimeout(r, 150));
  const orderInput = document.getElementById('sale-order-id');
  const select = document.getElementById('sale-product');
  const form = orderInput.closest('form');
  if (select && select.selectedIndex < 1 && select.options.length > 1) {
    select.selectedIndex = 1; select.dispatchEvent(new Event('change', { bubbles: true }));
  }
  const submit = () => {
    orderInput.value = 'TEST-ORDER-777';
    orderInput.dispatchEvent(new Event('input', { bubbles: true }));
    form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  };
  submit();
  await new Promise(r => setTimeout(r, 250));
  submit();
  await new Promise(r => setTimeout(r, 250));
  const body = document.body.innerText;
  out.ordersRecorded = (body.match(/(\d+)\s*\n?\s*orders recorded/i) || [])[1];
  out.duplicatesBlocked = (body.match(/(\d+)\s*\n?\s*duplicates blocked/i) || [])[1];
  out.auditHasDuplicate = /duplicate/i.test(body);
  return out;
});
await browser.close();

console.log(JSON.stringify(result));
if (errors.length) { console.log('CONSOLE_ERRORS:\n' + errors.join('\n')); process.exit(3); }
const pass = result.ordersRecorded === '1' && result.duplicatesBlocked === '1' && result.auditHasDuplicate;
console.log(pass ? 'PASS: 1 order recorded, 1 duplicate blocked' : 'FAIL: ' + JSON.stringify(result));
process.exit(pass ? 0 : 1);
