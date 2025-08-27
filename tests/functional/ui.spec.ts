import { test, expect } from '@playwright/test';

test('UI: 1 + 2 = 3', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();
  const display = page.locator('#display');
  await expect(display).toHaveValue('3');
});

test('UI: division by zero shows error', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: '/' }).click();
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#error')).toContainText('DivisionByZero');
});
