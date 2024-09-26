/**
 * Generic function to fetch data from a given url
 * @param {string} url 
 * @returns 
 */
const getData = async (url) => {
    try {
        const res = await fetch(url);
        const items = await res.json();
        return items;
    } catch (error) {
        return {
            error,
        };
    }
}
/**
 * Function to load appointments
 * @returns {Promise<{appointments: any[]}>}
 */
export const load = async () => {
    // fetch appointments urls
    const appUrls = await getData(`http://localhost:3012/api/v1/appointments/`);
    const appUrlsData = appUrls.data;
    
    // setup the promises
    const promises = appUrlsData.map((url) => getData(`http://localhost:3012/api/v1${url}`));

    // fetch all appointments
    try {
        const appointments = await Promise.all(promises);
        return { appointments };
    } catch (error) {
        console.log('🐮', error);
        return { error };
    }
};
