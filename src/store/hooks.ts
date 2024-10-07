import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/**
 * A typed version of the useDispatch hook for dispatching actions.
 *
 * @returns {AppDispatch} The dispatch function typed with AppDispatch.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * A typed version of the useSelector hook for selecting state.
 *
 * @returns {T} The state selected from the store.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
