import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
    )

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    shopCollections => Object.keys(shopCollections).map(key => shopCollections[key])
)

export const selectShopCollection = (collectionIdFromUrl) =>
    createSelector(
        [selectShopCollections],
        (collections) => collections[collectionIdFromUrl]
        )
