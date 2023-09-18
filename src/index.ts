function endlessLoop (ms: number) {
  const d1 = new Date().getTime()
  while (true) {
    const d2 = new Date().getTime()
    if (d2 - d1 >= ms) break
  }
}

export { endlessLoop }
