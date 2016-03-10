function correctImageSize(str, size) {
  return str.replace(/\?width=(\d+)/, '?width=' + size)
}

export default correctImageSize
