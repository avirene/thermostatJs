"use strict";

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
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
    this.powerSavingMode = false;
  }

  turnPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    }
    if (this.temperature >= 18 && this. temperature <= 25) {
      return "medium-usage";
    }
    if (this.temperature > 25) {
      return "high-usage";
    }
  }
}