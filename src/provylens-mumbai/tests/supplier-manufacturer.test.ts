import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { eventArrivalTime } from "../generated/schema"
import { eventArrivalTime as eventArrivalTimeEvent } from "../generated/supplierManufacturer/supplierManufacturer"
import { handleeventArrivalTime } from "../src/supplier-manufacturer"
import { createeventArrivalTimeEvent } from "./supplier-manufacturer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _arrivalTime = BigInt.fromI32(234)
    let neweventArrivalTimeEvent = createeventArrivalTimeEvent(_arrivalTime)
    handleeventArrivalTime(neweventArrivalTimeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("eventArrivalTime created and stored", () => {
    assert.entityCount("eventArrivalTime", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "eventArrivalTime",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_arrivalTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
