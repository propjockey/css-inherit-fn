const normalizeWhitespace = input => {
  return input
    .replace(/^\s*|\s*$/g, "")
    .replace(/^\s*|\s*$/gm, "")
    .replace(/(?:\r?\n)+/g, " ")
    .replace(/\s*([{}])\s*/g, "$1")
    .replace(/\s*--/g, "--")
}

exports.normalizeWhitespace = normalizeWhitespace
