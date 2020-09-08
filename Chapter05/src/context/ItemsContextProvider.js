import React from 'react';

export const ItemsContext = React.createContext();

const initialValue = {
  items: [],
  loading: true,
  error: '',
};

const reducer = (value, action) => {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return {
        ...value,
        items: action.payload,
        loading: false,
      };
    case 'GET_ITEMS_ERROR':
      return {
        ...value,
        items: [],
        loading: false,
        error: action.payload,
      };
    case 'ADD_ITEM_SUCCESS':
      return {
        ...value,
        items: [...value.items, action.payload],
        loading: false,
      };
    case 'ADD_ITEM_ERROR':
      return {
        ...value,
        loading: false,
        error: 'Something went wrong...',
      };
    default:
      return value;
  }
};

async function fetchData(dataSource) {
  try {
    const data = await fetch(dataSource);
    const dataJSON = await data.json();

    if (dataJSON) {
      return await { data: dataJSON, error: false };
    }
  } catch (error) {
    return { data: false, error: error.message };
  }
}

async function postData(dataSource, content) {
  try {
    const data = await fetch(dataSource, {
      method: 'POST',
      body: JSON.stringify(content),
    });
    const dataJSON = await data.json();

    if (dataJSON) {
      return await { data: dataJSON, error: false };
    }
  } catch (error) {
    return { data: false, error: error.message };
  }
}

const ItemsContextProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(reducer, initialValue);

  const getItemsRequest = async id => {
    const result = await fetchData(
      `https://my-json-server.typicode.com/pranayfpackt/-React-Projects/lists/${id}/items`,
    );

    if (result.data && result.data.length) {
      dispatch({ type: 'GET_ITEMS_SUCCESS', payload: result.data });
    } else {
      dispatch({ type: 'GET_ITEMS_ERROR', payload: result.error });
    }
  };

  const addItemRequest = async content => {
    const result = await postData(
      'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/lists',
      content,
    );

    if (result.data && result.data.hasOwnProperty('id')) {
      dispatch({ type: 'ADD_ITEM_SUCCESS', payload: content });
    } else {
      dispatch({ type: 'ADD_ITEM_ERROR' });
    }
  };

  return (
    <ItemsContext.Provider
      value={{ ...value, getItemsRequest, addItemRequest }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
