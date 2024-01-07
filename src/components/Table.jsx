import React, { useState } from 'react';

const Table = () => {
    // State lokal untuk menyimpan data kandang
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
        }
    ]);

    // Fungsi untuk menambah kandang
    const addKandang = () => {
        const newKandang = {
            kandang: `kandang ${dataKandang.length + 1}`,
            luas: 100,
            jumlahTernak: 200
        };
        setDataKandang([...dataKandang, newKandang]);
    };

    return (
        <div>
            <button onClick={addKandang}>Tambah Kandang</button>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Kandang</th>
                        <th>Luas</th>
                        <th>Jumlah Ternak</th>
                    </tr>
                    {dataKandang.map((data, index) => (
                        <tr key={index}>
                            <td>{data.kandang}</td>
                            <td>{data.luas}</td>
                            <td>{data.jumlahTernak}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
