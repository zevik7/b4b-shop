import { createSelector } from 'reselect'

export const bicyclesSelector = (state) => state.bicycles

export const bicycleSelectedSelector = (state) => state.bicycles.selected
