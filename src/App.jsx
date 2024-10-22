import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'

function App() {

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

  const addCustomer = (customerName) => {
    setCustomers(state => {
      return [...state, {id: uuidv4(), name: customerName}]
    })
  }

  const deleteCustomer = (id) => {
    setCustomers(state => {
      return state.filter(customer => customer.id !== id)
    })
  }

  return (
  <>
    <Header title="Customers" />
    <main className="container mx-auto pt-8 space-y-8">
      <AddCustomerForm addCustomer={addCustomer}/>
      <CustomerList customers={customers} deleteCustomer={deleteCustomer} />
    </main>
  </>
  )
}

export default App