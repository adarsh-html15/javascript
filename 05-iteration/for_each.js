const coding=["js","ruby","cpp","java","python","c"]

coding.forEach( function (item){
        console.log(item);
} )

coding.forEach(  (val) =>{
    console.log(`using arrow fun we are writing ${val}`)
})

function printMe(lan){
   console.log(lan);

}
coding.forEach(printMe)


const myCoding =[
    {
        languageNmae: "javascript",
        fileName:"js"
    }  , 
    {
        languageNmae: "python",
        fileName:"pytonFile"
    }
    ,
    {
        languageNmae: "java",
        fileName:"javafile"
    }
    ,
    {
        languageNmae: "javascript",
        fileName:"js"
    }
]
myCoding.forEach(function (language){
    console.log(language);
    console.log(language.languageNmae);
})