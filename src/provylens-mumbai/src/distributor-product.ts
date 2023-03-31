import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  eventAddDistributorProduct as eventAddDistributorProductEvent,
  eventDeleteDistributorProduct as eventDeleteDistributorProductEvent,
  eventUpdateDistributorProductUints as eventUpdateDistributorProductUintsEvent,
} from "../generated/distributorProduct/distributorProduct";
import {
  eventAddDistributorProduct,
  eventDeleteDistributorProduct,
  eventUpdateDistributorProductUints,
} from "../generated/schema";

export function handleeventAddDistributorProduct(
  event: eventAddDistributorProductEvent
): void {
  let entity = new eventAddDistributorProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._dpId = event.params._dpId;
  // entity._manufacturerAddress = event.params._manufacturerAddress
  // entity._mdId = event.params._mdId
  entity._manufacturerAddress = changetype<Bytes[]>(
    event.params._manufacturerAddress
  );
  entity._mdId = changetype<BigInt[]>(event.params._mdId);
  entity._name = event.params._name;
  entity._description = event.params._description;
  entity._unit = event.params._unit;
  entity._price = event.params._price;
  entity._date = event.params._date;
  entity._expiryDate = event.params._expiryDate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleeventDeleteDistributorProduct(
  event: eventDeleteDistributorProductEvent
): void {
  let entity = new eventDeleteDistributorProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._dpId = event.params._dpId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleeventUpdateDistributorProductUints(
  event: eventUpdateDistributorProductUintsEvent
): void {
  let entity = new eventUpdateDistributorProductUints(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._dpId = event.params._dpId;
  entity._quantity = event.params._quantity;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
