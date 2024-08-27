import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ResultPage = () => {
  const router = useRouter()
  const { makeId, year, data } = router.query
  const [vehicleModels, setVehicleModels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setVehicleModels(JSON.parse(data))
      setLoading(false)
    }
  }, [data])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-2xl font-semibold text-yellow-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-900">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        {makeId} - {year}
      </h1>
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
    </div>
  )
}

export default ResultPage
