import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import ContextMenus from "./ContextMenus";
import React, { useState } from "react";
import { contacts } from '../data';

function ListContacts() {
    const [phoneFilter, setPhoneFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [showRightMenu, setShowRightMenu] = useState(false);
    const [contextMenuContact, setContextMenuContact] = useState(null);
    const [postion, setPosition] = useState({ x: 0, y: 0 });


    const handlePhoneFilterChange = (e) => {
        setPhoneFilter(e.target.value);
    };

    const handleNameFilterChange = (e) => {
        setNameFilter(e.target.value);
    };

    const contextMenu = (e, contact) => {
        e.preventDefault();
        console.log("Selected contact: ", contact);
        setPosition({ x: e.pageX, y: e.pageY });
        setShowRightMenu(true);
        setContextMenuContact(contact);
    }
    
    const hideContextMenu = () => {
        setShowRightMenu(false);
    };
    

   
    const filteredContacts = contacts.filter((contact) => {
       //Метод массива some() позволяет узнать, есть
       //ли в массиве хотя бы один элемент, удовлетворяющий
       //условию в функции - колбэке.Колбэк - функция будет
       //вызываться для каждого элемента массива до тех пор,
       // пока не вернётся true, либо пока не закончатся элементы
       // массива.

        //Результатом вызова метода some() будет boolean -
        //значение true или false.Если ни один элемент в массиве
        //не удовлетворит условию, то результат будет false.
        const phoneMatch = contact.phoneNumbers.some(number =>
            //Этот метод определён у массивов и строк.

            //Для массивов: проверяет, есть ли искомый элемент в массиве.

            //Для строк: проверяет, есть ли искомая подстрока в строке.

            //Возвращает true, если искомый элемент нашёлся и 
            //false — если нет
            number.includes(phoneFilter)
        )

        
        const nameMatch = contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || nameFilter === '';

        return phoneMatch && nameMatch; 
    });
  return (
      <React.Fragment>
          <section className="contact-search">
              <h1>Contact list</h1>
              <div className="conteiner">
                      <TextField
                          label="Search by Phone Number"
                          value={phoneFilter}
                          onChange={handlePhoneFilterChange}
                          fullWidth
                          color="primary"
                          focused 
                          InputProps={{
                              style: { color: 'white', margin: 6 }
                          }}
                  />
                      OR
                      <TextField
                          label="search by Name"
                          value={nameFilter}
                          onChange={handleNameFilterChange}
                          fullWidth
                          color="primary"
                          focused 
                          InputProps={{
                              style: { color: 'white', margin: 6 }
                          }}
                      />
                     
              </div>
          </section>
          <section className="content" onClick={hideContextMenu}>
              <ul onClick={hideContextMenu} className="contact-list"> 
              {filteredContacts.length > 0 ? 
                  filteredContacts.map((contact) => (
                      <li key={contact.id} onContextMenu={contextMenu}>
                          <NavLink to={`/components/ViewContact/${contact.id}`}>
                              <Card sx={{
                                  backgroundColor: '#4791db',
                              }}>
                                  <PersonIcon
                                      style={{
                                          backgroundColor: "#" + `${Math.floor(Math.random() * 16777215).toString(16)}`,
                                          borderRadius: 50,
                                          width: 50,
                                          height: 50,
                                          margin: 5,
                                      }}
                                  />
                                  <CardContent>
                                      <div className="contact-data">
                                          <Typography variant="body2" color="text.secondary">
                                              Name:
                                          </Typography>
                                          <Typography gutterBottom variant="h5" component="div"
                                              style={{
                                                  margin: 6,
                                                  wordBreak: "break-word",
                                              }}
                                          >
                                              {contact.name}
                                          </Typography>
                                      </div>
                                      <div className="contact-data">
                                          <Typography variant="body2" color="text.secondary">
                                              Phone:
                                          </Typography>
                                          <Typography gutterBottom variant="h5" component="div"
                                              style={{
                                                  margin: 6,
                                                  wordBreak: "break-word",
                                              }}
                                          >
                                              +{contact.phoneNumbers[0]}
                                          </Typography>
                                      </div>
                                      <div className="contact-data">
                                          <Typography variant="body2" color="text.secondary">
                                              Email:
                                          </Typography>
                                          <Typography gutterBottom variant="h5" component="div"
                                              style={{
                                                  margin: 6,
                                                  wordBreak: "break-word",
                                              }}
                                          >
                                              {contact.email}
                                          </Typography>
                                      </div>
                                  </CardContent>
                              </Card>
                          </NavLink>
                      </li>
                  
                  )) : 
                      contacts.map((contact) => (
                          <li key={contact.id} onContextMenu={(e) => contextMenu(e, contact)}>
                              <NavLink to={`/components/ViewContact/${contact.id}`}>
                                  <Card sx={{
                                      backgroundColor: '#4791db',
                                  }}>
                                      <PersonIcon
                                          style={{
                                              backgroundColor: "#" + `${Math.floor(Math.random() * 16777215).toString(16)}`,
                                              borderRadius: 50,
                                              width: 50,
                                              height: 50,
                                              margin: 5,
                                          }}
                                      />
                                      <CardContent>
                                          <div className="contact-data">
                                              <Typography variant="body2" color="text.secondary">
                                                  Name:
                                              </Typography>
                                              <Typography gutterBottom variant="h5" component="div"
                                                  style={{
                                                      margin: 6,
                                                      wordBreak: "break-word",
                                                  }}
                                              >
                                                  {contact.name}
                                              </Typography>
                                          </div>
                                          <div className="contact-data">
                                              <Typography variant="body2" color="text.secondary">
                                                  Phone:
                                              </Typography>
                                              <Typography gutterBottom variant="h5" component="div"
                                                  style={{
                                                      margin: 6,
                                                      wordBreak: "break-word",
                                                  }}
                                              >
                                                  +{contact.phoneNumbers[0]}
                                              </Typography>
                                          </div>
                                          <div className="contact-data">
                                              <Typography variant="body2" color="text.secondary">
                                                  Email:
                                              </Typography>
                                              <Typography gutterBottom variant="h5" component="div"
                                                  style={{
                                                      margin: 6,
                                                      wordBreak: "break-word",
                                                  }}
                                              >
                                                  {contact.email}
                                              </Typography>
                                          </div>
                                      </CardContent>
                                  </Card>
                              </NavLink>
                          </li>
                      )
                      )
              }

              </ul>
              {showRightMenu && <ContextMenus postion={postion} contact={contextMenuContact} />}
          </section>
          <Button variant="contained"
              style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  backgroundColor: '#4791db',
                  borderRadius: 50,
                  bottom: 20,
                  position: 'sticky'

              }}
              id="add-button"
              LinkComponent={NavLink}
              to="/components/AddContact"
          ><PersonAddAltIcon /></Button>


      </React.Fragment>
  );
}

export default ListContacts;
