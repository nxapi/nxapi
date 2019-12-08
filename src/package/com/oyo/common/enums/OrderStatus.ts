export enum OrderStatus {
  NEED_MANUAL_BULK = 0,
  NEED_MANUAL_INTERVENTION = 1,
  OWNER_BOOKING = 2,
  BLOCKED = 3,
  CHECKED_OUT = 4,
  NO_SHOW = 5,
  CANCELLED_BOOKING = 6,
  CHECKED_IN = 7,
  UNPROCESSED = 8,
  NEED_MANUAL_OVER_BOOKING = 9,
  SAVED = 10,
  UNKNOWN = 11,
  VOID_BOOKING = 12,
  CONFIRM_BOOKING = 13,
  HOLD = 1000,
}
//generate by interpret-cli dubbo2.js