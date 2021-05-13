import React, { Component } from 'react'
import './HistoryMem.css';

export default class HistoryMem extends Component {
    render() {
        return (
            <div className="his">

                <div className="header-His">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="Logo" />
                </div>

                <div className="header-p">
                    <p>ประวัติการจอง</p>
                </div>

                <div className="table-his">

                    <table width="40%" border="10">

                        <tr>
                            <td >ห้อง</td>
                            <td >วันที่จอง</td>
                            <td >ถึงวันที่</td>
                        </tr>
                        <tr>
                            <td>A1</td>
                            <td>20/02/2555</td>
                            <td>21/02/2555</td>
                        </tr>

                    </table>
                </div>

            </div>
        )
    }
}
