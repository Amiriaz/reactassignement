import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table  striped>
      
        <tr >
          <th>Customer services</th>
          <th>About us</th>
          <th>Source on Alibaba.com</th>
          <th>Sell on Alibaba.com</th>
          <th>Sell on Alibaba.com</th>
        </tr>
      
      
        <tr>
          <td>Help Center</td>
          <td>Report abuse</td>
          <td>Open a case</td>
          <td>Policies & rules</td>
          <td>Get paid for your feedback</td>
        </tr>
        <tr>
          <td>Report abuse</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr >
          <td >Open a case</td>
          <td>Larry the Bird</td>
          <td >@twitter</td>
        </tr>
        <tr >
          <td >Policies & rules</td>
          <td>Larry the Bird</td>
          <td >@twitter</td>
        </tr>
        <tr >
          <td >Get paid for your feedback</td>
          <td>Larry the Bird</td>
          <td >@twitter</td>
        </tr>
    </Table>
  );
}

export default StripedRowExample;