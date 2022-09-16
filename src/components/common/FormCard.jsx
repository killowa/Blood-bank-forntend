const FormCard = ({children, title}) => {
  return ( 
    <div className={`w-50 my-card center`}>
      <h1 className={`text-center w-100 bg-dark`}>{title}</h1>
      {children}
    </div>
   );
}
 
export default FormCard;
