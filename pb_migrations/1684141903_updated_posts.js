migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9u5qi0a0hg0nydd")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9u5qi0a0hg0nydd")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
