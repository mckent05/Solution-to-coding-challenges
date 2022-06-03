function sockMerchant(n, ar) {
   let socks={}
   let pair=''
   let count=0
   for (var x of ar){
        if(socks.hasOwnProperty(x)==false){
            socks[x]=1
        else{
            socks[x] =socks[x] + 1
        }  
    }
    for(var x in socks){
        pair= Math.floor(socks[x]/2)
        count=count + pair
    }
    return count   
}
