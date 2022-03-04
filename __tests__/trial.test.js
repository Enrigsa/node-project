const {year, port} = require ('../trial.js');

test("App.js test", () =>{
    expect(year).toBe(2022)
})

test("App.js test", () =>{
    expect(port).toBe(3000)
})