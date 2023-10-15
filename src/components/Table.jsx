import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import BasketModal from './BasketModal';
import '../assets/styles/table.css';
import PlantCard from './PlantCard';



export default function Table() {
    const [plantdata, setplantData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const [numberOFgoods, setNumberOFgoods] = useState(0);
    const [BasketModalVisibility, setBasketModalVisibility] = useState(false);
    const [sortPriceClass, setsortPriceClass] = useState('sort-plant');
    const [sortNameClass, setsortNameClass] = useState('sort-plant');
    const [basket, setBasket] = useState([]);
    const [searchingPlant, setSearchingPlant] = useState(null);
    const [plantCardVisibility, setplantCardVisibility] = useState(false);
    const [choosingPlant, setchoosingPlant] = useState({

    });

    useEffect(() => {
        fetch('/plants')
            .then((resp) => resp.json())
            .then((setplantData))
    }, []);
    const nPages = Math.ceil((plantdata.length) / recordsPerPage);

    function submitSearch(event) {
        event.preventDefault();
        if (plantdata.some((plantItem) => plantItem.plantName === searchingPlant)) {
            setplantData(plantdata.filter(el => el.plantName === searchingPlant))
        }
        else {
            window.alert('Unfortunately we havent got such a plant for now');
        }
    }

    function sortPrice() {
        setsortPriceClass('sorted');
        setsortNameClass('sort-plant');
        setplantData(plantdata.sort((price1, price2) => price1.price - price2.price))
    }

    function sortName() {
        setsortNameClass('sorted')
        setsortPriceClass('sort-plant');
        setplantData(plantdata.sort((name1, name2) => (name1.plantName > name2.plantName) ? 1 : ((name1.plantName < name2.plantName) ? -1 : 0)));
    }

    if (plantdata) {
        return (
            <div className='table-content'>
                <h2 className='header-content-head'> Plants we have for now</h2>
                <>
                    <div className='table-cart'>
                        <button className='btnCart' onClick={() => { setBasketModalVisibility(true) }}>🛒  {numberOFgoods}</button>

                    </div>
                    <div className='table-search'>
                        <form onSubmit={submitSearch}>
                            <input onChange={(e) => setSearchingPlant(e.target.value)}
                                className="table-search-input"
                                type="search"
                                placeholder="Search for a plant"
                            />
                            <input className="table-search-btn" type="submit" value="🌸 GO 🌸" />
                            <input className="table-search-glass" type="submit" value="🔎" />
                        </form>
                        <div className='table-sort'>
                            <p className='table-sort'><span onClick={sortPrice} className={sortPriceClass}>By price</span>    <span onClick={sortName} className={sortNameClass}>By name</span></p>
                        </div>
                    </div>


                    {BasketModalVisibility && <div className='basketModal'>
                        <button className="closeButton" onClick={() => { setBasketModalVisibility(false) }}>✖</button>
                        <hr />
                        <BasketModal basket={basket} setBasketModalVisibility={setBasketModalVisibility} setNumberOFgoods={setNumberOFgoods} />
                    </div>}
                </>
                <div className='table-content-plants'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Photo</th>
                                <th scope='col'>Plant Name</th>
                                <th scope='col'>Sort Name</th>
                                <th scope='col' className='featureDnone'>Size</th>
                                <th scope='col' className='featureDnone'>Age</th>
                                <th scope='col' className='featureDnone'>Features</th>
                                <th scope='col'>Price in hrn</th>
                                <th scope='col' className='featureDnone'>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(plantdata.slice(indexOfFirstRecord,
                                indexOfLastRecord)).map((plant, index) => {
                                    return (


                                        // To pick up choosing plant for Plant Card


                                        <tr className='tableRowContent' key={index} onClick={() => {
                                            setplantCardVisibility(true); setchoosingPlant(
                                                plantdata[plantdata.indexOf(plant)]
                                            )
                                        }}>
                                            <td> <img className='table-plantPhoto' src={plant.photo} alt='plant' /> </td>
                                            <td>{plant.plantName}</td>
                                            <td>{plant.sorttName}</td>
                                            <td className='featureDnone'>{plant.size}</td>
                                            <td className='featureDnone'>{plant.age}</td>
                                            <td className='featureDnone'>{plant.features}</td>
                                            <td>{plant.price}</td>
                                            <td className='tableCart featureDnone' onClick={() => {
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
                {plantCardVisibility && <div className='plantCard'>
                    <PlantCard choosingPlant={choosingPlant} setplantCardVisibility={setplantCardVisibility} setNumberOFgoods={setNumberOFgoods} numberOFgoods={numberOFgoods} setBasket={setBasket} basket={basket} />
                </div>}
            </div>
        )
    }
}