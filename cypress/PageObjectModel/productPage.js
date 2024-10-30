class ProductPage {
    elements = {
        clickAddToCart: '#tbodyid a',
        openCart: '#cartur',
        cartItems: '#tbodyid',
        ProuctInCart: '#page-wrapper'
    }

    openSite() {
        cy.visit('https://demoblaze.com/')
    }

    visitProductPage(ProductName) {
        cy.get(this.elements.cartItems).contains(ProductName).click()
    }

    addToCart() {
        cy.get(this.elements.clickAddToCart).click()
    }

    assertAlertMessage() {
        cy.on("window:alert", (text) => {
            expect(text).to.equal('Product added');
        })
    }

    goToCart(){
        cy.get(this.elements.openCart).click();
    }

    verifyProuctInCart() {
        cy.get(this.elements.ProuctInCart)
            .should('exist')
            .and('be.visible');
    }
}

export default ProductPage
