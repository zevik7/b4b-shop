import { createSelector } from 'reselect'

export const bicyclesSelector = (state) => state.bicycles

export const bicycleSelectedSelector = (state) => state.bicycles.selected

export const checkoutsSelector = (state) => state.checkouts;

export const checkoutSelectedSelector = (state) => state.checkouts.selected;

export const shopSelector = (state) => state.shop;