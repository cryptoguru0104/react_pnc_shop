interface Product {
  Id: number,
  ImageUrl?: string,
  Price: number,
  DeprecatedPrice?: number,
  DeprecatedPercent?: number,
  Colors: string[],
  Title: string,
  Description?: string,
  Detail?: string,
  Size?: string,
  Quantity: number
}

interface User {
  Id: number,
  FirstName: string,
  LastName: string,
  Email: string
}

interface PaymentMethod {
  Id: number,
  Title: string,
  Number: string,
  Birthday: Date,
  ImageUrl: string,
}