import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../shared/Actions/index';

class List extends Component {
    static fetchData(store) {
        return store.dispatch(actions.fetchTodos());
    }

    componentWillMount() {
        this.props.fetchTo();
    }

    render() {
        // console.log(this.props.todos);
        return (
            
            <div >
                {
                    this.props.todos.todos.map(item => {
                        return (
                            <div key={item.id} >
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTo : () => dispatch(actions.fetchTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);