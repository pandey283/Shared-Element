export const getFirstCharFromString=(data:string)=>{
  return data.split(" ").map(item=>item.charAt(0).toUpperCase()).join("")

}