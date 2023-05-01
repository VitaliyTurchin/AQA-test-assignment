describe('The first task.', () => {
    it('Verify if the price filter working correctly for the following marketplaces',async () => {
        await browser.url('https://allo.ua/');
        expect($('div[id="__allo"]')).toBeExisting();
        await browser.pause(3000);
        (await $('div a[title="Смартфони та телефони"]')).click();
        (await $('div.portal-group a[title="Смартфони та мобільні телефони"]')).click();
        (await $('div a[data-id="available_in_city"]')).click();
        (await $('div span[class="f-popup__btn-message"]')).click()
        await browser.pause(5000);
        (await $('div a[data-id="855"]')).click();
        (await $('div span[class="f-popup__btn-message"]')).click()
        await browser.pause(5000);
        (await $('div a[data-id="66614"]')).click();
        (await $('div span[class="f-popup__btn-message"]')).click()
        await browser.pause(5000);
    })
});

describe('The second task.', () =>{
    it('Add items to the basket', async () =>{
        await browser.url('https://allo.ua/');
        expect($('div[id="__allo"]')).toBeExisting();
        await browser.pause(3000);
        (await $('div a[title="Смартфони та телефони"]')).click();
        (await $('div.portal-group a[title="Смартфони та мобільні телефони"]')).click();
        (await $('button[title="Купити"]')).click();
        await browser.pause(5000);
        (await $('div div[class="v-modal__close-btn"]')).click();
        await browser.pause(5000);
        (await $('div a[class="v-logo"]')).click();
        (await $('div a[title="Телевізори та мультимедіа"]')).click();
        await browser.pause(5000);
        (await $('div.portal-group a[title="Телевізори"]')).click();
        (await $('div.product-card__buy-box button[title="Купити"]')).click();
        await browser.pause(5000);
        (await $('div[class="v-modal__close-btn"]')).click();
        (await $('div button[aria-label="Кошик"]')).click();
        await $('div[class="popup_scroll popup_scroll--modal"] svg[class="vi i-shared vi__close remove"]').click()
        await browser.pause(5000);
        })
})

describe('The third task.', () => {
    it('Search the item', async () => {
        await browser.url('https://allo.ua/');
        expect($('div[id="__allo"]')).toBeExisting();
        await browser.pause(3000);
        (await $('input[id="search-form__input"]')).setValue('Iphone 14 pro');
        (await $('div[class="mh-search"] button[class="search-form__submit-button"]')).click();
        await browser.pause(5000);
        expect($('div[class="snap-slider__item"] spun[class="b-crumbs__link"]')).toBeExisting();
        expect($('div[class="snap-slider__item"] spun[class="b-crumbs__link"]')).toHaveText('Iphone 14 pro');
    })
})

describe('The fourth task(negative)', () => {
    it('Log In', async () => {
        await browser.url('https://allo.ua/');
        expect($('div[id="__allo"]')).toBeExisting();
        await browser.pause(3000);
        (await $('div[class="mh-profile"] button[class="mh-button mh-button--open"]')).click();
        await $('div[class="a-input__container"] input[id="qa34VYG28bRC3SIkcsvvM"]').setValue('Vitalii Turchhin');
        (await $('div[class="auth__login-content"] button[class="a-button a-button--block a-button--lg a-button--primary"]')).click();
        await browser.pause(10000);
       
    })
})