import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';

const steps = [
    'Carrier',
    'Address',
    'Contact List',
    'Country | Mode',
    'Insurance',
    'Notes',
    'Speciality',
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 12px)',
        right: 'calc(50% + 12px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        '& .MuiStepConnector-line': {
            borderColor: '#D54029',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        '& .MuiStepConnector-line': {
            borderColor: '#D54029',
        },
    },
    '& .MuiStepConnector-line': {
        borderColor: theme.palette.divider,
        borderTopWidth: 2,
        borderRadius: 1,
        marginTop: -5,
    },
}));

const CustomStepIcon = ({ completed, index }) => {
    const isLastStep = index === steps.length - 1;

    return (
        <div
            style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: `4px solid ${completed ? '#D54029' : '#9EA3A2'}`,
                backgroundColor: completed ? '#D54029' : '#9EA3A2',
                position: 'relative',
                left: '1px',
                zIndex: 1,
            }}
        >
            {completed && !isLastStep && <Check style={{ fontSize: 18 }} />}
        </div>
    );
};

const VerticalStepper = () => {
    const [activeStep, setActiveStep] = useState(0); 

    const [Carriername, setCarriername] = useState("");
    const [MC, setMC] = useState("");
    const [setLogo] = useState("");
    const [Paymentterms, setPaymentterms] = useState("");
    const [Paymentmethod, setPaymentmethod] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [Dotnumber, setDotnumber] = useState("");
    const [Address, setAddress] = useState("");
    const [AddressLine2, setAddressLine2] = useState("");
    const [Region, setRegion] = useState("");
    const [Country, setCountry] = useState("");
    const [AddressLine1, setAddressLine1] = useState("");
    const [City, setCity] = useState("");
    const [ZIP, setZIP] = useState("");
    const [ContactType, setContactType] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
    const [Fax, setFax] = useState("");
    const [Mode, setMode] = useState("");
    const [Note, setNote] = useState("");
    const [Date, setDate] = useState("");
    const [Commodity, setCommodity] = useState("");
    const [Packaging, setPackaging] = useState("");
    const [Policy, setPolicy] = useState("");
    const [Owning, setOwning] = useState("");
    const [Liability, setLiability] = useState("");
    const [Type, setType] = useState("");
    const [Effective, setEffective] = useState("");
    const [Status, setStatus] = useState("");
    const [setUploadDocuments] = useState("");


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderForm = () => {
        switch (activeStep) {
            case 0:
                return (
                    <div style={{ width: "auto", height: "auto", padding: "10px 0",border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                            Carrier
                        </p>
                    </div>
    
                    <hr
                        style={{display: "flex",
                            flexDirection: "row",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "1px solid #D9D9D9",
                        }}
                    />
    
                    <form style={{ padding: '10px' }}>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Carrier name
                                <input
                                    style={{ backgroundColor: "white" }}
                                    type="Carriername"
                                    value={Carriername}
                                    onChange={(e) => setCarriername(e.target.value)}
                                    required
                                />
                            </label>
    
    
                            <label
        style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "left",
            width: "50%",
            marginRight: "10px",
            fontSize: "12px",
            fontWeight: "400",
        }}
    >
        Logo
        <div style={{ display: "flex" }}>
            <input
                style={{
                    color: "#B6B2BD",
                    height: '182px',
                    width: '436px',
                    border: '1px dotted #B6B2BD', 
                }}
                type="file"
                onChange={(e) => setLogo(e.target.files[0])} 
            />
        </div>
    </label>
    
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                MC/FF/MX  Number
                                <input
                                    style={{ backgroundColor: "white" }}
                                    type="MC"
                                    value={MC}
                                    onChange={(e) => setMC(e.target.value)}
                                    required
                                />
                            </label>
    
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{
                                    display: "flex",
                            flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Payment terms
                                <div style={{ display: "flex" }}>
                                    <input
                                        style={{ color: "#B6B2BD" }}
                                        type="Paymentterms"
                                        value={Paymentterms}
                                        onChange={(e) => setPaymentterms(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
    
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Phone number
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="Phone number"
                                    value={Phonenumber}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Payment method
                                <select
                                    style={{ backgroundColor: "white", width: "100%" }}
                                    value={Paymentmethod}
                                    onChange={(e) => setPaymentmethod(e.target.value)}
                                    required
                                >
                                    <option value="" disabled></option>
                                    <option value="Category1">Category 1</option>
                                    <option value="Category2">Category 2</option>
                                    <option value="Category3">Category 3</option>
                                </select>
                            </label>
    
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Dot number
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="Dotnumber"
                                    value={Dotnumber}
                                    onChange={(e) => setDotnumber(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </form>
                </div>
                );
            case 1:
                return (
                    <div style={{ width: "auto", height: "auto", padding: "10px 0",border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                            Address
                        </p>
                    </div>
    
                    <hr
                        style={{display: "flex",
                            flexDirection: "row",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "1px solid #D9D9D9",
                        }}
                    />
    
                    <form style={{ padding: '10px' }}>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Address type
                                <select
                                    style={{ backgroundColor: "white", width: "100%" }}
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                >
                                    <option value="" disabled></option>
                                    <option value="Category1">Category 1</option>
                                    <option value="Category2">Category 2</option>
                                    <option value="Category3">Category 3</option>
                                </select>
                            </label>
    
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Address Line 1
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="AddressLine1"
                                    value={AddressLine1}
                                    onChange={(e) => setAddressLine1(e.target.value)}
                                    required
                                />
                            </label>
    
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Address Line 2
                                <input
                                    style={{ backgroundColor: "white" }}
                                    type="AddressLine2"
                                    value={AddressLine2}
                                    onChange={(e) => setAddressLine2(e.target.value)}
                                    required
                                />
                            </label>
    
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                City
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="City"
                                    value={City}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </label>
    
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                State/Province/Region
                                <div style={{ display: "flex" }}>
                                    <input
                                        style={{ color: "#B6B2BD" }}
                                        type="State/Province/Region"
                                        value={Region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
    
                            <label
                                style={{display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                ZIP/Postal Code
                                <input
                                    style={{ color: "#B6B2BD" }}
                                    type="ZIP"
                                    value={ZIP}
                                    onChange={(e) => setZIP(e.target.value)}
                                    required
                                />
                            </label>
    
                        </div>
    
                        <div
                            className="form-group"
                            style={{ display: "flex", color: "#5F5A6B" }}
                        >
                            <label
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    textAlign: "left",
                                    width: "50%",
                                    marginRight: "10px",
                                    fontSize: "12px",
                                    fontWeight: "400px",
                                }}
                            >
                                Country
                                <select
                                    style={{ backgroundColor: "white", width: "100%" }}
                                    value={Country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                >
                                    <option value="" disabled></option>
                                    <option value="Category1">Category 1</option>
                                    <option value="Category2">Category 2</option>
                                    <option value="Category3">Category 3</option>
                                </select>
                            </label>
    
                        </div>
                    </form>
                </div>
                );

                case 2:
                    return (
                        <div style={{ width: "auto", height: "auto", padding: "10px 0" ,border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                                Contact List
                            </p>
                        </div>
        
                        <hr
                            style={{display: "flex",
                                flexDirection: "row",
                                marginLeft: "10px",
                                marginRight: "10px",
                                border: "1px solid #D9D9D9",
                            }}
                        />
        
                        <form style={{ padding: '10px' }}>
        
                            <div
                                className="form-group"
                                style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                            >
                                <label
                                    style={{display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        marginRight: "10px",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Contact type
                                    <select
                                        style={{ backgroundColor: "white", width: "100%" }}
                                        value={ContactType}
                                        onChange={(e) => setContactType(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled></option>
                                        <option value="Category1">Category 1</option>
                                        <option value="Category2">Category 2</option>
                                        <option value="Category3">Category 3</option>
                                    </select>
                                </label>
        
                                <label
                                    style={{display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Name
                                    <input
                                        style={{ color: "#B6B2BD" }}
                                        type="Name"
                                        value={Name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </label>
        
                            </div>
        
                            <div
                                className="form-group"
                                style={{ display: "flex", color: "#5F5A6B" }}
                            >
                                <label
                                    style={{display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        marginRight: "10px",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Email
                                    <input
                                        style={{ backgroundColor: "white" }}
                                        type="Email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
        
                                <label
                                    style={{display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Password
                                    <input
                                        style={{ color: "#B6B2BD" }}
                                        type="Password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </label>
        
                            </div>
        
                            <div
                                className="form-group"
                                style={{ display: "flex", color: "#5F5A6B" }}
                            >
                                <label
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        marginRight: "10px",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Phone & Ext
                                    <div style={{ display: "flex" }}>
                                        <input
                                            style={{ color: "#B6B2BD" }}
                                            type="Phone"
                                            value={Phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                </label>
        
                                <label
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        textAlign: "left",
                                        width: "50%",
                                        fontSize: "12px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Fax
                                    <input
                                        style={{ color: "#B6B2BD" }}
                                        type="Fax"
                                        value={Fax}
                                        onChange={(e) => setFax(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                    );
                    case 3:
                        return (
                            <div style={{ width: "auto", height: "auto", padding: "10px 0" ,border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                        Country  | Mode
                    </p>
                </div>

                <hr
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "10px",
                        marginRight: "10px",
                        border: "1px solid #D9D9D9",
                    }}
                />

                <form style={{ padding: '10px' }}>

                    <div
                        className="form-group"
                        style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                    >
                        <label
                            style={{display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Country
                            <select
                                style={{ backgroundColor: "white", width: "100%" }}
                                value={Country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                <option value="" disabled></option>
                                <option value="Category1">Category 1</option>
                                <option value="Category2">Category 2</option>
                                <option value="Category3">Category 3</option>
                            </select>
                        </label>

                        <label
                            style={{display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Mode
                            <select
                                style={{ backgroundColor: "white", width: "100%" }}
                                value={Mode}
                                onChange={(e) => setMode(e.target.value)}
                                required
                            >
                                <option value="" disabled></option>
                                <option value="Category1">Category 1</option>
                                <option value="Category2">Category 2</option>
                                <option value="Category3">Category 3</option>
                            </select>
                        </label>
                    </div>
                </form>
                    </div>
                        );
                    case 4:
                        return (
                            <div style={{ width: "auto", height: "auto", padding: "10px 0" ,border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                                    Insurance
                                </p>
                            </div>
            
                            <hr
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    border: "1px solid #D9D9D9",
                                }}
                            />
            
                            <form style={{ padding: '10px' }}>
            
                                <div
                                    className="form-group"
                                    style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                                >
                                    <label
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            marginRight: "10px",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Policy Number
                                        <input
                                            style={{ backgroundColor: "white" }}
                                            type="Policy"
                                            value={Policy}
                                            onChange={(e) => setPolicy(e.target.value)}
                                            required
                                        />
                                    </label>
            
                                    <label
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Owning Enterprise
                                        <input
                                            style={{ color: "#B6B2BD" }}
                                            type="Owning"
                                            value={Owning}
                                            onChange={(e) => setOwning(e.target.value)}
                                            required
                                        />
                                    </label>
            
                                </div>
            
                                <div
                                    className="form-group"
                                    style={{ display: "flex", color: "#5F5A6B" }}
                                >
                                    <label
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            marginRight: "10px",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Type
                                        <select
                                            style={{ backgroundColor: "white", width: "100%" }}
                                            value={Type}
                                            onChange={(e) => setType(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled></option>
                                            <option value="Category1">Category 1</option>
                                            <option value="Category2">Category 2</option>
                                            <option value="Category3">Category 3</option>
                                        </select>
                                    </label>
            
                                    <label
                                        style={{display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Liability Cover
                                        <input
                                            style={{ color: "#B6B2BD" }}
                                            type="Liability"
                                            value={Liability}
                                            onChange={(e) => setLiability(e.target.value)}
                                            required
                                        />
                                    </label>
            
                                </div>
            
                                <div
                                    className="form-group"
                                    style={{ display: "flex", color: "#5F5A6B" }}
                                >
                                    <label
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            marginRight: "10px",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Effective Date
                                        <div style={{ display: "flex" }}>
                                            <select
                                                style={{ backgroundColor: "white", width: "100%" }}
                                                value={Effective}
                                                onChange={(e) => setEffective(e.target.value)}
                                                required
                                            >
                                                <option value="" disabled></option>
                                                <option value="Category1">Category 1</option>
                                                <option value="Category2">Category 2</option>
                                                <option value="Category3">Category 3</option>
                                            </select>
                                        </div>
                                    </label>
            
                                    <label
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            width: "50%",
                                            fontSize: "12px",
                                            fontWeight: "400px",
                                        }}
                                    >
                                        Status
                                        <select
                                            style={{ backgroundColor: "white", width: "100%" }}
                                            value={Status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled></option>
                                            <option value="Category1">Category 1</option>
                                            <option value="Category2">Category 2</option>
                                            <option value="Category3">Category 3</option>
                                        </select>
                                    </label>
                                </div>
            
            
                                <div
                                    className="form-group"
                                    style={{ display: "flex", color: "#5F5A6B" }}
                                >
                                   <label
                style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "left",
                    width: "50%",
                    marginRight: "10px",
                    fontSize: "12px",
                    fontWeight: "400",
                }}
            >
                Upload Documents
                <div style={{ display: "flex" }}>
                    <input
                        style={{
                            color: "#B6B2BD",
                            height: '182px',
                            width: '436px',
                            border: '1px dotted #B6B2BD', 
                        }}
                        type="file"
                        onChange={(e) => setUploadDocuments(e.target.files[0])} 
                    />
                </div>
            </label>
            
                                </div>
                            </form>
                        </div>
                        );
                    case 5:
                        return (
                            <div style={{ width: "auto", height: "auto", padding: "10px 0" ,border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                        Notes
                    </p>
                </div>

                <hr
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "10px",
                        marginRight: "10px",
                        border: "1px solid #D9D9D9",
                    }}
                />

                <form style={{ padding: '10px' }}>

                    <div
                        className="form-group"
                        style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                    >
                        <label
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Date
                            <input
                                style={{ backgroundColor: "white" }}
                                type="DATE"
                                value={Date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </label>

                        <label
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Note
                            <input
                                style={{ color: "#B6B2BD" }}
                                type="Note"
                                value={Note}
                                onChange={(e) => setNote(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                </form>
            </div>
                        );
                    case 6:
                        return (
                            <div style={{ width: "auto", height: "auto", padding: "10px 0",border:"1px solid #FFFFFF",backgroundColor:"#FFFFFF",borderRadius:"16px",margin:'20px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: "600", textAlign: "left", color: "#121114", fontSize: "16px", lineHeight: "23.68px", margin: "10px" }}>
                        Speciality
                    </p>
                </div>

                <hr
                    style={{
                        marginLeft: "10px",
                        marginRight: "10px",
                        border: "1px solid #D9D9D9",
                    }}
                />

                <form style={{ padding: '10px' }}>

                    <div
                        className="form-group"
                        style={{ display: "flex", color: "#5F5A6B", flexDirection: "row" }}
                    >
                        <label
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Commodity

                            <select
                                style={{ backgroundColor: "white", width: "100%" }}
                                value={Commodity}
                                onChange={(e) => setCommodity(e.target.value)}
                                required
                            >
                                <option value="" disabled></option>
                                <option value="Category1">Category 1</option>
                                <option value="Category2">Category 2</option>
                                <option value="Category3">Category 3</option>
                            </select>
                        </label>

                        <label
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "left",
                                width: "50%",
                                fontSize: "12px",
                                fontWeight: "400px",
                            }}
                        >
                            Packaging
                            <select
                                style={{ backgroundColor: "white", width: "100%" }}
                                value={Packaging}
                                onChange={(e) => setPackaging(e.target.value)}
                                required
                            >
                                <option value="" disabled></option>
                                <option value="Category1">Category 1</option>
                                <option value="Category2">Category 2</option>
                                <option value="Category3">Category 3</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>
                        );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ height: '100%' }}>
            <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={(props) => <CustomStepIcon {...props} index={index} />}
                            style={{ color: index === activeStep ? '#D54029' : '#9EA3A2' }}
                        >
                            <span style={{ color: index === activeStep ? '#D54029' : '#9EA3A2', fontSize: '14px', fontWeight: 400 }}>{label}</span>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {renderForm()}
            <div>
                {/* Navigation buttons */}
                {activeStep !== 0 && (
                    <button onClick={handleBack}>Back</button>
                )}
                {activeStep < steps.length - 1 && (
                    <button onClick={handleNext}>Next</button>
                )}
            </div>
        </Box>
    );
};

export default VerticalStepper;
