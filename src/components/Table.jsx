import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import BasketModal from './BasketModal';
import '../assets/styles/table.css';
// import plant1 from '../assets/images/plant1.jpg';


export default function Table() {
    const [plantdata, setplantData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const [numberOFgoods, setNumberOFgoods] = useState(0);
    const [BasketModalVisibility, setBasketModalVisibility] = useState(false);
    const [basket, setBasket] = useState([]);
    const [choosingPlant, setchoosingPlant] = useState({
        "photo": "",
        "plantName": "",
        "price": ""
    });


    useEffect(() => {
        fetch('http://localhost:3000/plants')
            .then((resp) => resp.json())
            .then((setplantData))
    }, []);
    const nPages = Math.ceil((plantdata.length) / recordsPerPage);


    if (plantdata) {
        return (
            <div className='table-content'>
                <h2 className='header-content-head'> Plants we have for now</h2>
                <>
                    <div className='table-cart'>
                        <button className='btnCart' onClick={() => { setBasketModalVisibility(true) }}>🛒  {numberOFgoods}</button>

                    </div>
                    <div className='table-search'>
                        <form >
                            <input
                                className="table-search-input"
                                type="search"
                                placeholder="Search for a plant"
                            />
                            <input className="table-search-btn" type="submit" value="🌸 GO 🌸" />
                        </form>
                        <div className='table-sort'>
                            <p className='table-sort'><span className='sort-price'>By price</span>    <span className='sort-name'>By name</span></p>
                        </div>
                    </div>


                    {BasketModalVisibility && <div className='basketModal'>
                        <button className="closeButton" onClick={() => { setBasketModalVisibility(false) }}>✖</button>
                        <hr />
                        <BasketModal basket={basket} />
                    </div>}
                </>
                <div className='table-content-plants'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Photo</th>
                                <th scope='col'>Plant Name</th>
                                <th scope='col'>Sort/Type Name</th>
                                <th scope='col'>Size</th>
                                <th scope='col'>Age</th>
                                <th scope='col'>Features</th>
                                <th scope='col'>Price in hrn</th>
                                <th scope='col'>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(plantdata.slice(indexOfFirstRecord,
                                indexOfLastRecord)).map((plant, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> <img className='table-plantPhoto' src={plant.photo} alt='plant' /> </td>
                                            <td>{plant.plantName}</td>
                                            <td>{plant.sorttName}</td>
                                            <td>{plant.size}</td>
                                            <td>{plant.age}</td>
                                            <td>{plant.features}</td>
                                            <td>{plant.price}</td>
                                            <td className='tableCart' onClick={() => {
                                                setNumberOFgoods(numberOFgoods + 1);
                                                setBasket([...basket, {
                                                    "id": `${plant.id}`,
                                                    "photo": `${plant.photo}`,
                                                    "plantName": `${plant.plantName}`,
                                                    "sortName": `${plant.sortName}`,
                                                    "price": `${plant.price}`
                                                }])
                                            }}>🛒</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        )
    }
}