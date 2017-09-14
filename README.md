# paypal
paypal checkout with anuglar 4


Step 1 npm install xcomponent --save
Step 2 npm instal paypal-checkout --save
Step 3 copy and past <script src="https://www.paypalobjects.com/api/checkout.js"></script> Into index.html file
Step 4 open app.module.ts
Step 5 import * as ngCore from '@angular/core';
Step 6 declare const paypal: any;
Step 7 export const PayPalButtonModule = paypal.Button.driver('angular2',ngCore);

Step 8 imports: [ PayPalButtonModule ] add this into imports
Step 9 ng generate component  PaypalcheckoutComponent
Step 10. 