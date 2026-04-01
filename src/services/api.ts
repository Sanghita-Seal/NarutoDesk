const BASE_URL= 'https://dattebayo-api.onrender.com';
export const getGenericData = async (endpoint: string, ) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}`
    );

    const text = await response.text();
    console.log("RAW RESPONSE:", text);

    const data = JSON.parse(text); 

    return data[endpoint];

  } catch (error) {
    console.error(`Error fetching ${endpoint}: `, error);
    throw error;
  }
};
