const getPlaces = () => {
    const existingPlaces = sessionStorage.getItem('id');
    if (existingPlaces) {
        return existingPlaces; 
    } else {
        const newPlace = 'course-' + new Date().getTime();
        sessionStorage.setItem('id', newPlace)
        return newPlace;
    }
}

const getDataKey = () => {
    const id = getPlaces();
    return `travel-guru/carts/${id}`
}

// push to local storage: a temporary place for database
export const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}

export const addToDatabaseCart = (key, count) => {
    const currentCart = getDatabaseCart();
    currentCart[key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

export const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    delete currentCart[key];
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

export const processOrder = (cart) => {
    localStorage.removeItem(getDataKey());
}