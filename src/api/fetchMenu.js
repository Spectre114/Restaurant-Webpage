function getrandomint(min, max) {
  min = Math.ceil(min);
  math = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export async function fetchMealsByType(type) {
  if (type) {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/meal-type/${type}?limit=6`,
        {
          method: "GET",
        }
      );
      if (response?.status === 200) {
        console.log(response);
        let data = await response.json();
        console.log(data);
        return data;
      } else {
        console.log(response);
        return null;
      }
    } catch (error) {
      console.log(error?.message);
      return null;
    }
  }
}
