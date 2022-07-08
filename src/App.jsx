import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./features/Products/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div className="App">Hi</div>;
}

export default App;
