import styles from './styles.module.css'
import data from './table-data'
const Table = () => {
  const headers = [
    {type: 'transactionType', title: 'Donated/Recieved'},
    {type: 'bloodType', title: 'Blood type'},
    {type: 'date', title: 'Date'},
    {type: 'client', title: 'Donor/Patient'}
  ]

  function buildTableRowFromBloodData(data) {
    const row = []
    headers.forEach(({type}) => row.push(<td>{data[type]}</td>))
    return <tr>{row}</tr>
  }
  
  return (  
    <table className={styles.table}>
      <tr>
        {headers.map(header => (<th id={header} key={header}>{header.title}</th>))}
      </tr>

      {data.map(bloodData => (
        buildTableRowFromBloodData(bloodData)
      ))}
    </table>
  );
}
 
export default Table;
