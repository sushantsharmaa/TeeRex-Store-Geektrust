import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./features/Products/productSlice";
import Products from "./pages/Products/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Products />
    </div>
  );
}

export default App;
