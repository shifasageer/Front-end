export class Product{
    productName : string;
    productDesc : string;
    productCategory : string;
    productPrice : number;
    productPublish : boolean;

    constructor(productName : string, productDesc : string, productCategory : string, productPrice : number,productPublish : boolean){
        this.productName = productName;
        this.productDesc = productDesc;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.productPublish = productPublish;
    }
}