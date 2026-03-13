/**
 * China Government Data Module
 * Source: National Bureau of Statistics of China
 * https://data.stats.gov.cn/
 * 
 * This module provides data specifically from Chinese government sources
 * Comparing China and India
 * Agriculture, energy, and other sector-specific data
 */

const chinaGovData = {
  // Agriculture production (2024, in million tonnes)
  agricultureProduction: {
    grain: {
      china: 706.5,
      india: 330.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    pork: {
      china: 58.2,
      india: 3.5,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    chicken: {
      china: 26.3,
      india: 4.5,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    eggs: {
      china: 30.0,
      india: 12.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    vegetables: {
      china: 590.0,
      india: 130.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    fish: {
      china: 37.2,
      india: 14.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    mariculture: {
      china: 25.28,
      india: 0.15,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    distantWaterFishing: {
      china: 2.19,
      india: 0.5,
      source: 'Ministry of Agriculture and Rural Affairs',
      year: 2024,
      unit: 'million tonnes'
    },
    fruits: {
      china: 330.0,
      india: 105.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    watermelon: {
      china: 58.0,
      india: 25.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    }
  },
  
  // Energy production (2024, in million tonnes of standard coal equivalent)
  energyProduction: {
    china: 495.8,
    india: 125.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes SCE'
  },
  
  // Coal production (2024, in million tonnes)
  coalProduction: {
    china: 475.0,
    india: 90.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes'
  },
  
  // Oil production (2024, in million tonnes)
  oilProduction: {
    china: 190.0,
    india: 35.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes'
  },
  
  // Natural gas production (2024, in billion cubic meters)
  naturalGasProduction: {
    china: 245.0,
    india: 35.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'billion m³'
  },
  
  // Industrial output (2024, in trillion RMB)
  industrialOutput: {
    china: 41.56,
    india: 5.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'trillion RMB'
  },
  
  // Power generation capacity (2024, in GW)
  powerCapacity: {
    windPower: {
      china: 520,
      india: 45,
      source: 'National Energy Administration of China',
      year: 2024,
      unit: 'GW'
    },
    solarPower: {
      china: 1186,
      india: 82,
      source: 'National Energy Administration of China',
      year: 2024,
      unit: 'GW'
    },
    hydropower: {
      china: 450,
      india: 56,
      source: 'National Energy Administration of China',
      year: 2025,
      unit: 'GW'
    }
  },
  
  // Manufacturing production (2024)
  manufacturing: {
    automobile: {
      china: 31.24,
      india: 5.8,
      source: 'China Association of Automobile Manufacturers',
      year: 2024,
      unit: 'million vehicles'
    },
    newEnergyVehicles: {
      china: 12.14,
      india: 2.1,
      source: 'China Association of Automobile Manufacturers',
      year: 2024,
      unit: 'million vehicles'
    },
    mobilePhones: {
      china: 1730,
      india: 320,
      source: 'Ministry of Industry and Information Technology',
      year: 2024,
      unit: 'million units'
    },
    shipbuilding: {
      china: 43.5,
      india: 2.2,
      source: 'China Shipbuilding Industry Corporation',
      year: 2024,
      unit: 'million CGT'
    },
    aluminum: {
      china: 43.0,
      india: 4.1,
      source: 'China Nonferrous Metal Industry Association',
      year: 2024,
      unit: 'million tonnes'
    },
    tenNonferrousMetals: {
      china: 79.0,
      india: 6.5,
      source: 'China Nonferrous Metal Industry Association',
      year: 2024,
      unit: 'million tonnes'
    },
    industrialRobots: {
      china: 95.0,
      india: 5.4,
      source: 'China Robot Industry Alliance',
      year: 2024,
      unit: 'thousand units'
    }
  },
  
  // Transportation infrastructure (2024, in km)
  transportation: {
    expressway: {
      china: 190000,
      india: 3052,
      source: 'Ministry of Transport of China',
      year: 2025,
      unit: 'km'
    },
    highSpeedRail: {
      china: 50000,
      india: 0,
      source: 'China Railway / UIC',
      year: 2025,
      unit: 'km'
    }
  },

  // Military budget (2024, in billion USD)
  militaryBudget: {
    china: 245,
    india: 85,
    source: 'SIPRI',
    year: 2024,
    unit: 'billion USD',
    // Military budget as percentage of GDP
    // GDP from world-bank.js: China 18.53 trillion, India 3.73 trillion
    // Calculation: militaryBudget (billion) / (GDP (trillion) * 1000)
    militaryBudgetInGDP: {
      china: 1.32,
      india: 2.28
    },
    // Military budget as percentage of fiscal revenue
    // Calculation: militaryBudget (billion) / (fiscalRevenue (trillion) * 1000) * 100
    militaryBudgetInFiscalRevenue: {
      china: 7.9,
      india: 20.7
    }
  },

  // Fiscal revenue (2025, in trillion USD)
  fiscalRevenue: {
    china: 3.1,
    india: 0.41,
    source: 'Ministry of Finance of China / Ministry of Finance of India',
    year: 2025,
    unit: 'trillion USD'
  }
};

export default chinaGovData;
