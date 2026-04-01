const BASE_URL= 'https://dattebayo-api.onrender.com';
export const getGenericData = async (endpoint: string, ) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}`
    );

    const text = await response.text(); // 👈 IMPORTANT

    console.log("RAW RESPONSE:", text);

    const data = JSON.parse(text); // 👈 parse manually

    return data[endpoint];

  } catch (error) {
    console.error(`Error fetching ${endpoint}: `, error);
    throw error;
  }
};
