import React, { useState } from 'react'
import { Data, Options, Network } from 'vis';
import { dataInit, optionsInit } from './../config/canvas';

const useCanvas = () => {
    const [selectedNode, setSelectedNode] = useState<string>('0');
    const [data, setData] = useState<Data>(dataInit);
    const [options, setOptions] = useState<Options>(optionsInit);
    const [network, setNetwork] = useState<Network>();
    const [action, setAction] = useState('')

    return {
        selectedNode,
        data,
        options,
        network,
        action,
        setSelectedNode,
        setData,
        setOptions,
        setNetwork,
        setAction
    }
}

export default useCanvas;