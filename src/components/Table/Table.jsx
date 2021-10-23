import './Table.css'
import del from './image/delete_outline-24px 1.svg'
import edit from './image/edit-24px 1.svg'
import moment from 'moment'






const Table = ({reception}) => {
    
    
    return(
        <div className="mainTable">
            <div className="Table">
                <div className="headtable">
                    <p className="name">Имя</p>
                    <p className="doctor">Врач</p>
                    <p className="date">Дата</p>
                    <p className="complaint">Жалобы</p>
                </div>
                <div className="bottom-table">
                    {
                        reception.map((obj,key) => 
                        
                        <div className="reception" key={key}>
                            <div className="name-table"><p>{obj.name}</p></div>
                            <div className="doctor-table"><p>{obj.doctor}</p></div>
                            <div className="date-table"><p>{moment(obj.date).format('DD.MM.YYYY')}</p></div>
                            <div className="complaint-table"><p>{obj.complaint}</p></div>
                            <div className="menu-table">
                                <img src={del} alt=""/>
                                <div className="width"></div>
                                <img src={edit} alt=""/>
                            </div>
                        </div>
                        )
                    }
                    
                        
                    
                </div>
                
                
            </div>
        
        </div>
        
        
        
        
    )
    
}






export default Table;