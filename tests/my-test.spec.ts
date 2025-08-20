import { expect, test } from "@playwright/test";

test("Google Test", async ({ page }) => {
  await page.goto("https://www.google.com");
  console.log("Google Title: ", await page.title());
  console.log("Google URL: ", page.url());
  expect(await page.title()).toEqual("Google");
  console.log("Some console log for viewing PR-- update logs");
});

test("Facebook Test", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  console.log("Facebook Title: ", await page.title());
  console.log("Facebook URL: ", page.url());
  expect(await page.title()).toEqual("Facebook – log in or sign up");
});

test("X Test", async ({ page }) => {
  await page.goto("https://www.x.com");
  console.log("X Title: ", await page.title());
  console.log("X URL: ", page.url());
  expect(await page.title()).toEqual("X. It’s what’s happening / X");
});

test("Youtube Test", async ({ page }) => {
  await page.goto("https://www.youtube.com");
  console.log("Youtube Title: ", await page.title());
  console.log("Youtube URL: ", page.url());
  expect(await page.title()).toEqual("YouTube");
});
