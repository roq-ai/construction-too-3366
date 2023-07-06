import { RentalOrderInterface } from 'interfaces/rental-order';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  outlet_id?: string;
  created_at?: any;
  updated_at?: any;
  rental_order?: RentalOrderInterface[];
  outlet?: OutletInterface;
  _count?: {
    rental_order?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  outlet_id?: string;
}
