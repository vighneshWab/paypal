import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypalcheckout',
  templateUrl: './paypalcheckout.component.html',
  styleUrls: ['./paypalcheckout.component.css']
})
export class PaypalcheckoutComponent implements OnInit {



  paypalObject: Object
  token: any

  constructor() {

  }
  ngOnInit() {

    this.paypalObject = {
      env: 'production',
      client: {
        production: 'AaJQwV6gGpjn87ayvUf7vk87-TlJuejRaILdmtxaag6aVGw2Id5D1SvlM1F75CACt33gEI3uJf3xnf8D',
      },
      payment: function (data, actions) {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: { total: '0.01', currency: 'USD' }
              }
            ]
          }
        });
      },
      onAuthorize: function (data, actions) {
        console.log("onAuthorize");
        return actions.payment.execute().then(function (response) {

          // this.token = response;
          console.log('token response', JSON.stringify(response));
        });
      },
      onCancel: function (data) {
        console.log('The payment was cancelled!');
      }


    }


  }




}
