'use client'

import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

export default function Home() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  })

  const handleValueChange = newValue => {
    // console.log('newValue:', newValue)
    setValue(newValue)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Datepicker
        disabledDates={[
          {
            startDate: '2023-09-05',
            endDate: '2023-09-08'
          },
          {
            startDate: '2023-09-15',
            endDate: '2023-09-20'
          }
        ]}
        primaryColor={'sky'}
        i18n={'es'}
        startWeekOn='mon'
        placeholder={'Desde - Hasta'}
        separator={'-'}
        showFooter={true}
        configs={{
          footer: {
            cancel: 'Cancelar',
            apply: 'Aceptar'
          }
        }}
        value={value}
        onChange={handleValueChange}
        displayFormat={'DD/MM/YYYY'}
        inputClassName='w-full p-3 border rounded-lg'
      />
    </main>
  )
}
