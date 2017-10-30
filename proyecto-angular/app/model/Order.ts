import {Product} from "../model/Product"
export class Order{


		public idCliente:number;
		public deliveryAddress:String;
        public productsToOrder:Product[];
		


	constructor(
	

	
	)


       public getidCliente (){

         return this.idCliente;
      }


      public  setidCliente(idCliente:number){

        this.idCliente =idCliente;
      }
      

       public getproducts (){

         return this.productsToOrder;
      }


      public  setproducts(productsToOrder:Product[]){

        this.productsToOrder =productsToOrder;
      }

        public getdeliveryAddress (){

         return this.deliveryAddress;
      }


      public  setdeliveryAddress(deliveryAddress:String){

        this.deliveryAddress =deliveryAddress;
      }

      

	{}
}