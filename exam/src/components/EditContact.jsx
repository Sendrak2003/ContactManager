import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactPhoneInput from "react-phone-input-2";
import { TextField, Button, Box } from '@mui/material';

function EditContact() {
    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(prevComponents => [...prevComponents, <Controller key={prevComponents.length}
            control={control}
            name={`Component ${prevComponents.length + 1}`}
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
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log(data); // Обработка данных формы
        reset();
    };


    return (
        <React.Fragment>
            <h1>Edit contact</h1>
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
                            <Button onClick={() => removeComponent(index)}>Удалить</Button>
                        </div>
                    ))}
                    <Button onClick={addComponent}>Add new phone number</Button>
                    <Button type="submit" variant="contained">Edit contact</Button>
                </Box>
            </section>

        </React.Fragment>
    );
}

export default EditContact;