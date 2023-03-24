import React from "react";

const { Provider, Consumer } = React.createContext();

function ItemsContextProvider(props) {
  const [items, setItems] = React.useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );

  // React.useEffect(() => {
  //   const url = "https://fakestoreapi.com/products/";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) =>
  //       localStorage.setItem(
  //         "items",
  //         JSON.stringify(data.map((obj) => ({ ...obj, count: 1 })))
  //       )
  //     )
  //     .catch((err) => console.log("Unable to fetch"));
  // }, []);

  return (
    <Provider value={{ items: items, setItems: setItems }}>
      {props.children}
    </Provider>
  );
}

export { ItemsContextProvider, Consumer as ItemsContextConsumer };
