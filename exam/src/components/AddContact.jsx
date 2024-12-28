import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import ReactPhoneInput from "react-phone-input-2";
import { TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Select, MenuItem } from '@mui/material';
import { contacts, categories } from '../data';

function AddContact() {
    const [components, setComponents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const navigate = useNavigate();
    const addComponent = () => {
        setComponents(prevComponents => [...prevComponents,   <Controller key={prevComponents.length}
                      control={control}
                      name={ `phone${prevComponents.length + 1}`}
                      rules={{ required: true }}
                      render={({ field: { ref, ...field } }) => (
                          <ReactPhoneInput
                              {...field}
                              inputExtraProps={{
                                  ref,
                                  required: true,
                                  autoFocus: true
                              }}
                              containerStyle={{
                                  border: "1px solid black",
                                  width: 250,
                                  margin: 5,
                              }}
                              inputStyle={{
                                  background: "#151b26",
                                  color: "#fff",
                                  width: 250,
                              }}
                          />
                      )}
        />]);
    };

    const removeComponent = index => {
        setComponents(prevComponents =>
            prevComponents.filter((_, i) => i !== index)
        );
    };
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm({
        mode:"onChange"
    });

    const onSubmit = (data) => {
       
        //if (!data.phone.match(/^\d{11,20}$/) ) {
        //    alert('invalid phone number!');
        //    return;
        //}
        //components.map((component) => (function () {
        //    if (!component.match(/^\d{11,20}$/)) {
        //        alert('invalid phone number!');
        //        return;
        //    }
        //}))
        let phones=[]
        
       phones.push(data.phone)

        if (components.length > 0) {
            for (var i = 0; i < components.length; i++) {
                phones.push(data[`phone${i + 1}`]);
            }
        }
        let newContact =
        {
            id: contacts[contacts.length - 1].id+1,
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            categoryId: selectedCategory,
            phoneNumbers:[...phones]
        }
        contacts.push(newContact);
        console.log(newContact); 
        reset();
        navigate("/components/ListContacts");
       
    };


  return (
      <React.Fragment>
          <h1>Add contact</h1>
          <section className="container">
              <Box
                  component="form"
                  sx={{
                      '& .MuiTextField-root': {
                          m: 1, width: '25ch',
                      },
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
              >
                  <TextField
                      label="name"
                      placeholder="name"
                      name="name"
                      fullWidth
                      color="primary"
                      focused
                      {...register("name", {
                          required: {
                              value: true,
                              message: "You must specify your first name before moving forward"
                          },
                          pattern: {
                              value: /^[A-Z]+[a-z]+$/,
                              message: "That's not a valid name "
                          }
                      })}
                      error={Boolean(errors.name)}
                      helperText={errors.name && errors.name.message}
                      InputProps={{
                          style: { color: 'white' }
                      }}
                     
                  />
                  <TextField
                      label="Last Name"
                      placeholder="Last Name"
                      name="lastName"
                      fullWidth 
                      color="primary"
                      focused
                      {...register("lastName", {
                          required: {
                              value: true,
                              message: "You must specify last name before moving forward"
                          },
                          pattern: {
                              value: /^[A-Z]+[a-z]+$/,
                              message: "That's not a valid last name "
                          }
                      })}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName && errors.lastName.message}
                      InputProps={{
                          style: { color: 'white' }
                      }}

                  />

                  <TextField
                      label="Email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      fullWidth
                      color="primary"
                      focused 
                      {...register("email", {
                          required: {
                              value: true,
                              message: "You need to specify a valid email address"
                          },
                          pattern: {
                              value: /^\S+@\S+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                          }
                      })}
                      error={Boolean(errors.email)}
                      helperText={errors.email && errors.email.message}
                      InputProps={{
                          style: { color: 'white' }
                      }}

                  />
                  <Select
                      name="category"
                      label="Category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{ color: 'white' }}
                      color="primary"
                      focused
                      fullWidth

                  >
                      {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                              {category.name}
                          </MenuItem>
                      ))}
                  </Select>
                  <Controller
                      control={control}
                      name="phone"
                      rules={{ required: true }}
                      render={({ field: { ref, ...field } }) => (
                          <ReactPhoneInput
                              {...field}
                              inputExtraProps={{
                                  ref,
                                  required: true,
                                  autoFocus: true
                              }}
                              containerStyle={{
                                  border: "1px solid black",
                                  width: 250,
                                  margin: 5,
                              }}
                              inputStyle={{
                                  background: "#151b26",
                                  color: "#fff",
                                  width: 250,
                              }}
                              enableSearch={true}
                              countryCodeEditable={true}
                          />
                      )}
                  />
                  {components.map((component, index) => (
                      <div className="PhoneInputConteiner" key={index}>
                          {component}
                          <Button onClick={() => removeComponent(index)}
                              style={{
                                  borderWidth: 1,
                                  borderColor: 'rgba(0,0,0,0.2)',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  height: 40,
                                  backgroundColor: 'red',
                                  color: '#fff',
                                  margin: 5,
                              }}><DeleteIcon /></Button>
                      </div>
                  ))}
                  <Button onClick={addComponent}>Add new phone number</Button>
                  <Button type="submit" variant="contained">Add new contact</Button>
              </Box>
          </section>

      </React.Fragment>
  );
}

export default AddContact;