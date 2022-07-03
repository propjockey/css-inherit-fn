const fs = require("fs")
const less = require("less")

describe("_less-inherit.less", () => {
  it("does not output CSS by itself", async () => {
    return less.render(
      fs.readFileSync("./_less-inherit.less", "utf8")
    ).then(output => {
      expect(output.css.toString()).toEqual("")
    })
  })
})

describe("test.less", () => {
  it("compiles to CSS", () => {
    return less.render(
      fs.readFileSync("./tests/less/test.less", "utf8")
    ).then(output => {
      const built = output.css.toString()
      console.log(built)
      // expect(output.css.toString()).toEqual("")
    })
  })
})
