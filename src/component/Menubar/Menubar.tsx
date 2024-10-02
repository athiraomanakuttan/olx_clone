import './Menubar.css'
type MenubarProps = {
  setMenu: React.Dispatch<React.SetStateAction<string>>; 
};

const Menubar = ({ setMenu }: MenubarProps) => {
  return (
    <div>
      <div className="menubar">
        <ul className='flex items-center gap-5 justify-center p-3'>
            <li onClick={()=>setMenu("")}>All Product</li>
            <li onClick={()=>setMenu("car")}>Car</li>
            <li onClick={()=>setMenu("Motorcycle")}>Motorcycle</li>
            <li onClick={()=>setMenu("Mobile phone")}>Mobile phone</li>
            <li onClick={()=>setMenu("House")}>House</li>
            <li onClick={()=>setMenu("Scooter")}>Scooter</li>
            <li onClick={()=>setMenu("Bike")}>Bike</li>
            <li onClick={()=>setMenu("Apartments")}>Apartments</li>
        </ul>
      </div>
    </div>
  )
}

export default Menubar
