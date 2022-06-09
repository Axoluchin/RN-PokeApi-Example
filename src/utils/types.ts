export interface Pokemon {
    id: number,
    name: string,
    weight: number,
    height: number,
    sprites: {
        front_default: string,
        back_default: string
    }
}

export interface DataProps {
    title: string,
    value: string | number
}