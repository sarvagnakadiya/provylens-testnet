import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  eventAddManufacturerProduct,
  eventDeleteManufacturerProduct,
  eventUpdateManufacturerProductUints
} from "../generated/manufacturerProduct/manufacturerProduct"

export function createeventAddManufacturerProductEvent(
  _mpId: BigInt,
  _supplierAddress: Array<Address>,
  _smId: Array<BigInt>,
  _name: Bytes,
  _description: Bytes,
  _unit: BigInt,
  _price: BigInt,
  _date: BigInt,
  _expiryDate: BigInt
): eventAddManufacturerProduct {
  let eventAddManufacturerProductEvent = changetype<
    eventAddManufacturerProduct
  >(newMockEvent())

  eventAddManufacturerProductEvent.parameters = new Array()

  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_mpId", ethereum.Value.fromUnsignedBigInt(_mpId))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_supplierAddress",
      ethereum.Value.fromAddressArray(_supplierAddress)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_smId",
      ethereum.Value.fromUnsignedBigIntArray(_smId)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromBytes(_description)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_unit", ethereum.Value.fromUnsignedBigInt(_unit))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_date", ethereum.Value.fromUnsignedBigInt(_date))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )

  return eventAddManufacturerProductEvent
}

export function createeventDeleteManufacturerProductEvent(
  _mpId: BigInt
): eventDeleteManufacturerProduct {
  let eventDeleteManufacturerProductEvent = changetype<
    eventDeleteManufacturerProduct
  >(newMockEvent())

  eventDeleteManufacturerProductEvent.parameters = new Array()

  eventDeleteManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_mpId", ethereum.Value.fromUnsignedBigInt(_mpId))
  )

  return eventDeleteManufacturerProductEvent
}

export function createeventUpdateManufacturerProductUintsEvent(
  _dpId: BigInt,
  _quantity: BigInt
): eventUpdateManufacturerProductUints {
  let eventUpdateManufacturerProductUintsEvent = changetype<
    eventUpdateManufacturerProductUints
  >(newMockEvent())

  eventUpdateManufacturerProductUintsEvent.parameters = new Array()

  eventUpdateManufacturerProductUintsEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  eventUpdateManufacturerProductUintsEvent.parameters.push(
    new ethereum.EventParam(
      "_quantity",
      ethereum.Value.fromUnsignedBigInt(_quantity)
    )
  )

  return eventUpdateManufacturerProductUintsEvent
}
