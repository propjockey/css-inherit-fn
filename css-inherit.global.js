/**
 * css-inherit-fn
 * BSD 2-Clause License
 * Copyright (c) Jane Ori, PropJockey, 2022
 */

const cssInherit = (() => {
  const buildDepthSelector = (evenOdd, sel, maxDepth) => {
    let full = ""
    let selX = sel
    let i = 1
    if (evenOdd === "even") {
      selX = `${selX} ${sel}`
      i = 2
    }
    while (i <= maxDepth) {
      full += `${selX}:not(${selX} ${sel}), `
      selX += ` ${sel} ${sel}`
      i += 2
    }
    return `:where(${full.substring(0, full.length - 2)})`
  }

  const inheritchainswap = (ioA, ioB, assignments) => {
    let output = ""
    const arglen = assignments.length
    let i = 0
    while (i < arglen) {
      const assignment = assignments[i]
      const varName = assignment.replace(/([^:]+):.*/, "$1")
      const val = assignment.replace(/[^:]+:\s*(.*)/, "$1").replace(/inherit\(--/g, `var(--${ioA}`)
      output += `\n  ${varName}: ${val};`
      output += `\n  ${varName.replace("--", "--" + ioB)}: var(${varName});`
      i++
    }
    return output
  }

  const buildInherit = (sel, maxDepth, ...assignments) => `\
${buildDepthSelector("odd", sel, maxDepth)} {\
${inheritchainswap("io1_", "io2_", assignments)}
}
${buildDepthSelector("even", sel, maxDepth)} {\
${inheritchainswap("io2_", "io1_", assignments)}
}`

  return {
    buildDepthSelector,
    buildInherit
  }
})()
