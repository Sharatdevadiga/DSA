// approach1
var countSegments = function(s) {
    if(!s) return 0;
    s = s.trim();
    let segment = 0

    let counter = s.split(" ")
    
    for(let entry of counter){
        if(entry == null || entry == ""){
            continue
        }
        segment+=1;
    }
    return segment;

};

// approach2
var countSegments = function(s) {
    let n = s.length;
    if(n === 0) return 0;
    let count = 0;
    let i = 0;

    while(i< n){
        while(i<n && s[i] ===" "){
            i+=1;
        }

        if(i >=n)
            return count;
        
        count+=1;

        while(i< n && s[i] !==" "){
            i+=1;
        }
    }
    return count;

};
