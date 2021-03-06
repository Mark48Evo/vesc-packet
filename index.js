const crc16 = require('./crc16');

const packetTypes = {
  COMM_FW_VERSION: 0,
  COMM_JUMP_TO_BOOTLOADER: 1,
  COMM_ERASE_NEW_APP: 2,
  COMM_WRITE_NEW_APP_DATA: 3,
  COMM_GET_VALUES: 4,
  COMM_SET_DUTY: 5,
  COMM_SET_CURRENT: 6,
  COMM_SET_CURRENT_BRAKE: 7,
  COMM_SET_RPM: 8,
  COMM_SET_POS: 9,
  COMM_SET_HANDBRAKE: 10,
  COMM_SET_DETECT: 11,
  COMM_SET_SERVO_POS: 12,
  COMM_SET_MCCONF: 13,
  COMM_GET_MCCONF: 14,
  COMM_GET_MCCONF_DEFAULT: 15,
  COMM_SET_APPCONF: 16,
  COMM_GET_APPCONF: 17,
  COMM_GET_APPCONF_DEFAULT: 18,
  COMM_SAMPLE_PRINT: 19,
  COMM_TERMINAL_CMD: 20,
  COMM_PRINT: 21,
  COMM_ROTOR_POSITION: 22,
  COMM_EXPERIMENT_SAMPLE: 23,
  COMM_DETECT_MOTOR_PARAM: 24,
  COMM_DETECT_MOTOR_R_L: 25,
  COMM_DETECT_MOTOR_FLUX_LINKAGE: 26,
  COMM_DETECT_ENCODER: 27,
  COMM_DETECT_HALL_FOC: 28,
  COMM_REBOOT: 29,
  COMM_ALIVE: 30,
  COMM_GET_DECODED_PPM: 31,
  COMM_GET_DECODED_ADC: 32,
  COMM_GET_DECODED_CHUK: 33,
  COMM_FORWARD_CAN: 34,
  COMM_SET_CHUCK_DATA: 35,
  COMM_CUSTOM_APP_DATA: 36,
  COMM_NRF_START_PAIRING: 37,
};

const packerTypeToString = {
  0: 'COMM_FW_VERSION',
  1: 'COMM_JUMP_TO_BOOTLOADER',
  2: 'COMM_ERASE_NEW_APP',
  3: 'COMM_WRITE_NEW_APP_DATA',
  4: 'COMM_GET_VALUES',
  5: 'COMM_SET_DUTY',
  6: 'COMM_SET_CURRENT',
  7: 'COMM_SET_CURRENT_BRAKE',
  8: 'COMM_SET_RPM',
  9: 'COMM_SET_POS',
  10: 'COMM_SET_HANDBRAKE',
  11: 'COMM_SET_DETECT',
  12: 'COMM_SET_SERVO_POS',
  13: 'COMM_SET_MCCONF',
  14: 'COMM_GET_MCCONF',
  15: 'COMM_GET_MCCONF_DEFAULT',
  16: 'COMM_SET_APPCONF',
  17: 'COMM_GET_APPCONF',
  18: 'COMM_GET_APPCONF_DEFAULT',
  19: 'COMM_SAMPLE_PRINT',
  20: 'COMM_TERMINAL_CMD',
  21: 'COMM_PRINT',
  22: 'COMM_ROTOR_POSITION',
  23: 'COMM_EXPERIMENT_SAMPLE',
  24: 'COMM_DETECT_MOTOR_PARAM',
  25: 'COMM_DETECT_MOTOR_R_L',
  26: 'COMM_DETECT_MOTOR_FLUX_LINKAGE',
  27: 'COMM_DETECT_ENCODER',
  28: 'COMM_DETECT_HALL_FOC',
  29: 'COMM_REBOOT',
  30: 'COMM_ALIVE',
  31: 'COMM_GET_DECODED_PPM',
  32: 'COMM_GET_DECODED_ADC',
  33: 'COMM_GET_DECODED_CHUK',
  34: 'COMM_FORWARD_CAN',
  35: 'COMM_SET_CHUCK_DATA',
  36: 'COMM_CUSTOM_APP_DATA',
  37: 'COMM_NRF_START_PAIRING',
};

const notRequiredResponsePacket = [
  packetTypes.COMM_JUMP_TO_BOOTLOADER,
  packetTypes.COMM_SET_DUTY,
  packetTypes.COMM_SET_CURRENT,
  packetTypes.COMM_SET_CURRENT_BRAKE,
  packetTypes.COMM_SET_RPM,
  packetTypes.COMM_SET_POS,
  packetTypes.COMM_SET_HANDBRAKE,
  packetTypes.COMM_SET_DETECT,
  packetTypes.COMM_SET_SERVO_POS,
  packetTypes.COMM_REBOOT,
  packetTypes.COMM_ALIVE,
  packetTypes.COMM_FORWARD_CAN,
  packetTypes.COMM_SET_CHUCK_DATA,
  packetTypes.COMM_CUSTOM_APP_DATA,
];

module.exports = {
  packetTypes,
  packerTypeToString,
  notRequiredResponsePacket,
  crc16,
};
