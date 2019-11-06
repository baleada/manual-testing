const collections = {}

export default function useSymbol (collection, symbol) {
  collections.hasOwnProperty(collection) || (collections[collection] = {})
  collections[collection].hasOwnProperty(symbol) || (collections[collection][symbol] = Symbol(symbol))

  return collections[collection][symbol]
}
