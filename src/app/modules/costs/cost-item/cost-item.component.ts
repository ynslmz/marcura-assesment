import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseCurrency, CostItem, CostType, CostWithType } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss']
})
export class CostItemComponent implements OnInit, OnChanges {

  @Input() costItem!: CostItem;
  @Input() toCurrency!: BaseCurrency;
  @Input() baseCurrency!: BaseCurrency;
  isCollapsed = true;
  constructor() { }
  quoted!: CostWithType;
  screened!: CostWithType;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.costItem) {
      let costItem: CostItem = changes.costItem.currentValue;
      costItem.costs.forEach(cic => {
        switch (cic.type) {
          case CostType.Quoted:
            this.quoted = cic;
            break;
          case CostType.Screened:
            this.screened = cic;
            break;
          default:
            break;
        }
      }
      );
    }
  }

  ngOnInit(): void {
  }

  priceChanged(e: any) {
    console.log('price changed', e);
  }
}
