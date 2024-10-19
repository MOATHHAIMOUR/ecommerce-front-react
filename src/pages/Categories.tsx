import actGetCategories from "@store/categories/act/actGetCategories";
import { useAppDispatch } from "@store/hooks";
import { useEffect } from "react";

export default function Categories() {
  //const { status, records, error } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetCategories());
  }, []);

  return <div className="bg-red-400">Categories</div>;
}
