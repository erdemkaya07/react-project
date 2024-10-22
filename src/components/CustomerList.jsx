import CustomerListItem from './CustomerListItem'


const CustomerList = ({customers, deleteCustomer}) => {
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
            <CustomerListItem key={customer.id} customer={customer} deleteCustomer={deleteCustomer}/>
          ))
        }
        {
          customers.length <= 0 && <p className='font-semibold text-large'>No customers to show</p>
        }
      </ul>
    </div>
  )
}

export default CustomerList