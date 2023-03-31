import {
  eventAddSupplierProduct as eventAddSupplierProductEvent,
  eventDeleteSupplierProduct as eventDeleteSupplierProductEvent,
  eventUpdateSupplierProductUints as eventUpdateSupplierProductUintsEvent
} from "../generated/supplierProduct/supplierProduct"
import {
  eventAddSupplierProduct,
  eventDeleteSupplierProduct,
  eventUpdateSupplierProductUints
} from "../generated/schema"

export function handleeventAddSupplierProduct(
  event: eventAddSupplierProductEvent
): void {
  let entity = new eventAddSupplierProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spid = event.params._spid
  entity._address = event.params._address
  entity._name = event.params._name
  entity._description = event.params._description
  entity._unit = event.params._unit
  entity._price = event.params._price
  entity._date = event.params._date
  entity._expiryDate = event.params._expiryDate
  entity._timeAdded = event.params._timeAdded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeventDeleteSupplierProduct(
  event: eventDeleteSupplierProductEvent
): void {
  let entity = new eventDeleteSupplierProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spId = event.params._spId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeventUpdateSupplierProductUints(
  event: eventUpdateSupplierProductUintsEvent
): void {
  let entity = new eventUpdateSupplierProductUints(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spId = event.params._spId
  entity._quantity = event.params._quantity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
