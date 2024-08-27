'use client'
import '../app/globals.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

const HomePage = () => {
  const router = useRouter()
  const [vehicleType, setVehicleType] = useState('')
  const [modelYear, setModelYear] = useState('')
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchVehicleTypes = async () => {
    setLoading(true) // Start loading
    const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    const data = await response.json()
    setVehicleTypes(data.Results.map((item) => item.MakeName))
    setLoading(false)
  }

  const handleNext = async () => {
    setLoading(true)
    try {
      const makesResponse = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      const makesData = await makesResponse.json()
      
      const selectedMake = makesData.Results.find(make => make.MakeName === vehicleType)
      
      if (!selectedMake) {
        console.error('Make not found')
        setLoading(false)
        return
      }

      const modelsResponse = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${selectedMake.MakeId}/modelyear/${modelYear}?format=json`)
      const modelsData = await modelsResponse.json()
      router.push({
        pathname: `/result/${encodeURIComponent(vehicleType)}/${modelYear}`,
        query: { data: JSON.stringify(modelsData.Results) },
      }).then(() => {
        setLoading(false)
      }).catch((err) => {
        console.error('Navigation failed:', err)
        setLoading(false)
      })

    } catch (error) {
      console.error('Error fetching vehicle data:', error)
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900'>
      <h1 className='text-4xl font-bold mb-8 text-yellow-500'>Car Dealer App</h1>

      <div className='mb-4 w-full max-w-sm'>
        <label className='block text-lg font-medium mb-2 text-yellow-300'>Vehicle Type</label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          onClick={fetchVehicleTypes}
          className='w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 bg-gray-800 text-yellow-300'
        >
          <option value='' className="text-gray-500">Select a vehicle type</option>
          {vehicleTypes.map((type, index) => (
            <option key={index} value={type} className="text-yellow-300">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4 w-full max-w-sm'>
        <label className='block text-lg font-medium mb-2 text-yellow-300'>Model Year</label>
        <select
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          className='w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 bg-gray-800 text-yellow-300'
        >
          <option value='' className="text-gray-500">Select a model year</option>
          {Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i).map((year) => (
            <option key={year} value={year} className="text-yellow-300">
              {year}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleNext}
        className={`mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium transform transition duration-300 ${
          !vehicleType || !modelYear || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600 hover:scale-105'
        }`}
        disabled={!vehicleType || !modelYear || loading}
      >
        {loading ? 'Loading...' : 'Next'}
      </button>
    </div>
  )
}

export default HomePage
