import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  eventDeleteUser,
  eventUserData
} from "../generated/userDetails/userDetails"

export function createeventDeleteUserEvent(_address: Address): eventDeleteUser {
  let eventDeleteUserEvent = changetype<eventDeleteUser>(newMockEvent())

  eventDeleteUserEvent.parameters = new Array()

  eventDeleteUserEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return eventDeleteUserEvent
}

export function createeventUserDataEvent(
  _address: Address,
  _type: i32,
  _name: Bytes,
  _physicalAddress: Bytes,
  _image: Bytes,
  _timeUpdated: BigInt
): eventUserData {
  let eventUserDataEvent = changetype<eventUserData>(newMockEvent())

  eventUserDataEvent.parameters = new Array()

  eventUserDataEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  eventUserDataEvent.parameters.push(
    new ethereum.EventParam(
      "_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type))
    )
  )
  eventUserDataEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  eventUserDataEvent.parameters.push(
    new ethereum.EventParam(
      "_physicalAddress",
      ethereum.Value.fromBytes(_physicalAddress)
    )
  )
  eventUserDataEvent.parameters.push(
    new ethereum.EventParam("_image", ethereum.Value.fromBytes(_image))
  )
  eventUserDataEvent.parameters.push(
    new ethereum.EventParam(
      "_timeUpdated",
      ethereum.Value.fromUnsignedBigInt(_timeUpdated)
    )
  )

  return eventUserDataEvent
}
