import { DataSet, Data, Options, Edge, Node } from "vis";

type CanvasFunction = {
    name: string,
    function: (nodes: DataSet<Node>, edges: DataSet<Edge>, currentNode: string, targetNode: string) => void,
}

export const nodes = new DataSet([
    {
        id: 0,
        label: 'Robot 1',
        image: '/menuIcons/robot.svg',
        shape: 'image',
        x: 100,
        y: 200,

    }, {
        id: 1,
        label: 'Worker 1',
        image: '/menuIcons/employee.svg',
        shape: 'image',
        x: 200,
        y: 300,
    }, {
        id: 2,
        label: 'Station 1',
        image: '/menuIcons/gas-station.svg',
        shape: 'image',
        x: 300,
        y: 400,
    }, {
        id: 3,
        label: 'Drawer 1',
        image: '/menuIcons/drawer.svg',
        shape: 'image',
        x: 400,
        y: 500,
    }, {
        id: 4,
        label: 'Behalter 1',
        image: '/menuIcons/container.svg',
        shape: 'image',
        x: 500,
        y: 600,
    },
    {
        id: 5,
        label: 'Conwejor 1',
        image: '/menuIcons/conveyor.svg',
        shape: 'image',
        x: 600,
        y: 700,
    }
]);

export const edges = new DataSet([
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
]);

export const dataInit: Data = {
    nodes: nodes,
    edges: edges
};

export const optionsInit: Options = {
    autoResize: false,
    edges: {
        arrows: 'to',
        color: 'red',
        smooth: false,
    },
    physics: false
};

export const funtions: CanvasFunction[] = [
    {
        name: 'q',
        function: (nodes: DataSet<Node>, edges: DataSet<Edge>, currentNode: string, targetNode: string): void => {
            edges.add({
                from: currentNode,
                to: targetNode
            })
        }
    }
    ,
    {
        name: 'w',
        function: (nodes: DataSet<Node>, edges: DataSet<Edge>, currentNode: string, targetNode: string): void => {
            console.log(nodes, edges, currentNode, targetNode)
            console.log('w')
        }
    },
]