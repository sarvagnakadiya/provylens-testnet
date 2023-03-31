import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { eventAddManufacturerProduct } from "../generated/schema"
import { eventAddManufacturerProduct as eventAddManufacturerProductEvent } from "../generated/manufacturerProduct/manufacturerProduct"
import { handleeventAddManufacturerProduct } from "../src/manufacturer-product"
import { createeventAddManufacturerProductEvent } from "./manufacturer-product-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _mpId = BigInt.fromI32(234)
    let _supplierAddress = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let _smId = [BigInt.fromI32(234)]
    let _name = Bytes.fromI32(1234567890)
    let _description = Bytes.fromI32(1234567890)
    let _unit = BigInt.fromI32(234)
    let _price = BigInt.fromI32(234)
    let _date = BigInt.fromI32(234)
    let _expiryDate = BigInt.fromI32(234)
    let neweventAddManufacturerProductEvent = createeventAddManufacturerProductEvent(
      _mpId,
      _supplierAddress,
      _smId,
      _name,
      _description,
      _unit,
      _price,
      _date,
      _expiryDate
    )
    handleeventAddManufacturerProduct(neweventAddManufacturerProductEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("eventAddManufacturerProduct created and stored", () => {
    assert.entityCount("eventAddManufacturerProduct", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_mpId",
      "234"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_supplierAddress",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_smId",
      "[234]"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "1234567890"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_description",
      "1234567890"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_unit",
      "234"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_price",
      "234"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_date",
      "234"
    )
    assert.fieldEquals(
      "eventAddManufacturerProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_expiryDate",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
