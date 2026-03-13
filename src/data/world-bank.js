/**
 * World Bank Data Module
 * Source: https://data.worldbank.org/
 * 
 * This module provides data from World Bank Open Data API
 * Data includes population, land area, GDP, and various economic indicators
 * Comparing China and India
 */

const worldBankData = {
  // Population data (2024 estimates in millions)
  population: {
    china: 1408.0,
    india: 1450.0,
    source: 'World Bank',
    year: 2024,
    unit: 'millions'
  },
  
  // Land area (in million sq km)
  landArea: {
    china: 9.60,
    india: 3.29,
    source: 'World Bank',
    year: 2022,
    unit: 'million km²'
  },
  
  // GDP (2024, in trillion USD)
  gdp: {
    china: 18.53,
    india: 3.73,
    source: 'World Bank',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP PPP (2024, in trillion international dollars)
  ppp: {
    china: 30.0,
    india: 11.5,
    source: 'IMF',
    year: 2024,
    unit: 'trillion Int$'
  },
  
  // GDP growth rate (2024, %)
  gdpGrowth: {
    china: 5.0,
    india: 6.5,
    source: 'World Bank',
    year: 2024,
    unit: 'percent'
  },
  
  // Electricity production (2023, in TWh)
  electricityProduction: {
    china: 9458.0,
    india: 1855.0,
    source: 'World Bank',
    year: 2023,
    unit: 'TWh'
  },
  
  // Steel production (2024, in million tonnes)
  steelProduction: {
    china: 1010.0,
    india: 140.0,
    source: 'World Steel Association',
    year: 2024,
    unit: 'million tonnes'
  }
};

export default worldBankData;
