export type MenuItem = {
    id: string,
    src: string,
    description: string
}

export const list: MenuItem[] = [
    {
        id: '0',
        src: '/menuIcons/robot.svg',
        description: 'Robot'
    }, {
        id: '1',
        src: '/menuIcons/employee.svg',
        description: 'Worker'
    }, {
        id: '2',
        src: '/menuIcons/gas-station.svg',
        description: 'Station'
    }, {
        id: '3',
        src: '/menuIcons/drawer.svg',
        description: 'Drawer'
    }, {
        id: '4',
        src: '/menuIcons/container.svg',
        description: 'Behalter'
    }, {
        id: '5',
        src: '/menuIcons/conveyor.svg',
        description: 'Conwejor'
    },
]
