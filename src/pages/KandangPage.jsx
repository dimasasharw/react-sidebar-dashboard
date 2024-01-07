import { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function Kandang() {
    const [dataKandang, setDataKandang] = useState([
        {
            kandang: "kandang 1",
            luas: 100,
            jumlahTernak: 200
        },
        {
            kandang: "kandang 2",
            luas: 100,
            jumlahTernak: 200
        },
        {
            kandang: "kandang 3",
            luas: 100,
            jumlahTernak: 200
        },
        {
            kandang: "kandang 4",
            luas: 100,
            jumlahTernak: 200
        }
    ]);

    const addKandang = () => {
        const newKandang = {
            kandang: `kandang ${dataKandang.length + 1}`,
            luas: 100,
            jumlahTernak: 200
        };
        setDataKandang([...dataKandang, newKandang]);
    };

    const deleteKandang = (index) => {
        const updatedKandang = [...dataKandang];
        updatedKandang.splice(index, 1);
        setDataKandang(updatedKandang);
    };

    return (
        <>
            <div className="bg-page">
                <div className="con-page">
                    <div className="table-title">
                        <input type="checkbox" /> Kandang
                    </div>
                    <div className="add-data button">
                        <button className="btn btn-success" onClick={addKandang}>+ Tambah Data</button>
                    </div>
                </div>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th><input type="checkbox" /> Kandang</th>
                            <th>Luas</th>
                            <th>Jumlah Ternak</th>
                            <th></th>
                        </tr>
                        {dataKandang.map((data, index) => (
                            <tr key={index}>
                                <td><input type="checkbox" /> {data.kandang}</td>
                                <td>{data.luas}</td>
                                <td>{data.jumlahTernak}</td>
                                <td>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={index}
                                        placement={"left"}
                                        overlay={
                                            <Popover id={`popover-positioned-left`}>
                                                <Popover.Body>
                                                    <Link as="h2" className="popover-link">Edit</Link>
                                                </Popover.Body>
                                                <Popover.Body>
                                                    <Link as="h2" onClick={() => deleteKandang(index)} className="popover-link">Delete</Link>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <div className="popover-icon">&#8942;</div>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
