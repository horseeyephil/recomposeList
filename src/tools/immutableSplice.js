const immutableSplice = (list, deleteIndex) => {
  return list.slice(0, deleteIndex).concat(list.slice(deleteIndex+1))
}

export default immutableSplice