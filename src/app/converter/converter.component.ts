import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount: number;
  from: string = 'CAD';
  to: string = 'USD';
  rates: {[key: string]:number};


  convert(): number{
      return this.amount * this.rates[this.to]; 
  }

  loadRates(){
    this.service.getRates(this.from).subscribe( res => this.rates = res.rates )
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates)
  }

  onNumberChange(value)
  {
    this.amount = value;
    if(this.amount !== null)
    {
      return this.amount;
    }  
  }

  constructor(private service: ExchangeRatesService) {
   
   }

  ngOnInit(): void {
    this.loadRates()
    
  }

}
