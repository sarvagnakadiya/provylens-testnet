import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  eventArrivalTime,
  eventSupplierManufacturerTransfer
} from "../generated/supplierManufacturer/supplierManufacturer"

export function createeventArrivalTimeEvent(
  _arrivalTime: BigInt
): eventArrivalTime {
  let eventArrivalTimeEvent = changetype<eventArrivalTime>(newMockEvent())

  eventArrivalTimeEvent.parameters = new Array()

  eventArrivalTimeEvent.parameters.push(
    new ethereum.EventParam(
      "_arrivalTime",
      ethereum.Value.fromUnsignedBigInt(_arrivalTime)
    )
  )

  return eventArrivalTimeEvent
}

export function createeventSupplierManufacturerTransferEvent(
  _smId: BigInt,
  _spId: BigInt,
  _supplierAddress: Address,
  _manufacturerAddress: Address,
  _dispatchTime: BigInt
): eventSupplierManufacturerTransfer {
  let eventSupplierManufacturerTransferEvent = changetype<
    eventSupplierManufacturerTransfer
  >(newMockEvent())

  eventSupplierManufacturerTransferEvent.parameters = new Array()

  eventSupplierManufacturerTransferEvent.parameters.push(
    new ethereum.EventParam("_smId", ethereum.Value.fromUnsignedBigInt(_smId))
  )
  eventSupplierManufacturerTransferEvent.parameters.push(
    new ethereum.EventParam("_spId", ethereum.Value.fromUnsignedBigInt(_spId))
  )
  eventSupplierManufacturerTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_supplierAddress",
      ethereum.Value.fromAddress(_supplierAddress)
    )
  )
  eventSupplierManufacturerTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_manufacturerAddress",
      ethereum.Value.fromAddress(_manufacturerAddress)
    )
  )
  eventSupplierManufacturerTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_dispatchTime",
      ethereum.Value.fromUnsignedBigInt(_dispatchTime)
    )
  )

  return eventSupplierManufacturerTransferEvent
}
