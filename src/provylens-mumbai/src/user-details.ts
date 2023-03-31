import {
  eventDeleteUser as eventDeleteUserEvent,
  eventUserData as eventUserDataEvent
} from "../generated/userDetails/userDetails"
import { eventDeleteUser, eventUserData } from "../generated/schema"

export function handleeventDeleteUser(event: eventDeleteUserEvent): void {
  let entity = new eventDeleteUser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeventUserData(event: eventUserDataEvent): void {
  let entity = new eventUserData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address
  entity._type = event.params._type
  entity._name = event.params._name
  entity._physicalAddress = event.params._physicalAddress
  entity._image = event.params._image
  entity._timeUpdated = event.params._timeUpdated

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
