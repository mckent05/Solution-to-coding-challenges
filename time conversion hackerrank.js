function timeConversion(s) {
    // Write your code here
    
    let time=s.includes('PM')
    let p=s.split(':')
    let hour=parseInt(p[0])
    let newHour
    let result
    
    
    if(time){
        if (hour < 12){
            newHour= hour + 12
            p.splice(0,1,newHour.toString())
            result=p.join(':')
            result=result.replace('PM','')
            
        }
        else{
            result=s.replace('PM','')
            
        }
         
       
     
    }
    if(!time){
        if (hour ==12){
            result=s.replace(hour,'00')
            result=result.replace('AM','')
            
        }
        else{
            result=s.replace('AM','')
        }
        
       
    }
    return result
}
