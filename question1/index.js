const swappArrayElements = (arr,index1,index2) =>{
    return [arr[index2],arr[index1]];
};

const swapp = swappArrayElements([3,6],0,1);
console.log(swapp)