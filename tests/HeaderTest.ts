import { test, expect } from '@playwright/test';

test('Проверка href в элементах хэдера', async ({ page }) => {
  await page.goto('https://digi-tech.dev/');

  await expect(
    page.getByRole('banner').getByRole('link', { name: 'Индивидуальная разработка' }),
  ).toHaveAttribute('href', '/individual_development/');

  await expect(page.getByRole('banner').getByRole('link', { name: 'О компании' })).toHaveAttribute(
    'href',
    '/about/',
  );

  await expect(
    page.getByRole('banner').getByRole('link', { name: 'Наши проекты' }),
  ).toHaveAttribute('href', '/projects/');

  await expect(page.getByRole('banner').getByRole('link', { name: 'Контакты' })).toHaveAttribute(
    'href',
    '/contacts/',
  );

  await expect(page.getByRole('link', { name: 'Высшие учебные заведения' })).toHaveAttribute(
    'href',
    '/vuzy/',
  );

  await expect(
    page.getByRole('link', { name: 'Средне-специальные учебные заведения' }),
  ).toHaveAttribute('href', '/ssuzy/');

  await expect(page.getByRole('link', { name: 'Предприятия' })).toHaveAttribute(
    'href',
    '/predpriyatiya/',
  );

  await expect(
    page.getByRole('banner').getByRole('link', { name: 'Профессионалитет' }),
  ).toHaveAttribute('href', '/professionalism/');
});

test('Проверка переходов по ссылкам в хэдере', async ({ page }) => {
  await page.goto('https://digi-tech.dev/');
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Индивидуальная разработка' })
    .click();
  await page.getByRole('banner').getByRole('link', { name: 'О компании' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Наши проекты' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Контакты' }).click();
  await page.getByRole('link', { name: 'Высшие учебные заведения' }).click();
  await page.getByRole('link', { name: 'Средне-специальные учебные заведения' }).click();
  await page.getByRole('link', { name: 'Предприятия' }).click();
  await page.getByRole('link', { name: 'Профессионалитет' }).click();
});
