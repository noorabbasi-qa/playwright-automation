// 
import { test, expect } from '@playwright/test';

test('@sanity test1', async ({ page }) => {
  console.log('this is my test1...');
});

test('@sanity test2', async ({ page }) => {
  console.log('this is my test2...');
});

test('@reg test3', async ({ page }) => {
  console.log('this is my test3...');
});

test('@reg test4', async ({ page }) => {
  console.log('this is my test4...');
});

test('@sanity @reg test5', async ({ page }) => {
  console.log('this is my test5...');
});
