

export class ProductsOrder{

    public detailId:number;
    public productId:number;
		public price:number;
		public detailDescription:String;


	constructor(
		
	
	)

      public getdetailId (){

         return this.detailId;
      }


      public  setdetailIddetailId:number){

        this.detailId =detailId;
      }

      public getproductId (){

         return this.detailId;
      }


      public  setproductId:number){

        this.productId =productId;
      }
      

      public getprice(){
       
       return this.price;

      }

      public setprice(price:number){

      this.price= price;

      }

      public getdetailDescription(){

         return this.detailDescription;
      }

      public setdetailDescription(detailDescription:string){

          this.detailDescription =detailDescription;
      }
      
	{}
}