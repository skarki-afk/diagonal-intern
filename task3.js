const displacement = (n,m) =>{
    let speed = []
    let minTime = null
    if(m>0 && m<4){
        speed = [2,3,4,5]
    }
    else if(m>3 && m<6){
        speed = [1,2,3,10]
    }
    else{
        speed = [3,1,1,4]
    }
    
    if(n===0){
        minTime = 0
    }
    else if (m>n){
        minTime = (m-n)*speed[0] + speed[1] + speed[2] + n*speed[0] + speed[1]
    }
    else if (n>m && n<=4){
        minTime = n * speed[3]
    }
    else if (n>m){
        minTime = (n-m)*speed[3] + speed[1] + speed[2] + m*speed[0] + speed[1]
    }
    else if (m=n){
        minTime = speed[1] + speed[2] + m*speed[0] + speed[1]
    }
    console.log(minTime)
    console.log(speed, n , m)
}

displacement(3,2)