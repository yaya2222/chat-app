

export type ChatType = {
    _id: string,
    chatName: string
}

export type serverErrorType = {
    message: string,
    stack: null | string
}

export type userType = {
    _id:string,
    name:string,
    email:string,
    pic:string,
    token:string
}