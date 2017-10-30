import {Category} from "../model/Category"

export class Product{

        public productId:number;
		public name:string;
		public description:string;
		//category: Category;

	constructor(
		
	
	)

      public getproductId (){

         return this.productId;
      }


      public  setproductId(productId:number){

        this.productId =productId;
      }
      

      public getName(){
       
       return this.name;

      }

      public setName(name:string){

   this.name= name;

      }

      public getDescription(){

         return this.description;
      }

      public setDescription(description:string){

          this.description =description;
      }

	{}
}