import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import fetcher from '../api/config';

const Formdata = () => {
    const [checked, setChecked] = useState(false);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(" ")

    const onSubmit = async (data) => {
        if (data.name === '' || data.sector === 'Select a sector' || data.agree === false) {
            setError("Please fill the all field!")
        } else {
            setError("");
            data.agree = "Yes"
            const res = await fetcher.post('store-data', data);
            if (res.status === 200) {
                window.alert('Successfully updated data!')
                sessionStorage.setItem('currentData', JSON.stringify('Yes'))
            } else {
                window.alert('something went wrong!!!');
            }
        }

    }

    return (
        <div className='flex justify-center items-center h-screen bg-red-100'>
            <div class="w-3/4  card  bg-base-200 shadow-xl ">
                <h1 className='text-center text-2xl font-medium mt-3'>FORM</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-4/5 mx-auto">
                            <label class="label">
                                <span class="label-text">Name: </span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered"  {...register("name")} />
                        </div>
                        <div className='flex w-4/5 mx-auto mt-4 '>
                            <label class="label">
                                <span class="label-text mr-3">Sectors: </span>
                            </label>
                            <select class="select select-bordered w-52 "  {...register("sector")}>
                                <option disabled selected>Select a sector</option>
                                <option>Manufacturing</option>
                                <option>Contruction materials</option>
                                <option>Electronics and Optics</option>
                                <option>Food and Beverage</option>
                                <option>Bakery & confectionery products</option>
                                <option>Beverage</option>
                                <option>Fish & fish products</option>
                                <option>Meat & meat products</option>
                                <option>Milk & dairy products</option>
                                <option>Other</option>
                                <option>Sweet & sback food</option>
                                <option>Furniture</option>
                                <option>Bathroom/sauna</option>
                                <option>Bedroom</option>
                                <option>Children's room</option>
                                <option>Kitchen</option>
                                <option>Living room</option>
                                <option>Office</option>
                                <option>Other (furniture)</option>
                                <option>Outdoor</option>
                                <option>Project furniture</option>
                                <option>Machinery</option>
                                <option>Machinery components</option>
                                <option>Machinery equipments/tools</option>
                                <option>Manufracture of Machinery</option>
                                <option>Maritime</option>
                                <option>Aluminium and steel workboats</option>
                                <option>Boat/Yacht building</option>
                                <option>Ship repair and conversion</option>
                                <option>Metal structures</option>
                                <option>Other</option>
                                <option>Reoair and maintanence service</option>
                                <option>Metalworking</option>
                                <option>Construction of metal structures</option>
                                <option>Houses and buildings</option>
                                <option>Metal products</option>
                                <option>Metal works</option>
                                <option>CNC-machining</option>
                                <option>Forgings, Fasteners</option>
                                <option>Gas, Plasma, laser cutting</option>
                                <option>MIG, TIG, Aluminium welding</option>
                                <option>Plastic and Rubber</option>
                                <option>Packeging</option>
                                <option>Plastic goods</option>
                                <option>Plastic welding and processing </option>
                                <option>Plastic profiles</option>
                                <option>Printing</option>
                                <option>Advertising</option>
                                <option>Books/periodicals printing</option>
                                <option>Labeling and packaging printing</option>
                                <option>Textile and Clothing</option>
                                <option>Clothing</option>
                                <option>Textile</option>
                                <option>Wood</option>
                                <option>Other(Wood)</option>
                                <option>Wooden building materials</option>
                                <option>Wooden houses</option>
                                <option>Other</option>
                                <option>Creative industries</option>
                                <option>Energy technology</option>
                                <option>Environment</option>
                                <option>Service</option>
                                <option>Business Services</option>
                                <option>Engineering</option>
                                <option>Information Technology and Telecommunications</option>
                                <option>Data processing, web portals, E-marketing</option>
                                <option>Programming, consultancy</option>
                                <option>Software, Hardware</option>
                                <option>Telecommunications</option>
                                <option>Tourism</option>
                                <option>Translation services</option>
                                <option>Transport and Logistics</option>
                                <option>Air</option>
                                <option>Rail</option>
                                <option>Road</option>
                                <option>Water</option>
                            </select>
                        </div>
                        <div class="flex w-4/5 mx-auto mt-2">
                            <label class="label cursor-pointer">
                                <input {...register("agree")} type="checkbox" checked={checked ? true : false} onClick={() => setChecked(!checked)} class="checkbox mb-3 mr-3" />
                                <span class="label-text mb-3">Agree to terms</span>
                            </label>
                        </div>
                        <div className='flex w-4/5 mx-auto'>
                            <span className="text-error">{error}</span>
                        </div>
                        <div className='flex w-4/5 mx-auto mt-4'>
                            <button type='submit' class="btn btn-outline btn-success">Saved Result</button>
                        </div>
                    </form>
                    <div className='flex justify-end mr-28 mb-5 mt-4'>
                        <Link to='storedata' className='btn btn-outline btn-secondary'>See The Result</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formdata;