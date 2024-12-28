import React from 'react';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { contacts, categories } from '../data';

function ViewContact() {
    const { contactId } = useParams();
    const contact = contacts[contactId-1]
    console.log(contact);
    return (
        <React.Fragment>
            <section className="container">
                <Card sx={{ width: "100%", height: "100%", backgroundColor: '#4791db', }}>
                    <PersonIcon
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            width: 50,
                            height: 50,

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
                                Last name:
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div"
                                style={{
                                    margin: 6,
                                    wordBreak: "break-word",
                                }}
                            >
                                {contact.lastName}
                            </Typography>
                        </div>
                        {contact.phoneNumbers.map((phone, index) => (
                            <div className="contact-data" key={index}>
                                <Typography variant="body2" color="text.secondary">
                                    Phone {index+1}:
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div"
                                    style={{
                                        margin: 6,
                                        wordBreak: "break-word",
                                    }}
                                >
                                    +{phone}
                                </Typography>
                            </div>
                        ))}
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
                        <div className="contact-data">
                            <Typography variant="body2" color="text.secondary">
                                Category:
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div"
                                style={{
                                    margin: 6,
                                    wordBreak: "break-word",
                                }}

                            >
                                {categories.find((category) => category.id === contact.categoryId)?.name}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </React.Fragment>
 
    );
}

export default ViewContact;