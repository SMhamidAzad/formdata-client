import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import fetcher from '../api/config';

const FormStoreData = () => {
    const [formdata, setFormdata] = useState([]);
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        fetcher.get('get-data').then(res => { setFormdata(res.data); })
    }, [])

    let lastStorData;
    if (sessionStorage.getItem("currentData")) {
        lastStorData = formdata[formdata.length - 1]
    } else {
        lastStorData = []
    }

    const onSubmit = async data => {
        if (data.name === '') {
            data.name = lastStorData?.name
        }
        if (data.sector === '') {
            data.sector = lastStorData?.sector;
        }
        if (data.agree === '') {
            data.agree = lastStorData?.agree;
        }

        const res = await fetcher.patch(`update-data/${lastStorData?._id}`, data);
        if (res.status === 200) {
            window.alert('successfully updated data');
        } else {
            window.alert('something went wrong!!!');
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-red-100'>
            <div class="w-3/4  card  bg-base-200 shadow-xl">
                <h1 className='text-center text-2xl font-medium mt-3'>INPUT DATA</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-4/5 mx-auto">
                            <label class="label">
                                <span class="label-text">Name: </span>
                            </label>
                            <input  {...register("name")} type="text" defaultValue={lastStorData?.name} class="input input-bordered" required />
                        </div>
                        <div className='flex w-4/5 mx-auto mt-4'>
                            <label class="label">
                                <span class="label-text mr-3">Sectors: </span>
                            </label>
                            <select {...register("sector")} class="select select-bordered w-52" >
                                <option disabled selected>{lastStorData?.sector}</option>
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
                        <div class="flex w-4/5 mx-auto mt-4">
                            <label class="label">
                                <span class="label-text mr-3">Agree : </span>
                            </label>
                            <input {...register("agree")} type="text" defaultValue={lastStorData?.agree} class="input input-bordered" />
                        </div>
                        <div className='flex w-4/5 mx-auto mt-4'>
                            <button type='submit' class="btn btn-outline btn-error">Edit Data</button>
                        </div>
                    </form>
                    <div className='flex justify-end mr-28 mb-5 mt-4'>
                        <Link to='/' className='btn btn-outline btn-success'>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormStoreData;