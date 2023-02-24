import React from "react";
// import './styles.css';
import CarousalData from "../utils/CarousalData.json"

// const items = CarousalData
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = () => {
  const { items, requestSort, sortConfig } = useSortableData(CarousalData);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
      <div>adsfadfdProducts</div>
      <table className="table table-responsive table-hover">
        <thead>
          <tr>
            <th className="w-50 cursor-pointer">
                <span onClick={() => requestSort("title")} className={getClassNamesFor("title")}>Name</span>
            </th>
            <th className="w-25">
                <span onClick={() => requestSort("price")} className={getClassNamesFor("price")}>Price</span>
            </th>
            <th className="w-25">
                <span onClick={() => requestSort("stocks")} className={getClassNamesFor("stocks")}>Stock</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ?(

            items.map((item) => (
              <tr key={item.id}>
                <td >🥣 {item.title}</td>
                <td>{item.price}</td>
                <td>{item.stocks} Unit</td>
              </tr>
            ))
          ): (
            <h1>No data!</h1>
          )
          
        }
        </tbody>
      </table>
    </>
  );
};

export default function Sorting() {
  return (
    <>
      <ProductTable
        products={[ ]}
      />
    </>
  );
}
