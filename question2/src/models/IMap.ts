export interface IMapMatch{
    path:string
    url:string
    isExact:boolean
    params:{
        [id:string]:string
    }
}

export interface ILocation{
    latitude:number|null
    longitude:number|null
}