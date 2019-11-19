import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Danh sach san pham</h4>
                <div className="card-text">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Ma So</th>
                        <th>Ten</th>
                        <th>Gia</th>
                        <th>Hanh Dong</th>
                        <th>Trang Thai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.children}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        )
    }
}
