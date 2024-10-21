import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CustomerListItem from './CustomerListItem'


const CustomerList = () => {

const [customers, setCustomers] = useState([
  {
    id: uuidv4(),
    name: 'Erdem'
  },
  {
    id: uuidv4(),
    name: 'Ahmet'
  },
  {
    id: uuidv4(),
    name: 'Huseyin'
  },
  {
    id: uuidv4(),
    name: 'Kemal'
  },
])


  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
      <div className="flex items-center">
        <p className='font-bold text-cl w-[100px]'>Id</p>
        <p className='font-bold text-cl'>Name</p>

      </div>
      </div>
      <ul className='space-y-4'>
        {
          customers.length > 0 && customers.map(customer => (
            <CustomerListItem key={customer.id} customer={customer}/>
          ))
        }
      </ul>
    </div>
  )
}

export default CustomerList