import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListContacts from './components/ListContacts';
import ViewContact from './components/ViewContact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Categories from './components/Categories';
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <React.Fragment>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Navigate to={'/components/ListContacts'} />} />
                        <Route path='/components/ListContacts' element={<ListContacts />} />
                        <Route path='/components/AddContact' element={<AddContact />} />
                        <Route path='/components/ViewContact/:contactId' element={<ViewContact />} />
                        <Route path='/components/EditContact/:contactId' element={<EditContact />} />
                        <Route path='/components/Categories' element={<Categories />} />
                    </Routes>

                </React.Fragment>
            </>
        );
    }
}



