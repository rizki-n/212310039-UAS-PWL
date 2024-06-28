import React, { useState } from "react";

const Paket3 = () => {
    const [inputValue, setInputValue] = useState({
        username: "",
        email: "",
        address: "",
        creditCard: "",
        paket: "Paket 3",
        harga: 500000
    });

    const setData = (e) => {
        const { name, value } = e.target;
        setInputValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const addCustomerData = async (e) => {
        e.preventDefault();
        const { username, email, address, creditCard, paket, harga } = inputValue;
        const res = await fetch('http://localhost:5000/api/customer/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, address, creditCard, paket, harga })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {
            alert('error');
        } else {
            setInputValue({
                username: "",
                email: "",
                address: "",
                creditCard: "",
                paket: "Paket 3",
                harga: 500000
            });
            alert('Pesanan Menunggu Persetujuan');
        }
    };

    return (
        <div className="container">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h2>PAKET 3</h2>
                <h2>Rp 50.000</h2>
                <p className="lead"></p>
            </div>

            <div className="row g-5">
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Ketentuan Paket</h4>
                    <h5>- 1 Album 15 Halaman</h5>
                    <h5>- Master Photo & Frame</h5>

                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            {/* Username */}
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" name="username" value={inputValue.username} onChange={setData} placeholder="Username" required />
                                    <div className="invalid-feedback">Your username is required.</div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" name="email" value={inputValue.email} onChange={setData} placeholder="you@example.com" />
                                <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                            </div>
                            {/* Address */}
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" name="address" value={inputValue.address} onChange={setData} placeholder="Kota/Tempat" required />
                                <div className="invalid-feedback">Please enter your shipping address.</div>
                            </div>
                            {/* Paket */}
                            <div className="col-12">
                                <label htmlFor="paket" className="form-label">Paket</label>
                                <input type="text" className="form-control" id="paket" name="paket" value={inputValue.paket} readOnly />
                            </div>
                            {/* Harga */}
                            <div className="col-12">
                                <label htmlFor="harga" className="form-label">Harga</label>
                                <input type="number" className="form-control" id="harga" name="harga" value={inputValue.harga} readOnly />
                            </div>
                            {/* Credit Card */}
                            <div className="col-md-6">
                                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                <input type="number" className="form-control" id="cc-number" name="creditCard" value={inputValue.creditCard} onChange={setData} placeholder="0000000" required />
                                <div className="invalid-feedback">Credit card number is required</div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <button onClick={addCustomerData} className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Paket3;
