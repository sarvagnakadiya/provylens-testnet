import {
  eventArrivalTime as eventArrivalTimeEvent,
  eventSupplierManufacturerTransfer as eventSupplierManufacturerTransferEvent
} from "../generated/supplierManufacturer/supplierManufacturer"
import {
  eventArrivalTime,
  eventSupplierManufacturerTransfer
} from "../generated/schema"

export function handleeventArrivalTime(event: eventArrivalTimeEvent): void {
  let entity = new eventArrivalTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arrivalTime = event.params._arrivalTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeventSupplierManufacturerTransfer(
  event: eventSupplierManufacturerTransferEvent
): void {
  let entity = new eventSupplierManufacturerTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._smId = event.params._smId
  entity._spId = event.params._spId
  entity._supplierAddress = event.params._supplierAddress
  entity._manufacturerAddress = event.params._manufacturerAddress
  entity._dispatchTime = event.params._dispatchTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
