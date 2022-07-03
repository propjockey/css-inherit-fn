// cheers https://obyford.com/posts/testing-sass-with-jest/
const util = require("util")
const sass = require("node-sass")
const sassRender = util.promisify(sass.render)

const render = (options) => {
  return sassRender({
    // Where node-sass should look for files when you use @import
    includePaths: ["./"],

    // Using a compact output style allows you to use concise "expected" CSS
    outputStyle: "compact",

    // Merge in any other options you pass when calling render
    ...options
  })
}

describe("_sass-inherit.scss", () => {
  it("does not output CSS by itself", async () => {
    return render({
      file: "./_sass-inherit.scss"
    }).then(output => {
      expect(output.css.toString()).toEqual("")
    })
  })
})

describe("test.scss", () => {
  it("compiles to CSS", () => {
    return render({
      file: "./tests/sass/test.scss"
    }).then(output => {
      const built = output.css.toString()
      console.log(built)
      // expect(output.css.toString()).toEqual("")
    })
  })
})
