import {
  manufacturerDistributoreventArrivalTime as manufacturerDistributoreventArrivalTimeEvent,
  eventManufacturerDistributorTransfer as eventManufacturerDistributorTransferEvent
} from "../generated/manufacturerDistributor/manufacturerDistributor"
import {
  manufacturerDistributoreventArrivalTime,
  eventManufacturerDistributorTransfer
} from "../generated/schema"

export function handlemanufacturerDistributoreventArrivalTime(
  event: manufacturerDistributoreventArrivalTimeEvent
): void {
  let entity = new manufacturerDistributoreventArrivalTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arrivalTime = event.params._arrivalTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeventManufacturerDistributorTransfer(
  event: eventManufacturerDistributorTransferEvent
): void {
  let entity = new eventManufacturerDistributorTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._mdId = event.params._mdId
  entity._mpId = event.params._mpId
  entity._manufacturerAddress = event.params._manufacturerAddress
  entity._distributorAddress = event.params._distributorAddress
  entity._dispatchTime = event.params._dispatchTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
