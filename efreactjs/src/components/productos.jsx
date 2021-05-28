import React from 'react';
import { Link } from 'react-router-dom';
import Helper from '../helper.js';
import '../App.css'

class Productos extends React.Component{
    constructor(){
        super();
        this.state = {
            producto : {},
            unidadesDisponibles: 0,
            unidadesSolicitadas : 1,
            cantidadProductos : 0,
        }
    }

    render(){
        
        var links = {
            pathname: `/detalles/${this.props.productoSimple.nombre}`,
            state: {
                producto : this.state.producto
            }
        };

        return(
            <div className="card">
                <Link to={links} title="Ver producto">
                <img className="card-img-top" src={'./src/img/'+this.props.productoSimple.imagen} alt={this.props.productoSimple.nombre} /></Link>
                <div className="card-body text-muted">
                <Link to={links} title="Ver producto"><h4 className="card-title">{this.props.productoSimple.nombre}</h4></Link>
                    <p>Precio: ${this.props.productoSimple.precio} ‎</p>
                    <p>Stock: {this.state.unidadesDisponibles}</p>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group inline pull-left">
                                <Link to={links} className="btn btn-danger btn-sm">Ver más</Link>
                            </div>
                            <div className="btn-group inline pull-right">
                                <button className="btn btn-success btn-sm" onClick={this.addTocart.bind(this)}>Add <i className="fa fa-shopping-cart"></i></button>
                                <input type="number" value={this.state.unidadesSolicitadas} min="1" onChange={(e) => this.calculaUnidades(e)} />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        )
    }
    addTocart(){ 
        let cantidadRestante = this.props.productoSimple.stock - this.state.unidadesSolicitadas;
        let producto = this.props.productoSimple;
        producto.cantidad = this.state.unidadesSolicitadas;
        Helper.productosPedidos.push(producto)
        this.setState({
            unidadesDisponibles: cantidadRestante
        })
    }

    calculaUnidades(e){
        this.setState({
            unidadesSolicitadas: e.target.value
        })
        
    }
    componentWillReceiveProps(){
        this.setState({
            producto : this.props.productoSimple,
            unidadesDisponibles : this.props.productoSimple.stock
        })
    }

    componentWillMount(){
        this.setState({
            producto : this.props.productoSimple,
            unidadesDisponibles : this.props.productoSimple.stock
        })
    }
}
export default Productos;