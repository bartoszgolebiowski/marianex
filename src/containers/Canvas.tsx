
import React, { useRef, useEffect, useContext, useCallback } from 'react';
import { Network } from 'vis';

import { list } from '../config/menu';
import { funtions } from '../config/canvas';
import Context from '../context/Context';
import useCanvas from '../customHooks/useCanvas';

const Canvas = (props: any) => {
    const canvasRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const { selectedMenuItem } = useContext(Context);
    const {
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
    } = useCanvas();

    const selectNode = useCallback((params: any) => {
        funtions.find(({ name }) => name === action)?.function(data.nodes, data.edges, selectedNode, params.nodes[0]);
        const newNode = params.nodes[0] ===  selectedNode ? '' : params.nodes[0];
        setSelectedNode(newNode)
    }, [selectedNode])

    const keyEnets = useCallback((e: KeyboardEvent) => {
        console.log(e.key)
        setAction(e.key)
    }, [setAction])

    useEffect(() => {
        const network = new Network(canvasRef.current, data, options);
        setNetwork(network)
    }, [])

    useEffect(() => {
        // network?.off('oncontext')
        network?.off('selectNode')
        window.removeEventListener('keypress', keyEnets)

        // network?.on('oncontext', (params) => params.event.preventDefault())
        network?.on('selectNode', selectNode)
        window.addEventListener('keypress', keyEnets)

    }, [action, setAction, selectedNode, setSelectedNode])

    useEffect(() => {
        if (!network) return;

        network.off('click');
        network.on('click', (params: any) => {
            if ((params.nodes.length == 0) && (params.edges.length == 0) && selectedMenuItem !== '') {
                const updatedIds = data.nodes.add([{
                    id: data.nodes.length + 1,
                    label: `${list.find(list => list.id === selectedMenuItem)?.description} ${data.nodes.length}`,
                    x: params.pointer.canvas.x,
                    y: params.pointer.canvas.y,
                    image: list.find(list => list.id === selectedMenuItem)?.src,
                    shape: 'image'
                }]);
                network.selectNodes([updatedIds[0]]);
            }
        })
    }, [props])

    return (
        <div
            style={{ flex: 1, display: 'flex', border: '1px solid green' }}
            ref={canvasRef}>
        </div>
    )
}



export default Canvas;
