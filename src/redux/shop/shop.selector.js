import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItemsArray = createSelector([selectShopItems], (shop) =>
  Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (collectionsUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionsUrlParam]
  );
