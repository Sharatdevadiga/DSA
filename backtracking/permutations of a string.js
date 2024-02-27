    find_permutation(S){
        let s= S.split("")
       const res = []
       
       function backTrack(start){
           if (start === s.length){
               res.push(s.join(""))
               return;
           }
           
           for(let i = start; i< s.length; i++){
               [s[i], s[start]] = [s[start], s[i]]
               backTrack(start+1);
               [s[i], s[start]] = [s[start], s[i]]
           }
       }
       
       backTrack(0)
       return res;
    }
