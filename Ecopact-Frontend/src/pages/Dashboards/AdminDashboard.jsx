import { Table } from 'flowbite-react';


const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className=' text-blue-900 font-bold text-2xl'>Admin Dashboard</div>
      <div className="overflow-x-auto w-5/6 mx-auto border border-gray-300">
      <Table hoverable className=''>
        <Table.Head className='text-blue-900 text-center border '>
          <Table.HeadCell>#id</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y border text-center">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell>client-X</Table.Cell>
            <Table.Cell>client@gmail.com</Table.Cell>
            <Table.Cell>
              <div className='flex justify-around '>
                <p  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View
                </p>
                <p  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </p>
                <p  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Delete
                </p>
              </div>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default AdminDashboard
