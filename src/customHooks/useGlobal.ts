import React, { useState } from 'react';
import { defaultValue } from '../config/globalState';

const useGlobal = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(defaultValue.selectedMenuItem);

    return {
        selectedMenuItem,
        setSelectedMenuItem
    }
}

export default useGlobal;