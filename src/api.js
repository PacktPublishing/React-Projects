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

const Api = {
  fetchData,
  postData,
};

export { Api as default };
