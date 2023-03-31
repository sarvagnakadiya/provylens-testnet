import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  eventAddSupplierProduct,
  eventDeleteSupplierProduct,
  eventUpdateSupplierProductUints
} from "../generated/supplierProduct/supplierProduct"

export function createeventAddSupplierProductEvent(
  _spid: BigInt,
  _address: Address,
  _name: Bytes,
  _description: Bytes,
  _unit: BigInt,
  _price: BigInt,
  _date: BigInt,
  _expiryDate: BigInt,
  _timeAdded: BigInt
): eventAddSupplierProduct {
  let eventAddSupplierProductEvent = changetype<eventAddSupplierProduct>(
    newMockEvent()
  )

  eventAddSupplierProductEvent.parameters = new Array()

  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_spid", ethereum.Value.fromUnsignedBigInt(_spid))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromBytes(_description)
    )
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_unit", ethereum.Value.fromUnsignedBigInt(_unit))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_date", ethereum.Value.fromUnsignedBigInt(_date))
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )
  eventAddSupplierProductEvent.parameters.push(
    new ethereum.EventParam(
      "_timeAdded",
      ethereum.Value.fromUnsignedBigInt(_timeAdded)
    )
  )

  return eventAddSupplierProductEvent
}

export function createeventDeleteSupplierProductEvent(
  _spId: BigInt
): eventDeleteSupplierProduct {
  let eventDeleteSupplierProductEvent = changetype<eventDeleteSupplierProduct>(
    newMockEvent()
  )

  eventDeleteSupplierProductEvent.parameters = new Array()

  eventDeleteSupplierProductEvent.parameters.push(
    new ethereum.EventParam("_spId", ethereum.Value.fromUnsignedBigInt(_spId))
  )

  return eventDeleteSupplierProductEvent
}

export function createeventUpdateSupplierProductUintsEvent(
  _spId: BigInt,
  _quantity: BigInt
): eventUpdateSupplierProductUints {
  let eventUpdateSupplierProductUintsEvent = changetype<
    eventUpdateSupplierProductUints
  >(newMockEvent())

  eventUpdateSupplierProductUintsEvent.parameters = new Array()

  eventUpdateSupplierProductUintsEvent.parameters.push(
    new ethereum.EventParam("_spId", ethereum.Value.fromUnsignedBigInt(_spId))
  )
  eventUpdateSupplierProductUintsEvent.parameters.push(
    new ethereum.EventParam(
      "_quantity",
      ethereum.Value.fromUnsignedBigInt(_quantity)
    )
  )

  return eventUpdateSupplierProductUintsEvent
}
