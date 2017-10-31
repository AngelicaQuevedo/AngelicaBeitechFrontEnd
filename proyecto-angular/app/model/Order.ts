import {Product} from "../model/Products"
export class Order{


		public idCliente:number;
		public deliveryAddress:String;
    public productsToOrder:Product[];
    public orderDetails:orderDetails[];
		


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

       public getOrderDetails (){

         return this.orderDetails;
      }


      public  setOrderDetails(orderDetails:OrderDetails[]){

        this.orderDetails =orderDetails;
      }


      

	{}
}