import { useDispatch, useSelector } from "react-redux";
import { Store } from "./Stores";

type RootState = ReturnType<typeof Store.getState>;
type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()