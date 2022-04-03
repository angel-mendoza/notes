import React from 'react';


function useLocalStorage (itenName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
        const localStorageItem = localStorage.getItem(itenName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itenName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem)
        setLoading(false)
        setError(false)
    }, 5000);
  });

  const saveItem = (newItem) => {
    const stringItem = JSON.stringify(newItem)
    localStorage.setItem(itenName, stringItem);
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export default useLocalStorage;