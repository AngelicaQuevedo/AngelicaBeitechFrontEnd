import {Category} from "../model/Category"

export class Product{
	constructor(
		public productId:number,
		public name:string,
		public description:string,
		category: Category
	
	){}
}