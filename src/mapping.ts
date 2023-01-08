import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Locked as LockedEvent,
  Mint as MintEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  Unlocked as UnlockedEvent,
  VerificationValidityPeriod as VerificationValidityPeriodEvent,
  Verified as VerifiedEvent
} from "../generated/PolygonGlance/PolygonGlance"
import {
  Approval,
  ApprovalForAll,
  Locked,
  Mint,
  OwnershipTransferred,
  Transfer,
  Unlocked,
  VerificationValidityPeriod,
  Verified
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleLocked(event: LockedEvent): void {
  let entity = new Locked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.tokenURI = event.params.tokenURI
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleUnlocked(event: UnlockedEvent): void {
  let entity = new Unlocked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleVerificationValidityPeriod(
  event: VerificationValidityPeriodEvent
): void {
  let entity = new VerificationValidityPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.period = event.params.period
  entity.save()
}

export function handleVerified(event: VerifiedEvent): void {
  let entity = new Verified(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.timestamp = event.params.timestamp
  entity.save()
}
