import * as AuthActions from './auth';
import * as CategoriesActions from './categories';
import * as ProductsActions from './products';
import * as VendorActions from './vendor';
import * as MeasurementActions from './measurement';

export const ActionCreators = Object.assign(
    {},
    AuthActions,
    CategoriesActions,
    ProductsActions,
    VendorActions,
    MeasurementActions
);
