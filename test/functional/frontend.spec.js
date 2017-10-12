'use strict';

const { test, trait } = use('Test/Suite')('Frontend');
trait('Test/Browser');

test('Visit home page', async ({ assert, browser }) => {
  const page = await browser.visit('/');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - A new kind of Instant Messaging'););
});

test('Visit downloads page', async ({ assert, browser }) => {
  const page = await browser.visit('/downloads');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - Downloads');
});

test('Visit blog', async ({ assert, browser }) => {
  const page = await browser.visit('/blog');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - Blog');
});

test('Visit learn more page', async ({ assert, browser }) => {
  const page = await browser.visit('/learn-more');
  assert.equal(page.status, 200);
  page.assertHas('Tox - Learn more');
});

test('Visit features page', async ({ assert, browser }) => {
  const page = await browser.visit('/features');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - Features');
});

test('Visit support center', async ({ assert, browser }) => {
  const page = await browser.visit('/support');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - Knoweldges base');
});

test('Visit developers hub', async ({ assert, browser }) => {
  const page = await browser.visit('/developers');
  assert.equal(page.status, 200);
  page.assertTitle('Tox - Developers Hub');
});


/*test('Visit homepage and go to Downloads page', async ({ assert, browser }) => {
  const page = await browser.visit('/');
  await page.click('a[href="/downloads"]');
  await page.waitForNavigation();
  await page.assertPage('/downloads')
});*/
