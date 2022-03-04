const {port} = require ('../app.js');

test("App.js test", async () =>{
    expect(port).toBe("4000" || "3000")
})