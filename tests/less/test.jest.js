const less = require("less")
const fs = require("fs")
const helpers = require("../helpers.js")
const normalizeWhitespace = helpers.normalizeWhitespace
const expected = normalizeWhitespace(fs.readFileSync("./tests/test.compiled.css", "utf8"))

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
  it("compiles to the correct CSS", async () => {
    return less.render(
      fs.readFileSync("./tests/less/test.less", "utf8")
    ).then(output => {
      const built = output.css.toString()
      expect(normalizeWhitespace(built)).toEqual(expected)
    })
  })
})
