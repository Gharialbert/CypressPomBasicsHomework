import ProductPage from "../../PageObjectModel/productPage";

describe('Add to Cart test', () => {
    const ProductName = 'Samsung galaxy s6'

    it('Adding product to cart', () => {
       const productPage = new ProductPage();
        productPage.openSite();
        productPage.visitProductPage(ProductName);
        productPage.addToCart();
        productPage.assertAlertMessage();
        productPage.goToCart();
        productPage.verifyProuctInCart();
    });
});
