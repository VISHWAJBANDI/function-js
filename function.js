function studentName(){
    console.log("vishwaj")
}
studentName()
// o/p: "vishwaj"


function StudentsurName(){
    console.log("bandi")
}
StudentsurName()
// o/p:"bandi"

// the above two functions were created with function name with studentName, studentsurName firstly call stack check wheather js code is entered or not then js code went to FEC( function exceution contest),checks the js code and firstly fec send the anonymous to studentname the it will print the output as "vishwaj" when function is closed with '}' then fec will be stopped here same as gec again checks the surname and sent to memory and same process function will be stopped were the "}" is ended then after fec checks wheather functs are there or not if nt found then it will vanished.