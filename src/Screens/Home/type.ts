import { Source } from "react-native-fast-image";

export interface IContent{
id?: number |string,
logo?:string,
mainImage?:string,
subTitle?:string,
text?:string,
thumbNailImage?:string
title?:string ,
userName?:string

}

export interface IToken{
    token:"",
}

export interface ITokenAPiResponse{
    data:IToken,
    status:number
}
export interface IContentAPiResponse{
    data:{
      content:  IContent
    },
    status:number
}