"use strict";

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAUL_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }


  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  turnPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }

  turnPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  resetTemperature() {
    this.temperature = this.DEFAUL_TEMPERATURE;
  }
}