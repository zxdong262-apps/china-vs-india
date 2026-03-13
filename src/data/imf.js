/**
 * IMF Data Module
 * Source: https://www.imf.org/en/Publications/WEO
 * 
 * This module provides data from International Monetary Fund
 * Focus on economic forecasts and financial indicators
 * Comparing China and India
 */

const imfData = {
  // Foreign exchange reserves (2024, in trillion USD)
  foreignExchangeReserves: {
    china: 3.25,
    india: 0.67,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // Trade volume (2024, in trillion USD)
  tradeVolume: {
    china: 6.10,
    india: 1.12,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP growth rate (2024, %)
  gdpGrowth: {
    china: 5.0,
    india: 6.5,
    source: 'IMF',
    year: 2024,
    unit: 'percent'
  },
  
  // Current account balance (2024, in billion USD)
  currentAccountBalance: {
    china: 280,
    india: -30,
    source: 'IMF',
    year: 2024,
    unit: 'billion USD'
  },
  
  // Manufacturing output (2024, in trillion USD)
  manufacturingOutput: {
    china: 5.15,
    india: 0.45,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP per capita (2024, in USD)
  gdpPerCapita: {
    china: 13100,
    india: 2570,
    source: 'IMF',
    year: 2024,
    unit: 'USD'
  }
};

export default imfData;
