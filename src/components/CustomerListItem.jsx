import React from 'react'

const CustomerListItem = ({ customer, deleteCustomer }) => {
  return (
    <li className='flex justify-between items-center'>
      <div className="flex items-center">
        <p className='w-[100px]' >{customer.id.slice(0, 6)}</p> {/* slice metodu id de ki rakam kisitlamasi icin */}
        <p className='font-semibold text-lg'>{customer.name}</p>
      </div>
      <button onClick={() => deleteCustomer(customer.id)} className='bg-red-800 text-white px-5 py-1 rounded-lg hover:bg-red-900 transition-colors'>Remove Customer</button>
  </li>
  )
}

export default CustomerListItem