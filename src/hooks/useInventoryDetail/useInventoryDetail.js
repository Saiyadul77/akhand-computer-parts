import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url=`https://secret-fjord-21413.herokuapp.com/service/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])
    return [inventory];
};

export default useInventoryDetail;