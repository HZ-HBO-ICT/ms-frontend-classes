export const load = async (serverLoadEvent) => {
    try {
        const { fetch } = serverLoadEvent;
        const res = await fetch(`https://appointments-fe6c.onrender.com/api/v1/appointments/`);
        const items = await res.json();
        return { items };
    } catch (error) {
        return {
            error,
        };
    }
};
