"use strict";

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature with up()", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases in temperature with down()", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum of 10 degrees", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has PSM on by default", function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can turn the PSM off", function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can turn PSM on", function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can be reset to the default temperature", function() {
    for (var i = 0; i < 6; i++) {
    thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});

describe("when PSM is on", function() {
  it("has a maximum temperature of 25 degrees", function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
});

describe("when PSM is off", function() {
  it("has a maximum temperature of 32 degrees", function() {
    thermostat.turnPowerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
});
