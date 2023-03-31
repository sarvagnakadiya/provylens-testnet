import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { eventDeleteUser } from "../generated/schema"
import { eventDeleteUser as eventDeleteUserEvent } from "../generated/userDetails/userDetails"
import { handleeventDeleteUser } from "../src/user-details"
import { createeventDeleteUserEvent } from "./user-details-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let neweventDeleteUserEvent = createeventDeleteUserEvent(_address)
    handleeventDeleteUser(neweventDeleteUserEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("eventDeleteUser created and stored", () => {
    assert.entityCount("eventDeleteUser", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "eventDeleteUser",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
