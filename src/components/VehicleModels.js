import { useEffect, useState } from 'react'

const VehicleModels = ({ makeId, year, data }) => {
  const [vehicleModels, setVehicleModels] = useState([])

  useEffect(() => {
    if (data) {
      setVehicleModels(JSON.parse(data))
    }
  }, [data])

  if (!vehicleModels.length) {
    throw new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <ul className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
      {vehicleModels.map((model, index) => (
        <li
          key={index}
          className="text-lg text-yellow-300 py-2 border-b border-gray-700 last:border-b-0"
        >
          {model.Model_Name}
        </li>
      ))}
    </ul>
  )
}

export default VehicleModels
