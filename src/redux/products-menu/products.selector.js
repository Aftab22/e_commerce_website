import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectProductSections = createSelector(
  [selectProducts],
  (products) => products.sections
);
