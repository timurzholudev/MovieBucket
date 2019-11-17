import * as fromRoot from 'app/state'
import { HomeState } from './reducer'
import { createSelector, createFeatureSelector } from '@ngrx/store'

export interface State extends fromRoot.State {
    home: HomeState
}

const getHomeFeatureState = createFeatureSelector<HomeState>('home')

export const getShowGenre = createSelector(
    getHomeFeatureState,
    state => state.showGenre
);

export const getFilterList = createSelector(
    getHomeFeatureState,
    state => state.filterList
);