import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  eventAddDistributorProduct,
  eventDeleteDistributorProduct,
  eventUpdateDistributorProductUints
} from "../generated/distributorProduct/distributorProduct"

export function createeventAddDistributorProductEvent(
  _dpId: BigInt,
  _manufacturerAddress: Array<Address>,
  _mdId: Array<BigInt>,
  _name: Bytes,
  _description: Bytes,
  _unit: BigInt,
  _price: BigInt,
  _date: BigInt,
  _expiryDate: BigInt
): eventAddDistributorProduct {
  let eventAddDistributorProductEvent = changetype<eventAddDistributorProduct>(
    newMockEvent()
  )

  eventAddDistributorProductEvent.parameters = new Array()

  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_manufacturerAddress",
      ethereum.Value.fromAddressArray(_manufacturerAddress)
    )
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_mdId",
      ethereum.Value.fromUnsignedBigIntArray(_mdId)
    )
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromBytes(_description)
    )
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_unit", ethereum.Value.fromUnsignedBigInt(_unit))
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_date", ethereum.Value.fromUnsignedBigInt(_date))
  )
  eventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )

  return eventAddDistributorProductEvent
}

export function createeventDeleteDistributorProductEvent(
  _dpId: BigInt
): eventDeleteDistributorProduct {
  let eventDeleteDistributorProductEvent = changetype<
    eventDeleteDistributorProduct
  >(newMockEvent())

  eventDeleteDistributorProductEvent.parameters = new Array()

  eventDeleteDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )

  return eventDeleteDistributorProductEvent
}

export function createeventUpdateDistributorProductUintsEvent(
  _dpId: BigInt,
  _quantity: BigInt
): eventUpdateDistributorProductUints {
  let eventUpdateDistributorProductUintsEvent = changetype<
    eventUpdateDistributorProductUints
  >(newMockEvent())

  eventUpdateDistributorProductUintsEvent.parameters = new Array()

  eventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  eventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam(
      "_quantity",
      ethereum.Value.fromUnsignedBigInt(_quantity)
    )
  )

  return eventUpdateDistributorProductUintsEvent
}
