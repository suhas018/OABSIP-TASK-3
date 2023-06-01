const calculateTemp=()=>{
    const temp=document.getElementById("temp").value;
    const convert=document.getElementById("temp_diff");

    const val=convert.value;

    const celToFar=(cel)=>{
        let far=Math.round((cel*9/5)+32);
        return far;
    }

    const farToCel=(far)=>{
        let cel=Math.round((far-32)*5/9);
        return cel;
    }

    if(val=="cel"){
        let res =farToCel(temp);
        document.getElementById("result-container").innerHTML=`= ${res} ℃elcius`;
    }else{
        let res =celToFar(temp);
        document.getElementById("result-container").innerHTML=`= ${res} °Fahrenheit`;
    }
}