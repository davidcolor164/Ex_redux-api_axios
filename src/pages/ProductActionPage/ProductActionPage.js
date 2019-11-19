import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actAddProductRequest, actGetProductRequest,actUpdateProductRequest} from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id :'',
            txtName: '',
            txtPrice: '',
            ckbStatus :''
        }
    }
    componentDidMount() {
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState ({
                id : itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                ckbStatus: itemEditing.status
            })
        }
    }
    

    onChange =( e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState ({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {id,txtName, txtPrice, ckbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name: txtName,
            price: txtPrice,
            status : ckbStatus
        }
        if( id){
            this.props.onUpdateProduct(product);
        }
        else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }
    render() {
        var {txtName, txtPrice, ckbStatus} = this.state;
        return (
            <div className ='col-6'>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Ten San Pham</label>
                        <input type="text" className="form-control" name='txtName' value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Gia</label>
                        <input type="text" className="form-control" name='txtPrice' value={txtPrice} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label >Trang thai</label>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name='ckbStatus' value={ckbStatus} onChange={this.onChange} checked={ckbStatus} />
                            Con hang
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-3">Luu lai</button>
                    <Link to='/product-list' className="btn btn-danger">Tro lai</Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        itemEditing : state.itemEditing
    }
}
const mapDispatchToProps  =(dispatch, props) =>{
    return {
        onAddProduct :(product) =>{
            dispatch(actAddProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) =>{
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);