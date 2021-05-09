export interface IPeopleInformation{
    "_id": string
    "picture": string
    "name": {
      "first": string,
      "last": string
    },
    "email": string
    "location": {
      "latitude": number
      "longitude": number
    }
}

export interface IPeopleProps{
  id:string
  firstName: string
  lastName: string
  picture: string
  email?: string
  changeFindFriend?:()=>void
}