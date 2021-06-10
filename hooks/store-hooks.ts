import { RootState, AppDispatch } from './../App';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"; 

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector; 
export const useTypedDispatch = () => useDispatch<AppDispatch>()