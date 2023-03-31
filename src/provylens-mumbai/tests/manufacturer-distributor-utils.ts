import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  manufacturerDistributoreventArrivalTime,
  eventManufacturerDistributorTransfer
} from "../generated/manufacturerDistributor/manufacturerDistributor"

export function createmanufacturerDistributoreventArrivalTimeEvent(
  _arrivalTime: BigInt
): manufacturerDistributoreventArrivalTime {
  let manufacturerDistributoreventArrivalTimeEvent = changetype<
    manufacturerDistributoreventArrivalTime
  >(newMockEvent())

  manufacturerDistributoreventArrivalTimeEvent.parameters = new Array()

  manufacturerDistributoreventArrivalTimeEvent.parameters.push(
    new ethereum.EventParam(
      "_arrivalTime",
      ethereum.Value.fromUnsignedBigInt(_arrivalTime)
    )
  )

  return manufacturerDistributoreventArrivalTimeEvent
}

export function createeventManufacturerDistributorTransferEvent(
  _mdId: BigInt,
  _mpId: BigInt,
  _manufacturerAddress: Address,
  _distributorAddress: Address,
  _dispatchTime: BigInt
): eventManufacturerDistributorTransfer {
  let eventManufacturerDistributorTransferEvent = changetype<
    eventManufacturerDistributorTransfer
  >(newMockEvent())

  eventManufacturerDistributorTransferEvent.parameters = new Array()

  eventManufacturerDistributorTransferEvent.parameters.push(
    new ethereum.EventParam("_mdId", ethereum.Value.fromUnsignedBigInt(_mdId))
  )
  eventManufacturerDistributorTransferEvent.parameters.push(
    new ethereum.EventParam("_mpId", ethereum.Value.fromUnsignedBigInt(_mpId))
  )
  eventManufacturerDistributorTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_manufacturerAddress",
      ethereum.Value.fromAddress(_manufacturerAddress)
    )
  )
  eventManufacturerDistributorTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_distributorAddress",
      ethereum.Value.fromAddress(_distributorAddress)
    )
  )
  eventManufacturerDistributorTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_dispatchTime",
      ethereum.Value.fromUnsignedBigInt(_dispatchTime)
    )
  )

  return eventManufacturerDistributorTransferEvent
}
