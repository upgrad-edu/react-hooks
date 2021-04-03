

function add(a,b){
    return a +b;
}

test("Addition of two numbers",()=>{

    const actualResult = add(5,10);
    const expectedResult =15
    expect(actualResult).toBe(expectedResult);
})
