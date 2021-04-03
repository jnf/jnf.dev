import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { OffsiteLink } from 'components/OffsiteLink'

const FoodContext = createContext()

const converters = {
  g: {
    g: v => v,
    oz: v => (v / 28.35).toFixed(2),
  },
  oz: {
    g: v => Math.round(v * 28.35),
    oz: v => v,
  },
  '°F': {
    '°F': v => v,
    '°C': v => Math.round((v - 32) / 1.8),
  },
  '°C': {
    '°F': v => Math.round(v * 1.8 + 32),
    '°C': v => v,
  }
}

export const FoodContextProvider = ({ children }) => {
  const [scales] = useState({
    temps: ['°F', '°C'],
    mass: ['g', 'oz'],
  })

  const [tempsScale, tempsScaleSetter] = useState(scales.temps[0])
  const [massScale, massScaleSetter] = useState(scales.mass[0])

  return (
    <FoodContext.Provider
      value={{
        scales,
        massScale,
        tempsScale,
        massScaleSetter,
        tempsScaleSetter,
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export const SystemSwitcher = ({ scale, legend }) => {
  const foodContext = useContext(FoodContext)
  const [selectedUnit, setSelectedUnit] = useState(foodContext.scales[scale][0])

  useEffect(() => {
    const setter = foodContext[`${scale}ScaleSetter`]
    setter(selectedUnit)
  }, [selectedUnit])

  const buttoner = unit => {
    return (
      <button
        key={`u${unit}`}
        onClick={() => { setSelectedUnit(unit) }}
        className={selectedUnit === unit ? 'selected' : undefined}
      >
        {unit}
      </button>
    )
  }

  return (
    <fieldset className='systemSwitch'>
      <legend>{legend}</legend>
      {foodContext.scales[scale].map(buttoner)}
    </fieldset>
  )
}

export const Ingredient = ({ scale, value, unit, description, href }, index) => {
  const foodContext = useContext(FoodContext)
  const contextUnit = `${scale}Scale`
  const [currentValue, setCurrentValue] = useState(value)
  const [currentUnit, setCurrentUnit] = useState(unit)

  useEffect(() => {
    const converter = converters[currentUnit][foodContext[contextUnit]]
    setCurrentValue(converter(currentValue))
    setCurrentUnit(foodContext[contextUnit])
  }, [foodContext[contextUnit]])

  return (
    <>
      {currentValue}{currentUnit}{' '}
      {href ? <OffsiteLink href={href}>{description}</OffsiteLink> : description}
    </>
  )
}

export const IngredientList = ({ ingredients = [] }) =>
  <ul>
    {ingredients.map((props, index) =>
      <li key={`ingredient-${index}`}>{Ingredient({ ...props })}</li>
    )}
  </ul>

FoodContextProvider.propTypes = {
  children: PropTypes.node,
}

SystemSwitcher.propTypes = {
  legend: PropTypes.string,
  scale: PropTypes.oneOf(['temps', 'mass']),
}

Ingredient.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  scale: PropTypes.oneOf(['temps', 'mass']),
}

IngredientList.propTypes = {
  ingredients: PropTypes.array,
}
