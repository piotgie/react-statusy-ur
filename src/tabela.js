import React, { useState } from 'react'
import { statusy } from './statusy'
import Select from 'react-select'

const Tabela = () => {

    const [num, setNum] = useState(0);

    const options = [
        { value: '0', label: 'MCH 1529' },
        { value: '1', label: 'MCH 1530' },
        { value: '2', label: 'MCH 1531' },
        { value: '3', label: 'MCH 1532' },
        { value: '4', label: 'MCH 1533' },
        { value: '5', label: 'MCH 1534' },
        { value: '6', label: 'MCH 1535' },
        { value: '7', label: 'MCH 1536' },
        { value: '8', label: 'MCH 1537' },
        { value: '9', label: 'MCH 1538' },
        { value: '10', label: 'MCH 1539' },
        { value: '11', label: 'MCH 1540' },
        { value: '12', label: 'MCH 1542' },
        { value: '13', label: 'MCH 1543' },
        { value: '14', label: 'MCH 1545' },
        { value: '15', label: 'MCH 1546' },
        { value: '16', label: 'MCH 1548' },
        { value: '17', label: 'MCH 1549' },
        { value: '18', label: 'MCH 1550' }
    ]

    const handleChange = (selectedOption) => {
        setNum(selectedOption.value)
    }

    return (
        <div className='tabela'>
            {/* <h1> MCH {statusy[num].mch} </h1> */}
            <Select
            defaultValue={options[0]} 
            options={options} 
            onChange={handleChange}/>
            <table>
                <tbody>
                    <tr>
                        <th>ZMIENNA</th>
                        <th>FORMAT</th>
                        <th>WARTOŚĆ</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD26</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd26}</td></tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='sp'><strong>SP1</strong></td>
                        <td className='formatB'>B</td>
                        <td className='formatB'>#</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD200</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd200}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD204</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd204}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD208</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd208}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD212</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd212}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='sp'><strong>SP2</strong></td>
                        <td className='formatB'>B</td>
                        <td className='formatB'>#</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD220</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd220}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD224</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd224}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD228</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd228}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD232</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd232}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='sp'><strong>SP3</strong></td>
                        <td className='formatB'>B</td>
                        <td className='formatB'>#</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD240</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd240}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD244</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd244}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD248</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd248}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD252</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd252}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='sp'><strong>SP4</strong></td>
                        <td className='formatB'>B</td>
                        <td className='formatB'>#</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD260</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd260}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD264</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd264}</td>
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD268</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd268}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>DB131.DBD272</td>
                        <td className='format'>F</td>
                        <td>{statusy[num].db131.dbd272}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Tabela